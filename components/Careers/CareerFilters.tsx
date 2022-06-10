import React, { useEffect, useState, useRef } from "react"
import { FilterBox, ClearFiltersButton } from "@components/Careers"

export interface CareerFiltersProps {
    locations: string[]
    teams: string[]
    worktypes: string[]
}
export const CareerFilters: React.FC<CareerFiltersProps> = ({
    locations,
    teams,
    worktypes,
}) => {
    const [locationOpen, setLocationOpen] = useState(false)
    const [teamOpen, setTeamOpen] = useState(false)
    const [worktypeOpen, setWorktypeOpen] = useState(false)
    const [filtersChanged, setFiltersChanged] = useState(false)

    const [locationFilterText, setLocationFilter] = useState("Location")
    const [teamFilterText, setTeamFilter] = useState("Team")
    const [worktypeFilterText, setWorktypeFilter] = useState("Worktype")

    const locationFilterBox = useRef(null)
    const teamFilterBox = useRef(null)
    const worktypeFilterBox = useRef(null)

    const filterElements = [locationFilterBox, teamFilterBox, worktypeFilterBox]
    const filterStateElements = [setLocationOpen, setTeamOpen, setWorktypeOpen]

    //   Keep record of listing data after filters have been applied
    const [filteredLocations, setFilteredLocations] = useState([])
    const [filteredTeams, setFilteredTeams] = useState([])
    const [filteredWorktypes, setFilteredWorktypes] = useState([])
    const types = ["location", "team", "worktype"]

    const handleClick = (e: MouseEvent) => {
        const target = e.target
        // Iterate through the filter box elements,
        // and only allow one to be open at any one time
        filterElements.forEach((filterElem) => {
            let filterType = filterElem.current.dataset.type
            if (filterElem.current !== target) {
                const setStateElem =
                    filterStateElements[types.indexOf(filterType)]
                setStateElem(false)
            }
        })
    }

    const handleChange = (
        e: React.MouseEvent<HTMLButtonElement, MouseEvent>
    ) => {
        const target = e.target as HTMLButtonElement
        const filterText = target.dataset.filter
        const filterType = target.dataset.type
        switch (filterType) {
            case "location":
                setLocationFilter(filterText)
                break
            case "team":
                setTeamFilter(filterText)
                break
            case "worktype":
                setWorktypeFilter(filterText)
                break
        }
    }

    const filterListings = () => {
        const listings = document.querySelectorAll(".job-listing")
        let hasMatches = false
        const filteredLocations = []
        const filteredTeams = []
        const filteredWorktypes = []
        listings.forEach((listing) => {
            const job = listing as HTMLTableRowElement | HTMLDivElement
            // Hide the listings that do not match the filters
            const isMatched = compareListing(
                job.dataset.location,
                job.dataset.team,
                job.dataset.worktype
            )
            if (isMatched.includes(false)) {
                hideListing(job)
            } else {
                // If one match exists, set matchExists to true
                hasMatches = true
                showListing(job)
                limitFilterOptions(
                    filteredLocations,
                    filteredTeams,
                    filteredWorktypes,
                    job
                )
            }
        })
        setFilteredLocations(filteredLocations)
        setFilteredTeams(filteredTeams)
        setFilteredWorktypes(filteredWorktypes)
        return hasMatches
    }

    const limitFilterOptions = (
        filteredLocations: string[],
        filteredTeams: string[],
        filteredWorktypes: string[],
        job: HTMLElement
    ) => {
        const jobLocation = job.dataset.location
        const jobTeam = job.dataset.team
        const jobWorktype = job.dataset.worktype
        if (!filteredLocations.includes(jobLocation)) {
            filteredLocations.push(jobLocation)
        }
        if (!filteredTeams.includes(jobTeam)) {
            filteredTeams.push(jobTeam)
        }
        if (!filteredWorktypes.includes(jobWorktype)) {
            filteredWorktypes.push(jobWorktype)
        }
    }

    const hideListing = (job: HTMLTableRowElement | HTMLDivElement) => {
        job.classList.add("max-h-0")
        // If contains 133px, its a table row. If not, it is a div
        if (job.classList.contains("table-row")) {
            // Remove border and replace with transparent
            job.classList.remove("border-tracer-darkgray")
            job.classList.add("border-transparent")

            // Add data attribute for selector to hide gradient borders
            job.dataset.hidden = "true"

            // Remove height and padding
            job.querySelectorAll("div").forEach((td) => {
                td.classList.remove("max-h-[133px]", "py-10")
                td.classList.add("max-h-0", "opacity-0")
            })
        } else {
            job.classList.remove("max-h-[221px]")
            job.classList.remove("overflow-visible")
        }
    }

    const showListing = (job: HTMLTableRowElement | HTMLDivElement) => {
        job.classList.remove("max-h-0")
        // If contains 133px, its a table row. If not, it is a div
        if (job.classList.contains("table-row")) {
            // Remove border and replace with transparent
            job.classList.add("border-tracer-darkgray")
            job.classList.remove("border-transparent")

            // Add data attribute for selector to hide gradient borders
            job.dataset.hidden = "false"

            // Remove height and padding
            job.querySelectorAll("div").forEach((td) => {
                td.classList.add("max-h-[133px]", "py-10")
                td.classList.remove("max-h-0", "opacity-0")
            })
        } else {
            job.classList.add("max-h-[221px]")
            job.classList.add("overflow-hidden")
        }
    }

    const compareListing = (
        jobLocation: string,
        jobTeam: string,
        jobWorktype: string
    ) => {
        let locationMatch = false
        let teamMatch = false
        let worktypeMatch = false
        if (
            locationFilterText === "Location" ||
            jobLocation === locationFilterText
        ) {
            locationMatch = true
        }
        if (teamFilterText === "Team" || jobTeam === teamFilterText) {
            teamMatch = true
        }
        if (
            worktypeFilterText === "Worktype" ||
            jobWorktype === worktypeFilterText
        ) {
            worktypeMatch = true
        }
        // Reset the mobile headings if filters are cleared
        if (
            locationFilterText === "Location" &&
            teamFilterText === "Team" &&
            worktypeFilterText === "Worktype"
        ) {
            resetMobileHeaders()
        }

        return [locationMatch, teamMatch, worktypeMatch]
    }

    const clearFilters = () => {
        setLocationFilter("Location")
        setTeamFilter("Team")
        setWorktypeFilter("Worktype")
    }

    const resetMobileHeaders = () => {
        // Show the headers again once clearing filters
        const deptMobileHeaders = document.querySelectorAll(".job-department")
        deptMobileHeaders.forEach((header) => {
            let deptHeader = header
            deptHeader.classList.remove("hidden")
            deptHeader.classList.add("block")
        })
    }

    const checkFiltersModified = () => {
        if (
            locationFilterText === "Location" &&
            teamFilterText === "Team" &&
            worktypeFilterText === "Worktype"
        ) {
            setFiltersChanged(false)
        } else {
            setFiltersChanged(true)
        }
    }

    useEffect(() => {
        filterListings()
        checkFiltersModified()
    }, [locationFilterText, teamFilterText, worktypeFilterText])

    useEffect(() => {
        document.addEventListener("click", handleClick)
        return () => {
            document.removeEventListener("click", handleClick)
        }
    }, [])

    const [selectedItems, setSelectedItems] = useState<string[]>([])

    // useEffect(() => {
    //   let items = []
    //   products.forEach(item => {
    //     items.push({id: id, checked: false})
    //   })
    //   setSelectedItems(items);
    // },[]);

    // const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    //   const state = selectedItems;
    //   state.forEach(item => {
    //     if (item.id === e.target.value) {
    //       item.checked = e.target.checked;
    //     }
    //   }
    //   setSelectedItems(state);
    // }

    return (
        <>
            <div className="flex w-full flex-col justify-start xs:flex-row lg:items-center">
                <span className="mb-2 block text-[#828790] xs:mb-0 xs:mr-8 xs:mt-2 lg:mr-0 lg:mt-0">
                    Filter:
                </span>
                <div className="flex flex-col lg:flex-row">
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
            </div>
            <ClearFiltersButton
                clearFilters={clearFilters}
                filtersChanged={filtersChanged}
            />
        </>
    )
}
