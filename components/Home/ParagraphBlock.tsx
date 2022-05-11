import AnimateIn from "@components/Shared/AnimateIn";
import UnderlinedHeading from "../Shared/UnderlinedHeading";

const ParagraphBlock: React.FC<{
  title: string;
  text: string;
  className?: string;
}> = ({ title, text, className }) => {
  return (
    <div className={`lg:w-[386px] ${className ? className : ""}`}>
      <UnderlinedHeading lineColor="blue">{title}</UnderlinedHeading>
      <AnimateIn delay={1.0}>
        <p className="mt-4 leading-[150%]">{text}</p>
      </AnimateIn>
    </div>
  );
};

export default ParagraphBlock;
