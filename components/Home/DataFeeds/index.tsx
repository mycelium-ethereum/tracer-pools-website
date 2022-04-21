import Section from "@/components/Shared/Section";
import Container from "@/components/Shared/Container";
import Button from "@/components/Shared/Button";
import OptimisedImage from "@/components/Shared/OptimisedImage";
import AnimateIn from "@/components/Shared/AnimateIn";

const DataFeeds: React.FC<{}> = () => {
  return (
    <Section id="section-6" className="bg-tracer-navy">
      <Container className="relative z-10 flex h-screen flex-col py-14 sm:py-16">
        <header className="flex h-full max-w-[356px] flex-grow flex-col justify-center">
          <AnimateIn delay={0.2}>
            <div className="mb-4 w-full">
              <img
                src="/img/logos/tracer-data-feeds.svg"
                className="mb-3 h-[18px] w-[152px]"
              />
              <hr className="line-gradient-blue h-[1px] w-full border-none" />
            </div>
          </AnimateIn>
          <AnimateIn delay={0.6}>
            <h1 className="mb-2 text-[40px] font-light text-white">
              &#123;Create your own data feeds&#125;
            </h1>
          </AnimateIn>
          <AnimateIn delay={1.0}>
            <p className="max-w-[328px] text-tracer-lightblue">
              Fully composibile leveraged tokens with no margin requirements and
              no liquidations. A new derivative primative to hedge portfolio
              risk or trade leverage.
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
      {/* <img
        className="absolute top-0 left-0 z-0 h-full w-full object-cover object-right"
        src="/img/home/mesh.svg"
      /> */}
    </Section>
  );
};

export default DataFeeds;
