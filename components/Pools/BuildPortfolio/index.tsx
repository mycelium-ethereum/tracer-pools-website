import Section from "@components/Shared/Section";
import Container from "@components/Shared/Container";
import UnderlinedHeading from "@components/Shared/UnderlinedHeading";
import OptimisedImage from "@components/Shared/OptimisedImage";
import PortfolioCarousel from "@components/Pools/BuildPortfolio/PortfolioCarousel";

const BuildPortfolio: React.FC<{}> = () => {
  return (
    <Section id="section-4">
      <Container className="flex items-center justify-center py-20">
        <OptimisedImage
          src="/img/pools/build-portfolio-diagram.png"
          alt="Perpetual Pools diagram"
          className="mr-[122px] max-h-[498px] max-w-[567px] 3xl:mr-[322px] 3xl:max-h-[768px] 3xl:max-w-[874px]"
        />
        <div>
          <UnderlinedHeading
            lineColor="blue"
            className="max-w-[377px] text-action-active"
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
