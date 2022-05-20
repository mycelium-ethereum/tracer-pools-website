import Section from "@components/Shared/Section";
import Container from "@components/Shared/Container";
import Button from "@components/Shared/Buttons/Button";
import AnimateIn from "@components/Shared/AnimateIn";
import BannerLottieAnim from "./BannerLottieAnim";
import MeshUnderlay from "@components/Shared/Mesh/MeshUnderlay";

const Banner: React.FC<{}> = () => {
  return (
    <Section id="section-1" className="bg-tracer-navy">
      <Container className="h-screen max-h-[900px] items-center pb-16 pt-28 sm:max-h-[unset] sm:min-h-[850px] md:flex md:min-h-[700px] md:pt-0">
        <header className="relative z-10">
          <AnimateIn delay={0.2}>
            <h1 className="mb-1 text-[40px] font-thin leading-[44px] text-white sm:text-6xl sm:leading-[60px]">
              The Evolution
              <br /> of Global
              <br className="block md:hidden" /> Derivatives
            </h1>
          </AnimateIn>
          <AnimateIn delay={0.5}>
            <p className="text-action-active">
              We Create Infrastructure to Power
              <br className="block sm:hidden" /> the Next
              <br className="hidden sm:block" /> Generation of Global Trade
            </p>
          </AnimateIn>
          <AnimateIn delay={0.8}>
            <Button darkBlueGradient className="mt-4 text-white">
              Learn More
            </Button>
            <Button blueTransparent className="mt-4">
              Documentation
            </Button>
          </AnimateIn>
        </header>
        <BannerLottieAnim />
      </Container>
      <MeshUnderlay fullPage />
      {/* <BackgroundVideo loop src="/img/home/banner.mp4" /> */}
    </Section>
  );
};

export default Banner;
