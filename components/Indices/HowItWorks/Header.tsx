import UnderlinedHeading from "@components/Shared/Heading/UnderlinedHeading";
import Paragraph from "@components/Home/Paragraph";
import Button from "@components/Shared/Buttons/Button";
import H2 from "@components/Factories/H2";

const Header: React.FC<{}> = () => {
  return (
    <header className="text-action-active sm:max-w-[448px] 3xl:max-w-[558px]">
      <UnderlinedHeading lineColor="blue" className="max-w-[294px]">
        HOW IT WORKS
      </UnderlinedHeading>
      <H2 className="max-w-[344px] 3xl:max-w-[unset]">
        Learn how we make it happen
      </H2>
      <div className="flex sm:flex-col">
        <Button lightBlueGradient className="sm:mb-4">
          Governance Whitepaper
        </Button>
        <Button lightBlueGradient>Documentation</Button>
      </div>
    </header>
  );
};

export default Header;
