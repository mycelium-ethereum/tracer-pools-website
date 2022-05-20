import UnderlinedHeading from "@components/Shared/Heading/UnderlinedHeading";
import Button from "@components/Shared/Buttons/Button";
import H2 from "@components/Factories/H2";

const Header: React.FC<{}> = () => {
  return (
    <header className="text-action-active sm:max-w-[448px] 3xl:max-w-[558px]">
      <UnderlinedHeading lineColor="blue" className="max-w-[294px]">
        HOW IT WORKS
      </UnderlinedHeading>
      <H2 className="max-w-[344px] 3xl:max-w-full">
        Learn how we make it happen
      </H2>
      <div className="flex flex-col md:flex-row">
        <Button lightBlueGradient className="mb-4">
          Governance Whitepaper
        </Button>
        <Button lightBlueGradient>Documentation</Button>
      </div>
    </header>
  );
};

export default Header;
