import React, { useEffect, useState, useRef } from "react";
import FilterBox from "./careers-filter-box";
import NoMatchText from "./careers-no-match-text";
import ClearFiltersButton from "./careers-filters-clear";

const CareerFilters = ({
  locations,
  teams,
  worktypes,
  setMatches,
  matches,
}) => {
  const [locationOpen, setLocationOpen] = useState(false);
  const [teamOpen, setTeamOpen] = useState(false);
  const [worktypeOpen, setWorktypeOpen] = useState(false);
  const [filtersChanged, setFiltersChanged] = useState(false);

  const [locationFilterText, setLocationFilter] = useState("All");
  const [teamFilterText, setTeamFilter] = useState("All");
  const [worktypeFilterText, setWorktypeFilter] = useState("All");

  const locationFilterBox = useRef(null);
  const teamFilterBox = useRef(null);
  const worktypeFilterBox = useRef(null);

  const filterElements = [locationFilterBox, teamFilterBox, worktypeFilterBox];

  const filterStateElements = [setLocationOpen, setTeamOpen, setWorktypeOpen];

  const handleClick = (e) => {
    const target = e.target;
    const types = ["location", "team", "worktype"];
    // Iterate through the filter box elements,
    // and only allow one to be open at any one time
    filterElements.forEach((filterElem) => {
      let filterType = filterElem.current.dataset.type;
      if (filterElem.current !== target) {
        const setStateElem = filterStateElements[types.indexOf(filterType)];
        setStateElem(false);
      }
    });
  };

  const handleChange = (e) => {
    const target = e.target;
    const filterText = target.dataset.filter;
    const filterType = target.dataset.type;
    switch (filterType) {
      case "location":
        setLocationFilter(filterText);
        break;
      case "team":
        setTeamFilter(filterText);
        break;
      case "worktype":
        setWorktypeFilter(filterText);
        break;
    }
  };

  const filterListings = () => {
    const listings = document.querySelectorAll(".job-listing");
    let hasMatches = false;
    listings.forEach((listing) => {
      const job = listing;
      // Hide the listings that do not match the filters
      const jobLocation = job.dataset.location;
      const jobTeam = job.dataset.team;
      const jobWorktype = job.dataset.worktype;
      const isMatched = compareListing(jobLocation, jobTeam, jobWorktype);
      if (isMatched.includes(false)) {
        job.classList.add("hidden");
      } else {
        // If one match exists, set matchExists to true
        hasMatches = true;
        job.classList.remove("hidden");
      }
    });
    return hasMatches;
  };

  const compareListing = (jobLocation, jobTeam, jobWorktype) => {
    let locationMatch = false;
    let teamMatch = false;
    let worktypeMatch = false;
    if (locationFilterText === "All" || jobLocation === locationFilterText) {
      locationMatch = true;
    }
    if (teamFilterText === "All" || jobTeam === teamFilterText) {
      teamMatch = true;
    }
    if (worktypeFilterText === "All" || jobWorktype === worktypeFilterText) {
      worktypeMatch = true;
    }
    // Reset the mobile headings if filters are cleared
    if (
      locationFilterText === "All" &&
      teamFilterText === "All" &&
      worktypeFilterText === "All"
    ) {
      resetMobileHeaders();
    }

    return [locationMatch, teamMatch, worktypeMatch];
  };

  const clearFilters = () => {
    setLocationFilter("All");
    setTeamFilter("All");
    setWorktypeFilter("All");
  };

  const resetMobileHeaders = () => {
    // Show the headers again once clearing filters
    const deptMobileHeaders = document.querySelectorAll(".job-department");
    deptMobileHeaders.forEach((header) => {
      let deptHeader = header;
      deptHeader.classList.remove("hidden");
      deptHeader.classList.add("block");
    });
  };

  const checkFiltersModified = () => {
    if (
      locationFilterText === "All" &&
      teamFilterText === "All" &&
      worktypeFilterText === "All"
    ) {
      setFiltersChanged(false);
    } else {
      setFiltersChanged(true);
    }
  };

  useEffect(() => {
    setMatches(filterListings());
    checkFiltersModified();
  }, [locationFilterText, teamFilterText, worktypeFilterText]);

  useEffect(() => {
    setMatches(true);
    document.addEventListener("click", handleClick);
    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);

  return (
    <>
      <div className="grid w-full grid-cols-1 justify-between gap-5 sm:grid-cols-2 lg:grid-cols-4 xl:flex">
        {/* Location filter */}
        <FilterBox
          onClickAction={setLocationOpen}
          changeAction={handleChange}
          open={locationOpen}
          text={locationFilterText}
          reference={locationFilterBox}
          filterData={locations}
          dataType="location"
        />
        {/* Team filter */}
        <FilterBox
          onClickAction={setTeamOpen}
          changeAction={handleChange}
          open={teamOpen}
          text={teamFilterText}
          reference={teamFilterBox}
          filterData={teams}
          dataType="team"
        />
        {/* Worktype filter */}
        <FilterBox
          onClickAction={setWorktypeOpen}
          changeAction={handleChange}
          open={worktypeOpen}
          text={worktypeFilterText}
          reference={worktypeFilterBox}
          filterData={worktypes}
          dataType="worktype"
        />
      </div>
      <ClearFiltersButton
        clearFilters={clearFilters}
        filtersChanged={filtersChanged}
        matches={matches}
      />
      <NoMatchText clearFilters={clearFilters} matches={matches} />
    </>
  );
};

export default CareerFilters;
