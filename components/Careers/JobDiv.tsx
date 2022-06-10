import Button from "@components/Shared/Buttons/Button"
import GradientLine from "@components/Shared/GradientLine"
import { JobItems } from "./CareersTable"

export const JobDiv: React.FC<JobItems> = ({
    link,
    title,
    department,
    location,
    team,
    commitment,
}) => {
    return (
        <div
            className="job-listing group relative max-h-[221px] overflow-visible transition-all duration-300"
            data-location={location}
            data-business={department}
            data-team={team}
            data-worktype={commitment}
        >
            <div className="flex w-full flex-col py-8">
                <span className="mb-4 block">
                    <span className="text-2xl font-bold leading-[30px] text-highlight xs:text-xl">
                        {title}
                    </span>
                    <span className="block leading-[24px] text-tertiary">
                        {team}
                    </span>
                </span>
                <span className="block">
                    <span className="text-2xl leading-[24px] text-highlight xs:text-xl">
                        {location}
                    </span>
                    <span className="block leading-[24px] text-tertiary">
                        {commitment}
                    </span>
                </span>
                <Button
                    link={link}
                    lightBlueGradient
                    className="mt-8 min-w-[241px]"
                >
                    Apply Now
                </Button>
            </div>
            <GradientLine color="lightblue" />
        </div>
    )
}
