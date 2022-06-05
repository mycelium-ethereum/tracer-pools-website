import Container from "@components/Shared/Container";
import Section from "@components/Shared/Section";
import GuideTile from "@components/Learn/UserGuides/GuideTile";
import LearnHeader from "@components/Learn/LearnHeader";
import { headerContent, tileData } from "@components/Learn/presets";

const UserGuides: React.FC<{}> = () => {
  return (
    <Section className="bg-white">
      <Container className="text-action-active">
        <LearnHeader {...headerContent.userGuides} />
        <div className="mt-8 mb-10 grid gap-4 pb-6 sm:mt-16 lg:grid-cols-2 xl:grid-cols-3">
          {tileData.map((tile, i) => (
            <GuideTile key={i} {...tile} />
          ))}
        </div>
      </Container>
    </Section>
  );
};

export default UserGuides;
