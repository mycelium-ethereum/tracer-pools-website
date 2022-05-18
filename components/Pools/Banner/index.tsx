import Section from "@components/Shared/Section";
import Container from "@components/Shared/Container";
import TokenSpread from "@components/Pools/Banner/TokenSpread";
import Header from "@components/Pools/Banner/Header";
import IntroText from "./IntroText";
import MeshDouble from "@components/Shared/Mesh/MeshDouble";

const Banner: React.FC<{}> = () => {
  return (
    <Section id="section-1" className="bg-tracer-darkblue">
      <Container className="relative pt-[100px] pb-10 sm:pt-40 sm:pb-36">
        <Header />
        <TokenSpread />
        <IntroText />
      </Container>
      <MeshDouble />
    </Section>
  );
};

export default Banner;
