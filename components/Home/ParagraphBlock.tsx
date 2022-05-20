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
      <Paragraph className="mt-4">{text}</Paragraph>
    </div>
  );
};

export default ParagraphBlock;
