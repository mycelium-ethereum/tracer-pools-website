import Container from "@components/Shared/Container";
import H2 from "@components/Shared/Heading/H2";
import UnderlinedHeading from "@components/Shared/Heading/UnderlinedHeading";
import PageSection from "@components/Shared/Section";
import InfoCard from "@components/DAO/InfoCard";
import GridContainer from "@components/DAO/GridContainer";
import GovernanceLottieAnim from "@components/DAO/Governance/GovernanceLottieAnim";
import { governanceCards } from "@components/DAO/presets";

const Governance: React.FC<{}> = () => {
  return (
    <PageSection className="bg-secondary py-16 lg:py-[70px]">
      <div className="flex w-full justify-end">
        <GovernanceLottieAnim />
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
