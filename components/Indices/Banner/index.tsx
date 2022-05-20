import Section from "@components/Shared/Section";
import Container from "@components/Shared/Container";
import MeshDouble from "@components/Shared/Mesh/MeshDouble";
import LargeHeader from "@components/Shared/LargeHeader";
import BottomText from "@components/Indices/Banner/BottomText";
import LottieAnim from "@components/Indices/Banner/LottieAnim";
import { headerInfo } from "@components/Indices/Banner/presets";

const Banner: React.FC<{}> = () => {
  return (
    <Section
      id="section-1"
      className="h-[950px] bg-tracer-darkblue pt-[100px] pb-10 sm:h-[1000px] sm:pt-[131px] sm:pb-36 4xl:min-h-[1440px]"
    >
      <Container>
        <LargeHeader {...headerInfo} />
      </Container>
      <BottomText />
      <MeshDouble />
      <LottieAnim />
    </Section>
  );
};

export default Banner;
