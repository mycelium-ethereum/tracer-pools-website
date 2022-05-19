import Section from "@components/Shared/Section";
import Container from "@components/Shared/Container";
import UnderlinedHeading from "@components/Shared/Heading/UnderlinedHeading";
import OptimisedImage from "@components/Shared/OptimisedImage";
import PortfolioCarousel from "@components/Pools/BuildPortfolio/PortfolioCarousel";

const BuildPortfolio: React.FC<{}> = () => {
  return (
    <Section id="section-4" className="bg-white py-16 xl:py-20">
      <Container className="flex flex-col-reverse justify-center xl:flex-row xl:items-center">
        <OptimisedImage
          src="/img/pools/build-portfolio-diagram.png"
          alt="Perpetual Pools diagram"
          className="mx-auto mt-10 hidden max-h-[498px] max-w-[567px] sm:block lg:mx-0 lg:mt-0 lg:mr-[122px] 3xl:mr-[322px] 3xl:max-h-[768px] 3xl:max-w-[874px]"
        />
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
