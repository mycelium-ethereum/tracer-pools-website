import Button from "@components/Shared/Buttons/Button";

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
      className="job-listing group relative max-h-[207px] overflow-hidden transition-all duration-300"
      data-location={location}
      data-business={department}
      data-team={team}
      data-worktype={commitment}
    >
      <div className="border-tracer-darkgray relative z-10 flex flex-col px-7 pt-6 pb-8 transition-colors duration-300 [border-bottom-width:0.1px]">
        <span className="pb-2">
          <span className="text-tracer-800 block font-semibold lg:text-2xl">
            {title}
          </span>
          <span className="text-tracer-darkgray block text-sm">
            {team.toUpperCase()}
          </span>
        </span>
        <span className="mb-4 block">
          <span className="block text-[#828790] lg:text-2xl">{commitment}</span>
          <span className="text-tracer-darkgray block text-sm">
            {location.toUpperCase()}
          </span>
        </span>
        <Button
          link={link}
          className="h-[38px] max-w-full text-sm lg:h-auto lg:max-w-[auto] lg:text-base"
        >
          Apply Now
        </Button>
      </div>
    </div>
  );
};

export default JobDiv;
