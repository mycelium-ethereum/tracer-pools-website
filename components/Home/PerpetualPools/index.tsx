import Section from "@components/Shared/Section";
import Container from "@components/Shared/Container";
import Button from "@components/Shared/Buttons/Button";
import Tokens from "@components/Home/PerpetualPools/Tokens";
import AnimateIn from "@components/Shared/AnimateIn";
import GradientLine from "@components/Shared/GradientLine";
import V2LottieAnim from "@components/Home/PerpetualPools/V2LottieAnim";

const PerpetualPools: React.FC<{}> = () => {
  return (
    <Section id="section-3" className="bg-tracer-navy">
      <Container className="relative z-10 flex flex-col pt-10 md:py-16 lg:h-screen lg:min-h-[800px]">
        <header className="flex h-full max-w-[356px] flex-grow flex-col justify-center">
          <AnimateIn delay={0.2}>
            <div className="mb-4 w-full">
              <img
                src="/img/logos/tracer-perpetual-pools.svg"
                className="mb-3 h-[18px] w-[182px]"
              />
              <GradientLine color="blue" />
            </div>
          </AnimateIn>
          <AnimateIn delay={0.6}>
            <h1 className="mb-2 text-[40px] font-light text-white">
              More Leverage.
              <br />
              Less Overhead.
            </h1>
          </AnimateIn>
          <AnimateIn delay={1.0}>
            <p className="max-w-[328px] text-tracer-midblue">
              Fully composibile leveraged tokens with no margin requirements and
              no liquidations. A new derivative primative to hedge portfolio
              risk or trade leverage.
            </p>
          </AnimateIn>
          <AnimateIn delay={1.4}>
            <div className="flex flex-col md:flex-row">
              <Button
                darkBlueGradient
                className="mt-4 text-tracer-lightblue md:mr-4"
              >
                Launch Perpetual Pools
              </Button>
              <Button blueTransparent className="mt-4 text-tracer-lightblue">
                Learn More
              </Button>
            </div>
          </AnimateIn>
        </header>
      </Container>
      <div className="relative h-[50vh] min-h-[500px] md:static md:h-auto md:min-h-[unset]">
        <Tokens />
        <V2LottieAnim />
      </div>
    </Section>
  );
};

export default PerpetualPools;
