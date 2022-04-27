import Section from "@/components/Shared/Section";
import Container from "@/components/Shared/Container";
import Button from "@/components/Shared/Button";
import AnimateIn from "@/components/Shared/AnimateIn";
import GradientLine from "@/components/Shared/GradientLine";

const Factories: React.FC<{}> = () => {
  return (
    <Section id="section-5" className="bg-tracer-purple-dark">
      <Container className="relative flex h-screen flex-col py-14 sm:py-16">
        <header className="flex h-full max-w-[356px] flex-grow flex-col justify-center">
          <AnimateIn delay={0.2}>
            <div className="mb-4 w-full">
              <img
                src="/img/logos/tracer-factories.svg"
                className="mb-3 h-[18px] w-[140px]"
              />
              <GradientLine color="purple" />
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
            <p className="text-tracer-purple max-w-[328px]-light">
              Tracer’s Factory layer contains the templates and tools to allow
              DeFi applications to be built on top of Tracer’s products.
            </p>
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
      </Container>
      <img
        className="absolute top-0 left-0 z-0 h-full w-full object-cover object-right"
        src="/img/home/factories-section-bg.png"
      />
    </Section>
  );
};

export default Factories;
