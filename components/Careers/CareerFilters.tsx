import React, { useEffect, useState, useRef } from "react";
import FilterBox from "@components/Careers/FilterBox";
import ClearFiltersButton from "@components/Careers/ClearFiltersButton";

const CareerFilters = ({ locations, teams, worktypes }) => {
  const [locationOpen, setLocationOpen] = useState(false);
  const [teamOpen, setTeamOpen] = useState(false);
  const [worktypeOpen, setWorktypeOpen] = useState(false);
  const [filtersChanged, setFiltersChanged] = useState(false);

  const [locationFilterText, setLocationFilter] = useState("Location");
  const [teamFilterText, setTeamFilter] = useState("Team");
  const [worktypeFilterText, setWorktypeFilter] = useState("Worktype");

  const locationFilterBox = useRef(null);
  const teamFilterBox = useRef(null);
  const worktypeFilterBox = useRef(null);

  const filterElements = [locationFilterBox, teamFilterBox, worktypeFilterBox];
  const filterStateElements = [setLocationOpen, setTeamOpen, setWorktypeOpen];

  //   Keep record of listing data after filters have been applied
  const [filteredLocations, setFilteredLocations] = useState([]);
  const [filteredTeams, setFilteredTeams] = useState([]);
  const [filteredWorktypes, setFilteredWorktypes] = useState([]);

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
    const filteredLocations = [];
    const filteredTeams = [];
    const filteredWorktypes = [];
    listings.forEach((listing) => {
      const job = listing as HTMLElement;
      // Hide the listings that do not match the filters
      const isMatched = compareListing(
        job.dataset.location,
        job.dataset.team,
        job.dataset.worktype
      );
      if (isMatched.includes(false)) {
        hideListing(job);
      } else {
        // If one match exists, set matchExists to true
        hasMatches = true;
        showListing(job);
        limitFilterOptions(
          filteredLocations,
          filteredTeams,
          filteredWorktypes,
          job
        );
      }
    });
    setFilteredLocations(filteredLocations);
    setFilteredTeams(filteredTeams);
    setFilteredWorktypes(filteredWorktypes);
    return hasMatches;
  };

  const limitFilterOptions = (
    filteredLocations,
    filteredTeams,
    filteredWorktypes,
    job
  ) => {
    const jobLocation = job.dataset.location;
    const jobTeam = job.dataset.team;
    const jobWorktype = job.dataset.worktype;
    if (!filteredLocations.includes(jobLocation)) {
      filteredLocations.push(jobLocation);
    }
    if (!filteredTeams.includes(jobTeam)) {
      filteredTeams.push(jobTeam);
    }
    if (!filteredWorktypes.includes(jobWorktype)) {
      filteredWorktypes.push(jobWorktype);
    }
  };

  const hideListing = (job) => {
    job.classList.add("max-h-0");
    // If contains 133px, its a table row. If not, it is a div
    if (job.classList.contains("table-row")) {
      // Remove border and replace with transparent
      job.classList.remove("border-tracer-darkgray");
      job.classList.add("border-transparent");

      // Add data attribute for selector to hide gradient borders
      job.dataset.hidden = "true";

      // Remove height and padding
      job.querySelectorAll("div").forEach((td) => {
        td.classList.remove("max-h-[133px]", "py-10");
        td.classList.add("max-h-0", "opacity-0");
      });
    } else {
      job.classList.remove("max-h-[207px]");
    }
  };

  const showListing = (job) => {
    job.classList.remove("max-h-0");
    // If contains 133px, its a table row. If not, it is a div
    if (job.classList.contains("table-row")) {
      // Remove border and replace with transparent
      job.classList.add("border-tracer-darkgray");
      job.classList.remove("border-transparent");

      // Add data attribute for selector to hide gradient borders
      job.dataset.hidden = "false";

      // Remove height and padding
      job.querySelectorAll("div").forEach((td) => {
        td.classList.add("max-h-[133px]", "py-10");
        td.classList.remove("max-h-0", "opacity-0");
      });
    } else {
      job.classList.add("max-h-[207px]");
    }
  };

  const compareListing = (jobLocation, jobTeam, jobWorktype) => {
    let locationMatch = false;
    let teamMatch = false;
    let worktypeMatch = false;
    if (
      locationFilterText === "Location" ||
      jobLocation === locationFilterText
    ) {
      locationMatch = true;
    }
    if (teamFilterText === "Team" || jobTeam === teamFilterText) {
      teamMatch = true;
    }
    if (
      worktypeFilterText === "Worktype" ||
      jobWorktype === worktypeFilterText
    ) {
      worktypeMatch = true;
    }
    // Reset the mobile headings if filters are cleared
    if (
      locationFilterText === "Location" &&
      teamFilterText === "Team" &&
      worktypeFilterText === "Worktype"
    ) {
      resetMobileHeaders();
    }

    return [locationMatch, teamMatch, worktypeMatch];
  };

  const clearFilters = () => {
    setLocationFilter("Location");
    setTeamFilter("Team");
    setWorktypeFilter("Worktype");
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
      locationFilterText === "Location" &&
      teamFilterText === "Team" &&
      worktypeFilterText === "Worktype"
    ) {
      setFiltersChanged(false);
    } else {
      setFiltersChanged(true);
    }
  };

  useEffect(() => {
    filterListings();
    checkFiltersModified();
  }, [locationFilterText, teamFilterText, worktypeFilterText]);

  useEffect(() => {
    document.addEventListener("click", handleClick);
    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);

  return (
    <>
      <div className="flex w-full flex-col items-center justify-center xl:flex-row xl:justify-start">
        <span className="mb-4 block text-[#828790] xl:mb-0">Filter:</span>
        {/* Location filter */}
        <FilterBox
          onClickAction={setLocationOpen}
          changeAction={handleChange}
          open={locationOpen}
          text={locationFilterText}
          reference={locationFilterBox}
          filterData={locations}
          dataType="location"
          filtersChanged={filtersChanged}
          listingData={filteredLocations}
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
          filtersChanged={filtersChanged}
          listingData={filteredTeams}
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
          filtersChanged={filtersChanged}
          listingData={filteredWorktypes}
        />
      </div>
      <ClearFiltersButton
        clearFilters={clearFilters}
        filtersChanged={filtersChanged}
      />
    </>
  );
};

export default CareerFilters;
