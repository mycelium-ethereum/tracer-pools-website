import Section from "@components/Shared/Section";
import Container from "@components/Shared/Container";
import OptimisedImage from "@components/Shared/OptimisedImage";
import Header from "@components/Indices/CreateStrategies/Header";

const CreateStrategies: React.FC<{}> = () => {
  return (
    <Section
      id="section-2"
      className="bg-secondary pt-16 lg:h-[650px] 4xl:h-[1000px]"
    >
      <Container className="flex h-full flex-col justify-between lg:flex-row lg:items-center">
        <Header />
        <div className="mt-6 mb-10 flex w-full justify-center lg:mt-0 lg:mb-0 lg:w-auto">
          <OptimisedImage
            src="/img/indices/diagram.png"
            alt="Perpetual Pools Diagram"
            className="mr-0 min-w-[498px] sm:min-w-[unset] sm:max-w-[427px] lg:min-w-[623px] 4xl:mr-[133px] 4xl:min-w-[940px]"
          />
        </div>
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
