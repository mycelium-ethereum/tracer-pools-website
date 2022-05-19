import Button from "@components/Shared/Buttons/Button";
import AnimateIn from "@components/Shared/AnimateIn";
import GradientLine from "@components/Shared/GradientLine";
import Paragraph from "@components/Home/Paragraph";
import H1 from "@components/Home/H1";

const Indices: React.FC<{}> = () => {
  return (
    <header className="flex h-full max-w-[356px] flex-grow flex-col justify-center lg:max-w-[426px] 3xl:max-w-full">
      <AnimateIn delay={0.2}>
        <div className="mb-4 w-full">
          <img
            src="/img/logos/tracer-indices.svg"
            className="mb-3 h-[18px] w-[126px]"
          />
          <GradientLine color="blue" />
        </div>
      </AnimateIn>
      <AnimateIn delay={0.6}>
        <H1 className="mb-2">Diversify and Experiment</H1>
      </AnimateIn>
      <AnimateIn delay={1.0}>
        <Paragraph className="max-w-[328px] 3xl:max-w-[420px]">
          Transform any combination of data feeds into custom index products or
          market neutral strategies which can be plugged into any DeFi contract.
        </Paragraph>
      </AnimateIn>
      <AnimateIn delay={1.4}>
        <div className="mt-4 flex flex-col sm:flex-row">
          <Button darkBlueGradient className="mb-4 sm:mb-0 sm:mr-4">
            Launch Data Feeds
          </Button>
          <Button blueTransparent>Learn More</Button>
        </div>
      </AnimateIn>
    </header>
  );
};

export default Indices;
