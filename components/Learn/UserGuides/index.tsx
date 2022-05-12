import UnderlinedHeading from "@components/Shared/Heading/UnderlinedHeading";
import GuideTile from "@components/Learn/UserGuides/GuideTile";
import Container from "@components/Shared/Container";
import PageHeader from "@components/Shared/PageHeader";
import PageSection from "@components/Shared/Section";
import { tileData } from "@components/Learn/presets";
import H2 from "@components/Shared/Heading/H2";

const UserGuides: React.FC<{}> = () => {
  return (
    <PageSection>
      <Container>
        <PageHeader
          title="Learn"
          subheading="The essentials to get started using Tracer"
        />
        <div className="text-action-active">
          <UnderlinedHeading
            hideBullet
            lineColor="lightblue"
            className="max-w-[294px]"
          >
            User Guides
          </UnderlinedHeading>
          <H2>{`{Learn how to use our products}`}</H2>
          <div className="mt-8 mb-10 grid gap-4 pb-6 sm:mt-16 lg:grid-cols-2 xl:grid-cols-3">
            {tileData.map((tile, i) => (
              <GuideTile key={i} {...tile} />
            ))}
          </div>
        </div>
      </Container>
    </PageSection>
  );
};

export default UserGuides;
