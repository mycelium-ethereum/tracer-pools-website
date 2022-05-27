import Section from "@components/Shared/Section";
import Container from "@components/Shared/Container";
import MeshDouble from "@components/Shared/Mesh/MeshDouble";
import MechanismSlider from "@components/Pools/MechanismDesign/MechanismSlider";
import MoreInfoButtons from "@components/Pools/MechanismDesign/MoreInfoButtons";
import Header from "@components/Pools/MechanismDesign/Header";

const MechanismDesign: React.FC<{}> = () => {
  return (
    <Section
      id="section-3"
      className="h-auto bg-secondary py-16 xl:py-20 4xl:min-h-[1000px]"
    >
      <Container className="flex flex-col justify-between xl:flex-row xl:items-center">
        <Header />
        <MechanismSlider />
        <MoreInfoButtons className="flex xl:hidden" />
      </Container>
      <MeshDouble />
    </Section>
  );
};

export default MechanismDesign;
