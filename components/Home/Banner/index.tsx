import Section from "@/components/Shared/Section";
import Container from "@/components/Shared/Container";
import Button from "@/components/Shared/Button";
import BackgroundVideo from "@/components/Home/BackgroundVideo";
import AnimateIn from "@/components/Shared/AnimateIn";
import BannerLottieAnim from "./BannerLottieAnim";

const Banner: React.FC<{}> = () => {
  return (
    <Section id="section-1" className="bg-tracer-navy">
      <Container className="relative flex h-screen items-center py-14 sm:py-16">
        <header>
          <AnimateIn delay={0.2}>
            <h1 className="mb-1 text-6xl font-thin text-white">
              The Evolution
              <br /> of Global Derivatives
            </h1>
          </AnimateIn>
          <AnimateIn delay={0.5}>
            <p className="text-action-active">
              We Create Infrastructure to Power the Next
              <br /> Generation of Global Trade
            </p>
          </AnimateIn>
          <AnimateIn delay={0.8}>
            <Button lightBlueGradient className="mt-4">
              Learn More
            </Button>
            <Button blueTransparent className="mt-4">
              Documentation
            </Button>
          </AnimateIn>
        </header>
        <BannerLottieAnim />
      </Container>
      {/* <BackgroundVideo loop src="/img/home/banner.mp4" /> */}
    </Section>
  );
};

export default Banner;
