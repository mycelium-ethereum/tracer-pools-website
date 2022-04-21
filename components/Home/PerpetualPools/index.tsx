import Section from "@/components/Shared/Section";
import Container from "@/components/Shared/Container";
import Button from "@/components/Shared/Button";
import BackgroundVideo from "@/components/Home/BackgroundVideo";
import Tokens from "@/components/Home/PerpetualPools/Tokens";
import AnimateIn from "@/components/Shared/AnimateIn";

const PerpetualPools: React.FC<{}> = () => {
  return (
    <Section id="section-4">
      <Container className="relative flex h-screen flex-col py-14 sm:py-16">
        <header className="flex h-full max-w-[356px] flex-grow flex-col justify-center">
          <AnimateIn delay={0.2}>
            <div className="mb-4 w-full">
              <img
                src="/img/logos/tracer-perpetual-pools.svg"
                className="mb-3 h-[18px] w-[182px]"
              />
              <hr className="line-gradient-blue h-[1px] w-full border-none" />
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
            <Button lightBlueGradient className="mt-4 text-tracer-lightblue">
              Launch Pools
            </Button>
          </AnimateIn>
        </header>
        <Tokens />
      </Container>
      {/* <img
        className="absolute top-0 left-0 z-0 h-full w-full object-cover object-right"
        src="/img/home/mesh.svg"
      /> */}
      <BackgroundVideo src="/img/home/leverage.mp4" />
    </Section>
  );
};

export default PerpetualPools;
