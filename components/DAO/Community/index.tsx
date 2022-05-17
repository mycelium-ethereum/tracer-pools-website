import Container from "@components/Shared/Container";
import H2 from "@components/Shared/Heading/H2";
import UnderlinedHeading from "@components/Shared/Heading/UnderlinedHeading";
import PageSection from "@components/Shared/Section";
import { communityCards } from "@components/DAO/presets";
import InfoCard from "@components/DAO/InfoCard";
import OptimisedImage from "@components/Shared/OptimisedImage";

const Community: React.FC<{}> = () => {
  return (
    <PageSection className="py-[70px]">
      <OptimisedImage
        src="/img/dao/community-bg.png"
        alt=""
        className="absolute top-0 right-0 w-1/2 max-w-[700px]"
      />
      <Container className="text-action-active">
        <UnderlinedHeading
          lineColor="lightblue"
          hideBullet
          className="max-w-[294px]"
        >
          COMMUNITY
        </UnderlinedHeading>
        <H2>
          Lorem ipsum dolor sit amet,
          <br /> consectetur adipiscing elit. At
          <br /> felis sit ipsum posuere.
        </H2>
        <div className="mt-20 grid max-w-[814px] grid-cols-2 gap-x-14 gap-y-20">
          {communityCards.map((card, index) => (
            <InfoCard key={index} {...card} />
          ))}
        </div>
      </Container>
    </PageSection>
  );
};

export default Community;
