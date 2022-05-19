import Section from "@components/Shared/Section";
import Container from "@components/Shared/Container";
import MeshDouble from "@components/Shared/Mesh/MeshDouble";
import Header from "@components/Indices/Banner/Header";
// import Background from "@components/Shared/Background";
import BottomText from "@components/Indices/Banner/BottomText";
import LottieAnim from "@components/Indices/Banner/LottieAnim";

const Banner: React.FC<{}> = () => {
  return (
    <Section
      id="section-1"
      className="h-screen bg-tracer-darkblue pt-[100px] pb-10 sm:pt-[131px] sm:pb-36"
    >
      <Container>
        <Header />
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
