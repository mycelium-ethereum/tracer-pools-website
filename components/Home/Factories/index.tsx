import Section from "@components/Shared/Section";
import Container from "@components/Shared/Container";
import Button from "@components/Shared/Buttons/Button";
import AnimateIn from "@components/Shared/AnimateIn";
import GradientLine from "@components/Shared/GradientLine";
import Paragraph from "@components/Home/Paragraph";
import H1 from "@components/Home/H1";

const Factories: React.FC<{}> = () => {
  return (
    <Section id="section-4" className="bg-tracer-purple-dark">
      <Container className="relative flex h-screen min-h-[800px] py-14 text-white sm:py-16">
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
              The benefits of diversification,
              <br /> meet the joys of a
              <br /> customised portfolio.
            </H1>
          </AnimateIn>
          <AnimateIn delay={1.0}>
            <Paragraph className="max-w-[328px] 3xl:max-w-[420px]">
              Tracer’s Factory layer contains the templates
              <br /> and tools to allow DeFi applications to be
              <br /> built on top of Tracer’s products.
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
      </Container>
      <img
        className="absolute top-0 right-0 h-full max-w-[792px] object-cover object-left"
        src="/img/home/factories-section-bg.png"
        alt=""
      />
    </Section>
  );
};

export default Factories;
