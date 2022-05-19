import Button from "@components/Shared/Buttons/Button";
import Container from "@components/Shared/Container";
import PageHeader from "@components/Shared/PageHeader";
import PageSection from "@components/Shared/Section";

const Banner: React.FC<{}> = () => {
  return (
    <PageSection className="bg-white">
      <Container>
        <PageHeader
          title="DAO"
          subheading="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        >
          <div className="mt-4 flex">
            <Button lightBlueGradient>Governance</Button>
            <Button lightBlueGradient className="ml-4">
              Community
            </Button>
          </div>
        </PageHeader>
      </Container>
    </PageSection>
  );
};

export default Banner;
