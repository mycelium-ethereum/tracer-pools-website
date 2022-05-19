import Button from "@components/Shared/Buttons/Button";

const Header: React.FC<{}> = () => {
  return (
    <header className="mx-auto max-w-[579px] text-center 3xl:max-w-[877px]">
      <h1 className="mb-4 text-[40px] font-bold leading-[48px] text-action-active 3xl:text-[64px] 3xl:leading-[72px]">
        All you need is a data feed
      </h1>
      <p className="mx-auto mb-4 max-w-[745px] text-tertiary">
        Our Factory template contracts allow anyone to deploy a new market
        without writing a single line of code via the Factory interface. All you
        need is a data feed that tracks the underlying asset.
      </p>
      <Button lightBlueGradient className="mx-auto">
        Learn More
      </Button>
    </header>
  );
};

export default Header;
