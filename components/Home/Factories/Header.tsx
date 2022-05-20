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
            src="/img/logos/tracer-factories.svg"
            className="mb-3 h-[18px] w-[140px]"
          />
          <GradientLine color="purple" />
        </div>
      </AnimateIn>
      <AnimateIn delay={0.6}>
        <H1 className="mb-2">
          More Markets.
          <br />
          Made Simple.
        </H1>
      </AnimateIn>
      <AnimateIn delay={1.0}>
        <Paragraph className="max-w-[328px] 4xl:max-w-[420px]">
          Tracer’s Factory layer contains the templates and tools to allow DeFi
          allowing any protocol to build on top of Tracer and deploy derivative
          markets without writing a single line of code.
        </Paragraph>
      </AnimateIn>
      <AnimateIn delay={1.4}>
        <div className="mt-4 flex">
          <Button purpleGradient className="mr-4">
            Launch Factories
          </Button>
          <Button purpleTransparent>Learn More</Button>
        </div>
      </AnimateIn>
    </header>
  );
};

export default Header;
