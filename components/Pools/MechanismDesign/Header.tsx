import UnderlinedHeading from "@components/Shared/Heading/UnderlinedHeading";
import Paragraph from "@components/Home/Paragraph";
import H1 from "@components/Home/H1";
import MoreInfoButtons from "@components/Pools/MechanismDesign/MoreInfoButtons";

const Header: React.FC<{}> = () => {
  return (
    <header className="mb-10 min-w-[589px] text-action-active xl:mb-0">
      <UnderlinedHeading
        lineColor="blue"
        className="max-w-[294px] text-action-active"
      >
        Mechanism Design
      </UnderlinedHeading>
      <H1 className="mb-4">
        Your leveraged token
        <br className="hidden sm:block" />
        represents your claim on the
        <br className="hidden sm:block" />
        capital in a Perpetual Pool
      </H1>
      <Paragraph className="text-tertiary">
        Click through to see how this derivative
        <br className="hidden sm:block" />
        primitive works
      </Paragraph>
      <MoreInfoButtons className="hidden xl:block" />
    </header>
  );
};

export default Header;
