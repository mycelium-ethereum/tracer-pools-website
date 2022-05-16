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
            <H1 className="mb-2">&#123;Create your own data feeds&#125;</H1>
          </AnimateIn>
          <AnimateIn delay={1.0}>
            <Paragraph className="max-w-[328px] 3xl:max-w-[420px]">
              The Tracer Data Factory takes any single, or multiple asset data
              feed and transforms them into a standardised Tracer Data Feed for
              DeFi applications.
            </Paragraph>
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
