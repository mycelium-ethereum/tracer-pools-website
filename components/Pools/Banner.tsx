import Section from "@components/Shared/Section";
import Container from "@components/Shared/Container";
import MeshUnderlay from "@components/Shared/MeshUnderlay";
import TokenSpread from "@components/Pools/TokenSpread";
import Header from "@components/Pools/Header";
import IntroText from "./IntroText";
import MeshDouble from "./MeshDouble";

const Banner: React.FC<{}> = () => {
  return (
    <Section id="section-1" className="bg-tracer-darkblue">
      <Container className="relative pt-40 pb-36">
        <Header />
        <TokenSpread />
        <IntroText />
      </Container>
      <MeshDouble />
    </Section>
  );
};

export default Banner;
