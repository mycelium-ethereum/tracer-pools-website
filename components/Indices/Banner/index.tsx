import Section from "@components/Shared/Section";
import Container from "@components/Shared/Container";
import MeshDouble from "@components/Shared/Mesh/MeshDouble";
import LargeHeader from "@components/Shared/LargeHeader";
// import Background from "@components/Shared/Background";
import BottomText from "@components/Indices/Banner/BottomText";
import LottieAnim from "@components/Indices/Banner/LottieAnim";
import { headerInfo } from "@components/Indices/Banner/presets";

const Banner: React.FC<{}> = () => {
  return (
    <Section
      id="section-1"
      className="h-screen bg-tracer-darkblue pt-[100px] pb-10 sm:pt-[131px] sm:pb-36"
    >
      <Container>
        <LargeHeader {...headerInfo} />
      </Container>
      <BottomText />
      <MeshDouble />
      {/* <Background
        image="/img/indices/banner-bg.png"
        className="min-h-[702px] max-w-[1500px]"
      /> */}
      <LottieAnim />
    </Section>
  );
};

export default Banner;
