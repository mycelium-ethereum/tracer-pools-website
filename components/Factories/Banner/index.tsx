import Section from "@components/Shared/Section";
import Container from "@components/Shared/Container";
import MeshDouble from "@components/Shared/Mesh/MeshDouble";
import Background from "@components/Shared/Background";
import LargeHeader from "@components/Shared/LargeHeader";
import { headerInfo } from "@components/Factories/Banner/presets";

const Banner: React.FC<{}> = () => {
  return (
    <Section
      id="section-1"
      className="h-[800px] bg-tracer-darkblue pt-[100px] pb-10 sm:h-screen sm:pt-[131px] sm:pb-36 4xl:min-h-[1440px]"
    >
      <Container>
        <LargeHeader {...headerInfo} />
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
