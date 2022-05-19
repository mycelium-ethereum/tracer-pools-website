import UnderlinedHeading from "@components/Shared/Heading/UnderlinedHeading";
import Paragraph from "@components/Home/Paragraph";
import MoreInfoButtons from "@components/Pools/MechanismDesign/MoreInfoButtons";

const Header: React.FC<{}> = () => {
  return (
    <header className="mb-10 text-action-active sm:min-w-[589px] xl:mb-0">
      <UnderlinedHeading
        lineColor="blue"
        className="max-w-[294px] text-action-active"
      >
        Mechanism Design
      </UnderlinedHeading>
      <h1 className="mb-4 text-2xl font-light leading-[30px] sm:text-[40px] sm:leading-[44px]">
        Your leveraged token&nbsp;
        <br className="hidden sm:block" />
        represents your claim on the&nbsp;
        <br className="hidden sm:block" />
        capital in a Perpetual Pool
      </h1>
      <Paragraph className="text-tertiary">
        Click through to see how this derivative&nbsp;
        <br className="hidden sm:block" />
        primitive works
      </Paragraph>
      <MoreInfoButtons className="hidden xl:flex" />
    </header>
  );
};

export default Header;
