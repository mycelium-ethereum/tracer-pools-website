import Button from "@components/Shared/Buttons/Button";
import Container from "@components/Shared/Container";
import H2 from "@components/Shared/Heading/H2";
import UnderlinedHeading from "@components/Shared/Heading/UnderlinedHeading";
import PageSection from "@components/Shared/Section";
import { governanceCards } from "@components/DAO/presets";
import InfoCard from "@components/DAO/InfoCard";
import OptimisedImage from "@components/Shared/OptimisedImage";

const Governance: React.FC<{}> = () => {
  return (
    <PageSection className="bg-secondary py-[70px]">
      <OptimisedImage
        src="/img/dao/governance-bg.png"
        alt=""
        absolute
        className="top-0 right-0 w-[66%] max-w-[960px]"
      />
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
        {/* <Button lightBlueGradient className="mt-2">
          Community
        </Button> */}
        <div className="mt-20 grid max-w-[814px] grid-cols-2 gap-x-14 gap-y-20">
          {governanceCards.map((card, index) => (
            <InfoCard key={index} {...card} />
          ))}
        </div>
      </Container>
    </PageSection>
  );
};

export default Governance;
