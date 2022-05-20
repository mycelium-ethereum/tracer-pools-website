import Section from "@components/Shared/Section";
import Container from "@components/Shared/Container";
import VerticalCarousel from "@components/Pools/ExposureSlider/VerticalCarousel";
import Tokens from "@components/Pools/ExposureSlider/Tokens";
import StartJourney from "@components/Pools/ExposureSlider/StartJourney";

const ExposureSlider: React.FC<{}> = () => {
  return (
    <Section
      id="section-2"
      className="-mt-12 h-auto bg-white pb-16 pt-0 md:mt-0 md:py-16 xl:py-40 4xl:h-[1000px]"
    >
      <Container className="flex h-full flex-col items-center justify-center">
        <Tokens />
        <VerticalCarousel />
        <StartJourney />
      </Container>
    </Section>
  );
};

export default ExposureSlider;
