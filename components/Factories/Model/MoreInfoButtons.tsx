import Button from "@components/Shared/Buttons/Button";
import { buttonContent } from "@components/Factories/Model/presets";

const MoreInfoButtons: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <div
      className={`mt-8 max-w-[429px] flex-wrap ${className ? className : ""}`}
    >
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
