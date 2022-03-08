import React, { useEffect, useRef, useState } from "react";
import CareerFilters from "./careers-filters";
import Loader from "./careers-loader";
import ErrorText from "./careers-error";
import Container from "./container";

export default function CareersTable() {
  const careerTable = useRef(null);
  const [matches, setMatches] = useState(false);
  const [jobRows, setJobRows] = useState([]);
  const [jobDivs, setJobDivs] = useState([]);
  const [locations, setLocations] = useState([]);
  const [teams, setTeams] = useState([]);
  const [worktypes, setWorktypes] = useState([]);
  const [showLoader, setShowLoader] = useState(true);
  const [showError, setError] = useState(false);

  //   Pull data from Lever API
  const getJobs = () => {
    fetch("https://api.lever.co/v0/postings/Mycelium?limit=100&mode=json", {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => createJobs(data))
      .catch((error) => {
        console.log("Lever API request failed", error);
        setError(true);
        setShowLoader(false);
      });
  };
  //Setting up the structure for each job posting
  const createJobs = (_data) => {
    //Checking for potential Lever source or origin parameters
    const jobRowArr = [];
    const jobDivArr = [];
    const departments = [];
    const allLocations = [];
    const allTeams = [];
    const allWorktypes = [];

    // Get each type of department
    for (let i = 0; i < _data.length; i++) {
      let posting = _data[i];
      let department = posting.categories.department;
      if (!departments.includes(department)) {
        departments.push(department);
      }
    }

    // Sort departments alphabetically
    const sortedDepartments = departments.sort((a, b) => a.localeCompare(b));
    const departmentsListed = [];
    for (let j = 0; j < sortedDepartments.length; j++) {
      for (let k = 0; k < _data.length; k++) {
        let currentDept = sortedDepartments[j];
        let posting = _data[k];
        let department = posting.categories.department;
        if (department === currentDept) {
          let isFirst = false;
          let title = posting.text;
          let location = posting.categories.location;
          let commitment = posting.categories.commitment;
          let team = posting.categories.team;
          let link = posting.hostedUrl;

          //   Only get Tracer DAO listings
          if (department === "Tracer DAO") {
            isFirst = true;
            //   Store data for filters

            //   Location
            if (!allLocations.includes(location)) {
              allLocations.push(location);
            }
            //   Team
            if (!allTeams.includes(team)) {
              allTeams.push(team);
            }
            //   Work type
            if (!allWorktypes.includes(commitment)) {
              allWorktypes.push(commitment);
            }
            const key = Math.random() * 1000;
            const row = createJobRow(
              isFirst,
              link,
              title,
              department,
              location,
              team,
              commitment,
              key
            );
            const div = createJobDiv(
              isFirst,
              link,
              title,
              department,
              location,
              team,
              commitment,
              key
            );
            jobRowArr.push(row);
            jobDivArr.push(div);
          }
        }
      }
    }
    setJobRows(jobRowArr);
    setJobDivs(jobDivArr);
    setLocations(allLocations);
    setTeams(allTeams);
    setWorktypes(allWorktypes);
  };

  const handleRowClick = (e) => {
    //   Open link from TR element in new tab
    const eventTarget = e.target;
    const tableRow = eventTarget.parentNode;
    const link = tableRow.dataset.link;
    window.open(link, "_blank").focus();
  };

  const handleDivClick = (e) => {
    //   Open link from TR element in new tab
    const eventTarget = e.target;
    const div = eventTarget.parentNode.parentNode;
    const link = div.dataset.link;
    window.open(link, "_blank").focus();
  };

  const createJobRow = (
    isFirst,
    link,
    title,
    department,
    location,
    team,
    commitment,
    key
  ) => {
    return (
      <tr
        key={key}
        className="job-listing relative cursor-pointer text-white transition-colors duration-300 hover:bg-tracer-400 hover:text-black"
        data-link={link}
        data-location={location}
        data-business={department}
        data-team={team}
        data-worktype={commitment}
        onClick={(e) => handleRowClick(e)}
      >
        <td
          className={`department pointer-events-none top-0 left-0 z-0 h-full w-[360px] border-t text-white xl:py-8 ${
            isFirst
              ? "border-tracer-400 text-tracer-400"
              : "border-transparent text-transparent"
          }`}
        >
          {department}
        </td>
        <td className="border-t border-tracer-400 py-4 px-4 align-top lg:py-8">
          {title}
        </td>
        <td className="border-t border-tracer-400 py-4 px-4 align-top lg:py-8">
          {department}
        </td>
        <td className="border-t border-tracer-400 py-4 px-4 align-top lg:py-8">
          {commitment}
        </td>
        <td className="border-t border-tracer-400 py-4 px-4 align-top lg:py-8">
          {location}
        </td>
      </tr>
    );
  };

  const createJobDiv = (
    isFirst,
    link,
    title,
    department,
    location,
    team,
    commitment,
    key
  ) => {
    return (
      <>
        {isFirst && (
          <div
            key={key}
            data-business={department}
            className="job-department border-b border-[#9C9C9C] pt-10 pb-4 text-tracer-400"
          >
            {department}
          </div>
        )}
        <div
          key={isFirst ? 0 : key}
          className="job-listing group relative"
          data-link={link}
          data-location={location}
          data-business={department}
          data-team={team}
          data-worktype={commitment}
          onClick={(e) => handleDivClick(e)}
        >
          <div className="pointer-events-none absolute -top-0.5 -left-4 z-0 h-full w-screen bg-tracer-400 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          <div className="relative z-10 flex cursor-pointer flex-col border-b border-tracer-400 text-white transition-colors duration-300 group-hover:border-transparent group-hover:text-black">
            <span className="pt-4 pb-2">{title}</span>
            <span className="pb-2">{department}</span>
            <span className="text-xs">{commitment}</span>
            <span className="pb-4 font-semibold">{location}</span>
          </div>
        </div>
      </>
    );
  };

  useEffect(() => {
    getJobs();
  }, []);

  useEffect(() => {
    if (jobRows.length) {
      setShowLoader(false);
    }
  }, [jobRows]);

  return (
    <section className="z-10 bg-white">
      <Container>
        <CareerFilters
          locations={locations}
          teams={teams}
          worktypes={worktypes}
          setMatches={setMatches}
          matches={matches}
        />
        <ErrorText showError={showError} />
        <Loader showLoader={showLoader} />
        <div
          className={`w-full overflow-hidden ${
            matches ? "hidden xl:block" : "hidden"
          }`}
        >
          <div className="overflow-x-auto">
            <table
              id="careers-table"
              ref={careerTable}
              className="w-full min-w-[1160px] transform-gpu"
            >
              <tbody>{jobRows}</tbody>
            </table>
          </div>
        </div>
        <div className={`w-full ${matches ? "block xl:hidden" : "hidden"}`}>
          {jobDivs}
        </div>
      </Container>
    </section>
  );
}
