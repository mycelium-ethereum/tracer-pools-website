import Button from "@/components/Shared/Button";

const JobDiv: React.FC<{
  link: string;
  title: string;
  department: string;
  location: string;
  team: string;
  commitment: string;
}> = ({ link, title, department, location, team, commitment }) => {
  const divStyles =
    "max-h-[133px] overflow-hidden py-10 transition-all duration-300";

  return (
    <tr
      className="job-listing relative table-row transition-colors duration-300"
      data-location={location}
      data-business={department}
      data-team={team}
      data-worktype={commitment}
    >
      <td>
        <div className={divStyles}>
          <span className="text-2xl font-bold leading-[30px] text-highlight">
            {title}
          </span>
          <span className="block leading-[24px] text-tertiary">{team}</span>
        </div>
      </td>
      <td>
        <div className={divStyles}>
          <span className="text-2xl leading-[120%] text-highlight">
            {location}
          </span>
          <span className="block leading-[24px] text-tertiary">
            {commitment}
          </span>
        </div>
      </td>
      <td>
        <div className={divStyles + " flex justify-end"}>
          <Button link={link} lightBlueGradient>
            Apply Now
          </Button>
        </div>
      </td>
    </tr>
  );
};

export default JobDiv;
