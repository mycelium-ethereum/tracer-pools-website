import Section from "@components/Shared/Section";
import Container from "@components/Shared/Container";
import Header from "@components/Factories/Model/Header";
import Graphics from "@components/Factories/Model/Graphics";
import MoreInfoButtons from "./MoreInfoButtons";

const Model: React.FC<{}> = () => {
  return (
    <Section
      id="section-2"
      className="bg-white pt-16 pb-[320px] lg:h-[650px] lg:pb-0 lg:pt-0 4xl:h-[1000px]"
    >
      <Container className="flex h-full flex-col justify-center">
        <Header />
        <MoreInfoButtons />
      </Container>
      <Graphics />
    </Section>
  );
};

export default Model;
