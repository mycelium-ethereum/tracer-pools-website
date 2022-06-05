import Container from "@components/Shared/Container";
import PageHeader from "@components/Shared/PageHeader";
import Section from "@components/Shared/Section";

const UserGuides: React.FC<{}> = () => {
  return (
    <Section className="bg-white">
      <Container className="xs:static">
        <PageHeader
          title="Learn"
          subheading="The essentials to get started using Tracer"
        />
      </Container>
    </Section>
  );
};

export default UserGuides;
