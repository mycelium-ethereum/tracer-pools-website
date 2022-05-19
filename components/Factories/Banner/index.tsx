import Section from "@components/Shared/Section";
import Container from "@components/Shared/Container";
import MeshDouble from "@components/Shared/Mesh/MeshDouble";
import Header from "@components/Factories/Banner/Header";
import Background from "@components/Shared/Background";

const Banner: React.FC<{}> = () => {
  return (
    <Section
      id="section-1"
      className="h-screen bg-tracer-darkblue pt-[100px] pb-10 sm:pt-[131px] sm:pb-36"
    >
      <Container>
        <Header />
      </Container>
      <MeshDouble />
      <Background
        image="/img/factories/banner-bg.png"
        className="3xl:min-w-[calc(100%+400px)]"
      />
    </Section>
  );
};

export default Banner;
