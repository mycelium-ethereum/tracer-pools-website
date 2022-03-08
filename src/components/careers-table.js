import React, { useEffect, useRef, useState } from "react";
import CareerFilters from "./careers-filters";
import Loader from "./careers-loader";
import ErrorText from "./careers-error";
import Container from "./container";
import ButtonGray from "./button-gray";

export default function CareersTable() {
  const careerTable = useRef(null);
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
          let title = posting.text;
          let location = posting.categories.location;
          let commitment = posting.categories.commitment;
          let team = posting.categories.team;
          let link = posting.hostedUrl;

          //   Only get Tracer DAO listings
          if (department === "Tracer DAO") {
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
              link,
              title,
              department,
              location,
              team,
              commitment,
              key
            );
            const div = createJobDiv(
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

  const createJobRow = (
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
        className="job-listing relative border-tracer-darkgray [border-bottom-width:0.1px]"
        data-location={location}
        data-business={department}
        data-team={team}
        data-worktype={commitment}
      >
        <td className="px-10 py-10">
          <span className="block text-2xl font-semibold text-tracer-800">
            {title}
          </span>
          <span className="block text-sm text-tracer-darkgray">
            {team.toUpperCase()}
          </span>
        </td>
        <td className="px-10 py-10">
          <span className="block text-2xl text-[#828790]">{commitment}</span>
          <span className="block text-sm text-tracer-darkgray">
            {location.toUpperCase()}
          </span>
        </td>
        <td className="px-10 py-10">
          <ButtonGray link={link} className="w-[118px]">
            Apply Now
          </ButtonGray>
        </td>
      </tr>
    );
  };

  const createJobDiv = (
    link,
    title,
    department,
    location,
    team,
    commitment,
    key
  ) => {
    return (
      <div
        key={key}
        className="job-listing group relative"
        data-location={location}
        data-business={department}
        data-team={team}
        data-worktype={commitment}
      >
        <div className="relative z-10 flex flex-col border-tracer-darkgray px-7 pt-6 pb-8 transition-colors duration-300 [border-bottom-width:0.1px] [border-top-width:0.1px] group-hover:border-transparent group-hover:text-black">
          <span className="pb-2">
            <span className="block font-semibold text-tracer-800 lg:text-2xl">
              {title}
            </span>
            <span className="block text-sm text-tracer-darkgray">
              {team.toUpperCase()}
            </span>
          </span>
          <span className="mb-4 block text-xs">
            <span className="block text-[#828790] lg:text-2xl">
              {commitment}
            </span>
            <span className="block text-sm text-tracer-darkgray">
              {location.toUpperCase()}
            </span>
          </span>
          <ButtonGray
            link={link}
            className="h-[38px] max-w-full text-sm lg:h-auto lg:max-w-[auto] lg:text-base"
          >
            Apply Now
          </ButtonGray>
        </div>
      </div>
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
    <section className="z-10 bg-white pt-6 pb-24">
      <Container>
        <CareerFilters
          locations={locations}
          teams={teams}
          worktypes={worktypes}
        />
        <ErrorText showError={showError} />
        <Loader showLoader={showLoader} />
        <div
          className={`w-full overflow-hidden ${
            !showLoader ? "hidden lg:block" : "hidden"
          }`}
        >
          <div className="overflow-x-auto">
            <table
              id="careers-table"
              ref={careerTable}
              className="w-full transform-gpu"
            >
              <thead>
                <tr className="border-tracer-darkgray [border-bottom-width:0.1px]">
                  <th className="px-10 py-3 text-left text-xl text-tracer-800">
                    Role
                  </th>
                  <th className="px-10 py-3 text-left text-xl text-tracer-800">
                    Location
                  </th>
                </tr>
              </thead>
              <tbody>{jobRows}</tbody>
            </table>
          </div>
        </div>
        <div className="block w-full lg:hidden">{jobDivs}</div>
      </Container>
    </section>
  );
}