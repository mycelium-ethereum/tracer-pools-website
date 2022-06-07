import Section from "@components/Shared/Section";
import Container from "@components/Shared/Container";
import OptimisedImage from "@components/Shared/OptimisedImage";
import Header from "@components/Indices/CreateStrategies/Header";
import StrategiesLottieAnim from "@components/Indices/CreateStrategies/StrategiesLottieAnim";

const CreateStrategies: React.FC<{}> = () => {
  return (
    <Section
      id="section-2"
      className="bg-secondary py-16 lg:h-[650px] lg:py-0 4xl:h-[1000px]"
    >
      <Container className="flex h-full flex-col justify-between lg:flex-row lg:items-center">
        <Header />
        <StrategiesLottieAnim />
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
