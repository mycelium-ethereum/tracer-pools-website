import Section from "@components/Shared/Section";
import Container from "@components/Shared/Container";
import MeshDouble from "@components/Shared/Mesh/MeshDouble";
import MechanismSlider from "@components/Pools/MechanismDesign/MechanismSlider";
import MoreInfoButtons from "@components/Pools/MechanismDesign/MoreInfoButtons";
import Header from "@components/Pools/MechanismDesign/Header";

const MechanismDesign: React.FC<{}> = () => {
  return (
    <Section id="section-3" className="bg-secondary">
      <Container className="flex flex-col justify-between py-16 xl:flex-row xl:items-center xl:py-20">
        <Header />
        <MechanismSlider />
        <MoreInfoButtons className="block xl:hidden" />
      </Container>
      <MeshDouble />
    </Section>
  );
};

export default MechanismDesign;
