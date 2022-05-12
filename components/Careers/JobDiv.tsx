import Button from "@components/Shared/Buttons/Button";
import GradientLine from "@components/Shared/GradientLine";

const JobDiv: React.FC<{
  link: string;
  title: string;
  department: string;
  location: string;
  team: string;
  commitment: string;
}> = ({ link, title, department, location, team, commitment }) => {
  return (
    <div
      className="job-listing group relative max-h-[221px] overflow-visible transition-all duration-300"
      data-location={location}
      data-business={department}
      data-team={team}
      data-worktype={commitment}
    >
      <div className="flex w-full items-start justify-between py-6">
        <div className="relative z-10 flex flex-col transition-colors duration-300">
          <span className="pb-2">
            <span className="text-lg font-bold leading-[24px] text-highlight xs:text-xl">
              {title}
            </span>
            <span className="block leading-[24px] text-tertiary">{team}</span>
          </span>
          <span className="block">
            <span className="text-lg leading-[24px] text-highlight xs:text-xl">
              {location}
            </span>
            <span className="block leading-[24px] text-tertiary">
              {commitment}
            </span>
          </span>
        </div>
        <Button link={link} lightBlueGradient>
          Apply Now
        </Button>
      </div>
      <GradientLine color="lightblue" />
    </div>
  );
};

export default JobDiv;
