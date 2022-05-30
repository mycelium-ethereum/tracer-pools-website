import Section from "@components/Shared/Section";
import Container from "@components/Shared/Container";
import TokenSpread from "@components/Pools/Banner/TokenSpread";
import IntroText from "@components/Pools/Banner/IntroText";
import MeshDouble from "@components/Shared/Mesh/MeshDouble";
import LargeHeader from "@components/Shared/LargeHeader";
import { headerInfo } from "@components/Pools/Banner/presets";

const Banner: React.FC<{}> = () => {
  return (
    <Section
      id="section-1"
      className="bg-tracer-darkblue pt-[100px] pb-10 sm:min-h-screen sm:pt-40 sm:pb-36"
    >
      <Container>
        <LargeHeader {...headerInfo} />
        <TokenSpread />
        <IntroText />
      </Container>
      <MeshDouble />
    </Section>
  );
};

export default Banner;
