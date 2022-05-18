import Paragraph from "@components/Home/Paragraph";
import Button from "@components/Shared/Buttons/Button";

const Header: React.FC<{}> = () => {
  return (
    <header className="mx-auto max-w-[579px] text-center">
      <h1 className="mb-4 text-[40px] font-bold leading-[48px] text-action-active">
        All you need is a data feed
      </h1>
      <Paragraph className="mb-4 text-tertiary">
        Our Factory template contracts allow anyone to deploy a new market
        without writing a single line of code via the Factory interface. All you
        need is a data feed that tracks the underlying asset.
      </Paragraph>
      <Button lightBlueGradient className="mx-auto">
        Learn More
      </Button>
    </header>
  );
};

export default Header;
