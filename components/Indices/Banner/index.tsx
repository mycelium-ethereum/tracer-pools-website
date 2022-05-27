import Section from "@components/Shared/Section";
import Container from "@components/Shared/Container";
import MeshDouble from "@components/Shared/Mesh/MeshDouble";
import LargeHeader from "@components/Shared/LargeHeader";
import BottomText from "@components/Indices/Banner/BottomText";
import IndicesLottieAnim from "@components/Indices/Banner/IndicesLottieAnim";
import { headerInfo } from "@components/Indices/Banner/presets";

const Banner: React.FC<{}> = () => {
  return (
    <Section
      id="section-1"
      className="h-[950px] bg-tracer-darkblue pt-[100px] pb-10 sm:h-screen sm:pt-[131px] sm:pb-36 xl:min-h-[1200px] 4xl:min-h-[1440px]"
    >
      <Container>
        <LargeHeader {...headerInfo} />
      </Container>
      <BottomText />
      <MeshDouble />
      <IndicesLottieAnim />
    </Section>
  );
};

export default Banner;
