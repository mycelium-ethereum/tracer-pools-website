import UnderlinedHeading from "@components/Shared/Heading/UnderlinedHeading";
import H2 from "@components/Shared/Heading/H2";

const LearnHeader: React.FC<{
  title: string | React.ReactNode;
  text: string | React.ReactNode;
  icon: string;
}> = ({ title, text, icon }) => {
  return (
    <div className="flex items-center justify-between text-action-active">
      <div>
        <UnderlinedHeading
          hideBullet
          lineColor="lightblue"
          className="max-w-[294px]"
        >
          {title}
        </UnderlinedHeading>
        <H2>{text}</H2>
      </div>
      <img src={icon} alt={`${title} icon`} className="h-[120px] w-[120px]" />
    </div>
  );
};

export default LearnHeader;
