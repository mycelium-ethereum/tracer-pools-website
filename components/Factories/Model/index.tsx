import Section from "@components/Shared/Section";
import Container from "@components/Shared/Container";
import Header from "@components/Factories/Model/Header";
import MoreInfoButtons from "@components/Factories/Model/MoreInfoButtons";
import ModelLottieAnim from "@components/Factories/Model/ModelLottieAnim";

const Model: React.FC<{}> = () => {
  return (
    <Section id="section-2" className="bg-white py-16 4xl:h-[1000px]">
      <Container className="flex h-full flex-col justify-between lg:flex-row lg:items-center">
        <div className="mr-10 flex flex-col justify-center">
          <Header />
          <MoreInfoButtons />
        </div>
        <ModelLottieAnim />
      </Container>
    </Section>
  );
};

export default Model;
