import { useState } from "react";
import Section from "@components/Shared/Section";
import Container from "@components/Shared/Container";
import UnderlinedHeading from "@components/Shared/Heading/UnderlinedHeading";
import PortfolioCarousel from "@components/Pools/BuildPortfolio/PortfolioCarousel";
import BuildPortfolioLottieAnim from "@components/Pools/BuildPortfolio/BuildPortfolioLottieAnim";
import { lottieFiles } from "@components/Pools/BuildPortfolio/presets";

const BuildPortfolio: React.FC<{}> = () => {
  const [position, setPosition] = useState(0);

  const updatePosition = (newPosition: number) => {
    setPosition(newPosition);
  };

  return (
    <Section
      id="section-4"
      className="h-auto bg-white py-16 xl:py-20 4xl:h-[1000px]"
    >
      <Container className="flex flex-col-reverse justify-center xl:flex-row xl:items-center xl:justify-between">
        <div className="relative mx-auto hidden h-[300px] w-[600px] sm:block xl:mx-0">
          {lottieFiles.map((file, i) => (
            <BuildPortfolioLottieAnim
              key={i}
              file={file}
              position={i}
              curPosition={position}
              className="absolute top-1/2 left-0 w-full -translate-y-1/2"
            />
          ))}
        </div>
        <div>
          <UnderlinedHeading
            lineColor="blue"
            className="mb-0 max-w-[377px] text-action-active"
          >
            BUILD YOUR ON-CHAIN PORTFOLIO
          </UnderlinedHeading>
          <PortfolioCarousel updatePosition={updatePosition} />
        </div>
      </Container>
    </Section>
  );
};

export default BuildPortfolio;
