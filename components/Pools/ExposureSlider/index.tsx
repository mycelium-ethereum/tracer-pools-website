import { useEffect, useState } from "react";
import Section from "@components/Shared/Section";
import Container from "@components/Shared/Container";
import VerticalCarousel from "@components/Pools/ExposureSlider/VerticalCarousel";
import Tokens from "@components/Pools/ExposureSlider/Tokens";
import StartJourney from "@components/Pools/ExposureSlider/StartJourney";

const ExposureSlider: React.FC<{}> = () => {
  const MAX_SLIDES = 4;
  const [position, setPosition] = useState(0);

  const updatePosition = (newPosition: number) => {
    if (newPosition >= MAX_SLIDES) newPosition = newPosition % MAX_SLIDES;
    setTimeout(() => {
      setPosition(newPosition);
    }, 300);
  };

  useEffect(() => {
    console.log(position);
  }, [position]);

  return (
    <Section
      id="section-2"
      className="-mt-12 h-auto bg-white pb-16 pt-0 md:mt-0 md:py-16 xl:py-40 4xl:h-[1000px]"
    >
      <Container className="flex h-full flex-col items-center justify-center">
        <Tokens position={position} />
        <VerticalCarousel updatePosition={updatePosition} />
        <StartJourney />
      </Container>
    </Section>
  );
};

export default ExposureSlider;
