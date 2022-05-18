import Section from "@components/Shared/Section";
import Container from "@components/Shared/Container";
import Header from "@components/Factories/Model/Header";
import OptimisedImage from "@components/Shared/OptimisedImage";

const Model: React.FC<{}> = () => {
  return (
    <Section id="section-2" className="pt-[155px] pb-[120px]">
      <Container>
        <Header />
      </Container>
      <OptimisedImage
        src="/img/factories/model-bg.png"
        alt="Model background"
        className="absolute right-0 top-0 h-[662px] max-w-[833px]"
      />
    </Section>
  );
};

export default Model;
