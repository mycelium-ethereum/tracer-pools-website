import Section from "@components/Shared/Section";
import Container from "@components/Shared/Container";
import MeshDouble from "@components/Shared/Mesh/MeshDouble";
import LargeHeader from "@components/Shared/LargeHeader";
import TracksLottieAnim from "@components/Factories/Banner/TracksLottieAnim";
import { headerInfo } from "@components/Factories/Banner/presets";

const Banner: React.FC<{}> = () => {
  return (
    <Section
      id="section-1"
      className="h-[950px] bg-tracer-darkblue pt-[100px] sm:h-[900px] sm:pt-[131px] lg:pb-36 xl:h-screen xl:min-h-[1100px] 4xl:min-h-[1440px]"
    >
      <Container>
        <LargeHeader {...headerInfo} />
      </Container>
      <MeshDouble />
      <TracksLottieAnim />
    </Section>
  );
};

export default Banner;
