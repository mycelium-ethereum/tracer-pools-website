import UnderlinedHeading from "@components/Shared/Heading/UnderlinedHeading";
import Paragraph from "@components/Home/Paragraph";
import Button from "@components/Shared/Buttons/Button";

const Header: React.FC<{}> = () => {
  return (
    <header className="text-action-active sm:max-w-[448px]">
      <UnderlinedHeading
        lineColor="blue"
        className="max-w-[294px] text-action-active"
      >
        HOW IT WORKS
      </UnderlinedHeading>
      <h2 className="mb-4 max-w-[344px] text-2xl leading-[28px] text-action-active">
        Learn how we make it happen
      </h2>
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
