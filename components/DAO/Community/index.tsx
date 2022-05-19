import Container from "@components/Shared/Container";
import H2 from "@components/Shared/Heading/H2";
import UnderlinedHeading from "@components/Shared/Heading/UnderlinedHeading";
import PageSection from "@components/Shared/Section";
import InfoCard from "@components/DAO/InfoCard";
import OptimisedImage from "@components/Shared/OptimisedImage";
import GridContainer from "@components/DAO/GridContainer";
import { communityCards } from "@components/DAO/presets";

const Community: React.FC<{}> = () => {
  return (
    <PageSection className="bg-white pb-16 lg:py-[70px]">
      <div className="flex h-[300px] w-full justify-end lg:h-auto">
        <OptimisedImage
          src="/img/dao/community-bg.png"
          alt=""
          className="absolute top-0 right-0 hidden w-1/2 max-w-[700px] lg:block"
        />
        <OptimisedImage
          src="/img/dao/community-bg.png"
          alt=""
          className="block max-w-[375px] lg:hidden"
        />
      </div>
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
        <GridContainer>
          {communityCards.map((card, index) => (
            <InfoCard key={index} {...card} />
          ))}
        </GridContainer>
      </Container>
    </PageSection>
  );
};

export default Community;
