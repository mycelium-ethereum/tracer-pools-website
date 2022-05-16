import AnimateIn from "@components/Shared/AnimateIn";
import UnderlinedHeading from "../Shared/Heading/UnderlinedHeading";
import Paragraph from "@components/Home/Paragraph";

const ParagraphBlock: React.FC<{
  title: string;
  text: string;
  className?: string;
}> = ({ title, text, className }) => {
  return (
    <div className={`lg:w-[386px] ${className ? className : ""}`}>
      <UnderlinedHeading lineColor="blue">{title}</UnderlinedHeading>
      <AnimateIn delay={1.0}>
        <Paragraph className="mt-4">{text}</Paragraph>
      </AnimateIn>
    </div>
  );
};

export default ParagraphBlock;
