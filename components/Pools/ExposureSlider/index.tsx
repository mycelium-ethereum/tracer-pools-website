import { useEffect, useState } from "react";
import Section from "@components/Shared/Section";
import Container from "@components/Shared/Container";
import VerticalCarousel from "@components/Pools/ExposureSlider/VerticalCarousel";
import Tokens from "@components/Pools/ExposureSlider/Tokens";
import StartJourney from "@components/Pools/ExposureSlider/StartJourney";

const ExposureSlider: React.FC<{}> = () => {
  const DELAY = 500;
  const MAX_SLIDES = 4;
  const [position, setPosition] = useState(0);

  const updatePosition = (newPosition: number) => {
    if (newPosition >= MAX_SLIDES) newPosition = newPosition % MAX_SLIDES;
    setTimeout(() => {
      setPosition(newPosition);
    }, 400);
  };

  const resetAnimation = () => {
    const btcToken = document.querySelector(".btc-token");
    const linkToken = document.querySelector(".link-token");
    btcToken.classList.remove("animate-up");
    linkToken.classList.remove("animate-down");
    setTimeout(() => {
      btcToken.classList.add("animate-up");
      linkToken.classList.add("animate-down");
    }, DELAY);
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
        <VerticalCarousel
          updatePosition={updatePosition}
          resetAnimation={resetAnimation}
        />
        <StartJourney />
      </Container>
    </Section>
  );
};

export default ExposureSlider;
