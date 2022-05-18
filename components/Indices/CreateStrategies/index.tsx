import Section from "@components/Shared/Section";
import Container from "@components/Shared/Container";
import OptimisedImage from "@components/Shared/OptimisedImage";
import Header from "@components/Indices/CreateStrategies/Header";

const CreateStrategies: React.FC<{}> = () => {
  return (
    <Section id="section-2" className="h-[650px] bg-secondary">
      <Container className="flex h-full items-center justify-between">
        <Header />
        <OptimisedImage
          src="/img/indices/diagram.png"
          alt="Perpetual Pools Diagram"
          className="max-h-[548px] max-w-[623px]"
        />
      </Container>
      <OptimisedImage
        src="/img/indices/mesh.png"
        alt="Mesh overlay"
        className="absolute right-0 top-0 h-full max-w-[1440px]"
      />
    </Section>
  );
};

export default CreateStrategies;
