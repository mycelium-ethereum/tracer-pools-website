import { useEffect, useRef, useState } from "react";
import CareerFilters from "@/components/Careers/CareerFilters";
import Loader from "@/components/Careers/Loader";
import ErrorText from "@/components/Careers/ErrorText";
import NoJobsAvailableText from "@/components/Careers/NoJobsAvailableText";
import JobDiv from "@/components/Careers/JobDiv";
import JobRow from "@/components/Careers/JobRow";

const CareersTable = () => {
  const careerTable = useRef(null);
  const [jobRows, setJobRows] = useState([]);
  const [jobDivs, setJobDivs] = useState([]);
  const [locations, setLocations] = useState([]);
  const [teams, setTeams] = useState([]);
  const [worktypes, setWorktypes] = useState([]);
  const [showLoader, setShowLoader] = useState(true);
  const [showError, setError] = useState(false);
  const [showNoJobs, setShowNoJobs] = useState(false);

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
        setShowNoJobs(true);
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

    if (_data.length) {
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
              const jobData = {
                link,
                title,
                department,
                location,
                team,
                commitment,
              };
              jobRowArr.push(<JobRow {...jobData} key={key} />);
              jobDivArr.push(<JobDiv {...jobData} key={key} />);
            }
          }
        }
      }
      setJobRows(jobRowArr);
      setJobDivs(jobDivArr);
      setLocations(allLocations);
      setTeams(allTeams);
      setWorktypes(allWorktypes);
    } else {
      setShowLoader(false);
      setShowNoJobs(true);
    }
  };

  useEffect(() => {
    getJobs();
  }, []);

  useEffect(() => {
    if (jobRows.length) {
      setShowLoader(false);
    }
  }, [jobRows]);

  const headingStyles =
    "pb-4 text-left text-sm leading-[14px] tracking-[0.15em] text-highlight";

  return (
    <div className="select-dark z-10 bg-white pt-6 pb-24">
      <CareerFilters
        locations={locations}
        teams={teams}
        worktypes={worktypes}
      />
      {showNoJobs && showError && <ErrorText />}
      <Loader showLoader={showLoader} />
      <table
        id="careers-table"
        ref={careerTable}
        className={`relative w-full overflow-hidden ${
          !showLoader && !showNoJobs ? "hidden lg:table" : "hidden"
        }`}
      >
        <thead>
          <tr>
            <th className={headingStyles}>ROLE</th>
            <th className={headingStyles}>LOCATION</th>
          </tr>
        </thead>
        <tbody>{jobRows}</tbody>
      </table>
      <div
        className={`block w-full lg:hidden ${
          showNoJobs ? "" : "border-tracer-darkgray [border-top-width:0.1px]"
        }`}
      >
        {jobDivs}
      </div>
      {showNoJobs && !showError && <NoJobsAvailableText />}
    </div>
  );
};

export default CareersTable;
