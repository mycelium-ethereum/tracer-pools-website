import Container from "@components/Shared/Container";
import H2 from "@components/Shared/Heading/H2";
import UnderlinedHeading from "@components/Shared/Heading/UnderlinedHeading";
import PageSection from "@components/Shared/Section";
import InfoCard from "@components/DAO/InfoCard";
import OptimisedImage from "@components/Shared/OptimisedImage";
import GridContainer from "@components/DAO/GridContainer";
import { governanceCards } from "@components/DAO/presets";

const Governance: React.FC<{}> = () => {
  return (
    <PageSection className="bg-secondary pb-16 lg:py-[70px]">
      <div className="flex w-full justify-end">
        <OptimisedImage
          src="/img/dao/governance-bg.png"
          alt=""
          className="top-0 right-0 max-w-[375px] lg:absolute lg:w-[960px] lg:max-w-[50vw]"
        />
      </div>
      <Container className="text-action-active">
        <UnderlinedHeading
          lineColor="lightblue"
          hideBullet
          className="max-w-[294px]"
        >
          GOVERNANCE
        </UnderlinedHeading>
        <H2>
          Tracer has been governed by
          <br /> the community since day 1.
        </H2>
        <GridContainer>
          {governanceCards.map((card, index) => (
            <InfoCard key={index} {...card} />
          ))}
        </GridContainer>
      </Container>
    </PageSection>
  );
};

export default Governance;
