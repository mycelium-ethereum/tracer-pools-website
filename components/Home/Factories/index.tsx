import Section from "@components/Shared/Section";
import Container from "@components/Shared/Container";
import Button from "@components/Shared/Buttons/Button";
import AnimateIn from "@components/Shared/AnimateIn";
import GradientLine from "@components/Shared/GradientLine";
import Paragraph from "@components/Home/Paragraph";
import H1 from "@components/Home/H1";
import OptimisedImage from "@components/Shared/OptimisedImage";

const Factories: React.FC<{}> = () => {
  return (
    <Section
      id="section-4"
      className="bg-tracer-purple-dark pt-20 lg:h-[800px] lg:py-16 4xl:h-[1200px]"
    >
      <Container className="flex h-full items-center text-white">
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
            <Paragraph className="max-w-[328px] 4xl:max-w-[420px]">
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
      <div className="absolute top-0 right-0 hidden h-full w-[50vw] max-w-[792px] lg:block 4xl:max-w-full">
        <OptimisedImage
          cover
          position="left"
          src="/img/home/factories-section-bg.png"
          alt=""
        />
      </div>
      <div className="relative block h-[430px] w-full lg:hidden">
        <OptimisedImage
          className="absolute top-0 right-0 h-[430px] min-w-[1030px]"
          src="/img/home/factories-section-mobile-bg.png"
          alt=""
        />
      </div>
    </Section>
  );
};

export default Factories;
