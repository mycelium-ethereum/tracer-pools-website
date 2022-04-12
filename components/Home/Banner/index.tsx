import Section from "@/components/Shared/Section";
import Container from "@/components/Shared/Container";
import Button from "@/components/Shared/Button";
import BackgroundVideo from "@/components/Home/BackgroundVideo";

const Banner: React.FC<{}> = () => {
  return (
    <Section id="section-1">
      <Container className="flex h-screen items-center py-14 sm:py-16">
        <header>
          <h1 className="mb-1 text-6xl font-thin text-white">
            The <span className="text-tracer-lightblue">Evolution</span>
            <br /> of Global Derivatives
          </h1>
          <p className="text-action-active">
            Decentralised Derivatives Infrastructure to Power
            <br /> the Next Generation of Global Trade
          </p>
          <Button gradient className="mt-4">
            Learn More
          </Button>
          <Button className="mt-4">Documentation</Button>
        </header>
      </Container>
      <BackgroundVideo src="/img/home/banner.mp4" />
    </Section>
  );
};

export default Banner;
