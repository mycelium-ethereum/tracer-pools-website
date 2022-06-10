import { useEffect, useRef, useState } from "react"
import { CareerFilters } from "@components/Careers/CareerFilters"
import Loader from "@components/Careers/Loader"
import {
    ErrorText,
    NoJobsAvailableText,
    JobDiv,
    JobRow,
} from "@components/Careers"
import GradientLine from "@components/Shared/GradientLine"

export interface JobListing {
    additional: string
    additionalPlain: string
    applyUrl: string
    categories: Categories
    createdAt: number
    description: string
    descriptionPlain: string
    hostedUrl: string
    id: string
    lists?: ListsEntity[] | null
    text: string
}
export interface Categories {
    commitment: string
    department: string
    location: string
    team: string
}
export interface ListsEntity {
    content: string
    text: string
}
export interface JobItems extends Categories {
    link: string
    title: string
}

export const CareersTable = () => {
    const careerTable = useRef(null)
    const [jobRows, setJobRows] = useState([])
    const [jobDivs, setJobDivs] = useState([])
    const [locations, setLocations] = useState([])
    const [teams, setTeams] = useState([])
    const [worktypes, setWorktypes] = useState([])
    const [showLoader, setShowLoader] = useState(true)
    const [showError, setError] = useState(false)
    const [showNoJobs, setShowNoJobs] = useState(false)

    //   Pull data from Lever API
    const getJobs = () => {
        fetch("https://api.lever.co/v0/postings/Mycelium?limit=100&mode=json", {
            method: "GET",
        })
            .then((response) => response.json())
            .then((data) => createJobs(data))
            .catch((error) => {
                console.log("Lever API request failed", error)
                setError(true)
                setShowNoJobs(true)
                setShowLoader(false)
            })
    }

    //Setting up the structure for each job posting
    const createJobs = (_data: JobListing[]) => {
        //Checking for potential Lever source or origin parameters
        const jobRowArr = []
        const jobDivArr = []
        const departments = []
        const allLocations = []
        const allTeams = []
        const allWorktypes = []

        if (_data && _data.length && _data.length > 0) {
            // Get each type of department
            _data.forEach((posting) => {
                let department = posting.categories.department
                if (!departments.includes(department)) {
                    departments.push(department)
                }
            })

            // Sort departments alphabetically
            const sortedDepartments = departments.sort((a: string, b: string) =>
                a.localeCompare(b)
            )

            sortedDepartments.forEach((currentDept) => {
                _data.forEach((posting) => {
                    let department = posting.categories.department
                    if (department === currentDept) {
                        let title = posting.text
                        let location = posting.categories.location
                        let commitment = posting.categories.commitment
                        let team = posting.categories.team
                        let link = posting.hostedUrl

                        //   Only get Tracer DAO listings
                        if (department === "Tracer DAO") {
                            //   Store data for filters

                            //   Location
                            if (!allLocations.includes(location)) {
                                allLocations.push(location)
                            }
                            //   Team
                            if (!allTeams.includes(team)) {
                                allTeams.push(team)
                            }
                            //   Work type
                            if (!allWorktypes.includes(commitment)) {
                                allWorktypes.push(commitment)
                            }
                            const key = Math.random() * 1000
                            const jobData = {
                                link,
                                title,
                                department,
                                location,
                                team,
                                commitment,
                            }
                            jobRowArr.push(<JobRow {...jobData} key={key} />)
                            jobDivArr.push(<JobDiv {...jobData} key={key} />)
                        }
                    }
                })
            })
            setJobRows(jobRowArr)
            setJobDivs(jobDivArr)
            setLocations(allLocations)
            setTeams(allTeams)
            setWorktypes(allWorktypes)
        } else {
            setShowLoader(false)
            setShowNoJobs(true)
        }
    }

    useEffect(() => {
        getJobs()
    }, [])

    useEffect(() => {
        if (jobRows.length) {
            setShowLoader(false)
        }
    }, [jobRows])

    const headingStyles =
        "pb-4 text-left text-sm leading-[14px] tracking-[0.15em] text-highlight font-normal"

    return (
        <div className="select-dark z-10 bg-white pt-6 pb-24">
            {jobRows.length > 4 && (
                <CareerFilters
                    locations={locations}
                    teams={teams}
                    worktypes={worktypes}
                />
            )}
            {showNoJobs && showError && <ErrorText />}
            <Loader showLoader={showLoader} />
            <table
                ref={careerTable}
                className={`careers-table relative w-full ${
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
            <div className={`block w-full lg:hidden`}>
                <GradientLine color="lightblue" />
                {jobDivs}
            </div>
            {showNoJobs && !showError && <NoJobsAvailableText />}
        </div>
    )
}
