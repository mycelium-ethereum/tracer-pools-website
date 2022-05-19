import Button from "@components/Shared/Buttons/Button";
import AnimateIn from "@components/Shared/AnimateIn";
import GradientLine from "@components/Shared/GradientLine";
import Paragraph from "@components/Home/Paragraph";
import H1 from "@components/Home/H1";

const Header: React.FC<{}> = () => {
  return (
    <header className="flex h-full flex-grow flex-col justify-center">
      <AnimateIn delay={0.2}>
        <div className="mb-4 w-full max-w-[328px]">
          <img
            src="/img/logos/tracer-perpetual-pools.svg"
            className="mb-3 h-[18px] w-[182px]"
          />
          <GradientLine color="blue" />
        </div>
      </AnimateIn>
      <AnimateIn delay={0.6}>
        <H1 className="mb-2">
          More Leverage.
          <br />
          Less Overhead.
        </H1>
      </AnimateIn>
      <AnimateIn delay={1.0}>
        <Paragraph className="max-w-[328px] 3xl:max-w-[420px]">
          Fully composibile leveraged tokens with no margin requirements and no
          liquidations. A new derivative primative to hedge portfolio risk or
          trade leverage.
        </Paragraph>
      </AnimateIn>
      <AnimateIn delay={1.4}>
        <div className="flex flex-col md:flex-row">
          <Button darkBlueGradient className="mt-4 md:mr-4">
            Launch Perpetual Pools
          </Button>
          <Button blueTransparent className="mt-4 text-tracer-lightblue">
            Learn More
          </Button>
        </div>
      </AnimateIn>
    </header>
  );
};

export default Header;
