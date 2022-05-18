import Button from "@components/Shared/Buttons/Button";
import UnderlinedHeading from "@components/Shared/Heading/UnderlinedHeading";
import { buttonContent } from "@components/Pools/MechanismDesign/presets";

const MoreInfoButtons: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <div
      className={`mt-8 max-w-[420px] flex-wrap ${className ? className : ""}`}
    >
      <UnderlinedHeading
        lineColor="blue"
        className="max-w-[377px] text-action-active"
      >
        Looking for more information?
      </UnderlinedHeading>
      {buttonContent.map((button, i) => (
        <Button
          key={i}
          link={button.link}
          blueTransparent
          className="mb-4 mr-4"
        >
          {button.text}
        </Button>
      ))}
    </div>
  );
};

export default MoreInfoButtons;
