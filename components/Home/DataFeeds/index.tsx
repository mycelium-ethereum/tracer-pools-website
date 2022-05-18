import Section from "@components/Shared/Section";
import Container from "@components/Shared/Container";
import Button from "@components/Shared/Buttons/Button";
import OptimisedImage from "@components/Shared/OptimisedImage";
import AnimateIn from "@components/Shared/AnimateIn";
import GradientLine from "@components/Shared/GradientLine";
import Paragraph from "@components/Home/Paragraph";
import H1 from "@components/Home/H1";

const DataFeeds: React.FC<{}> = () => {
  return (
    <Section id="section-5" className="bg-tracer-navy">
      <Container className="flex pt-20 text-white lg:h-screen lg:min-h-[800px] lg:py-16">
        <header className="flex h-full max-w-[356px] flex-grow flex-col justify-center">
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
            <H1 className="mb-2">
              &#123;Create your own
              <br /> data feeds&#125;
            </H1>
          </AnimateIn>
          <AnimateIn delay={1.0}>
            <Paragraph className="max-w-[328px] 3xl:max-w-[420px]">
              The Tracer Data Factory takes any single, or multiple asset data
              feed and transforms them into a standardised Tracer Data Feed for
              DeFi applications.
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
      </Container>
      <OptimisedImage
        src="/img/home/data-feeds-bg.png"
        alt="Data Feeds Background"
        className="pointer-events-none absolute top-0 right-0 z-0 hidden h-full w-full lg:block"
      />
      <div className="relative block h-[458px] w-full lg:hidden">
        <OptimisedImage
          className="absolute bottom-0 right-0 h-[1012px] w-[1805px]"
          src="/img/home/data-feeds-mobile-bg.png"
          alt=""
        />
      </div>
    </Section>
  );
};

export default DataFeeds;
