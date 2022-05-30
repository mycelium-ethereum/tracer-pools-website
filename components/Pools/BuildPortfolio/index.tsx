import Section from "@components/Shared/Section";
import Container from "@components/Shared/Container";
import UnderlinedHeading from "@components/Shared/Heading/UnderlinedHeading";
import PortfolioCarousel from "@components/Pools/BuildPortfolio/PortfolioCarousel";
import BuildPortfolioLottieAnim from "@components/Pools/BuildPortfolio/BuildPortfolioLottieAnim";

const BuildPortfolio: React.FC<{}> = () => {
  return (
    <Section
      id="section-4"
      className="h-auto bg-white py-16 xl:py-20 4xl:h-[1000px]"
    >
      <Container className="flex flex-col-reverse justify-center xl:flex-row xl:items-center xl:justify-between">
        <BuildPortfolioLottieAnim className="w-[600px]" />
        <div>
          <UnderlinedHeading
            lineColor="blue"
            className="mb-0 max-w-[377px] text-action-active"
          >
            BUILD YOUR ON-CHAIN PORTFOLIO
          </UnderlinedHeading>
          <PortfolioCarousel />
        </div>
      </Container>
    </Section>
  );
};

export default BuildPortfolio;
