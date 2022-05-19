import Section from "@components/Shared/Section";
import Container from "@components/Shared/Container";
import Header from "@components/Factories/Model/Header";
import OptimisedImage from "@components/Shared/OptimisedImage";

const Model: React.FC<{}> = () => {
  return (
    <Section
      id="section-2"
      className="bg-white pt-[155px] pb-[120px] 3xl:py-[300px]"
    >
      <Container>
        <Header />
      </Container>
      <OptimisedImage
        src="/img/factories/model-bg.png"
        alt="Model background"
        className="absolute right-0 top-0 block max-w-[833px] 3xl:hidden"
      />
      <div className="absolute right-0 top-0 hidden h-full w-[70vw] max-w-[1742px] 3xl:block">
        <OptimisedImage
          src="/img/factories/model-xl-bg.png"
          alt="Model background"
          cover
          position="left"
        />
      </div>
    </Section>
  );
};

export default Model;
