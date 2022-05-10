import Section from "@/components/Shared/Section";
import Container from "@/components/Shared/Container";
import Button from "@/components/Shared/Button";
import OptimisedImage from "@/components/Shared/OptimisedImage";
import AnimateIn from "@/components/Shared/AnimateIn";
import GradientLine from "@/components/Shared/GradientLine";

const DataFeeds: React.FC<{}> = () => {
  return (
    <Section id="section-5" className="bg-tracer-navy">
      <Container className="relative z-10 flex h-screen flex-col py-14 sm:py-16">
        <header className="flex h-full max-w-[356px] flex-grow flex-col justify-center">
          <AnimateIn delay={0.2}>
            <div className="mb-4 w-full">
              <img
                src="/img/logos/tracer-data-feeds.svg"
                className="mb-3 h-[18px] w-[152px]"
              />
              <GradientLine color="blue" />
            </div>
          </AnimateIn>
          <AnimateIn delay={0.6}>
            <h1 className="mb-2 text-[40px] font-light text-white">
              &#123;Create your own data feeds&#125;
            </h1>
          </AnimateIn>
          <AnimateIn delay={1.0}>
            <p className="max-w-[328px] text-tracer-lightblue">
              The Tracer Data Factory takes any single, or multiple asset data
              feed and transforms them into a standardised Tracer Data Feed for
              DeFi applications.
            </p>
          </AnimateIn>
          <AnimateIn delay={1.4}>
            <div className="mt-4 flex">
              <Button darkBlueGradient className="mr-4">
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
        absolute
        className="pointer-events-none top-0 right-0 z-0 h-full w-full"
      />
    </Section>
  );
};

export default DataFeeds;
