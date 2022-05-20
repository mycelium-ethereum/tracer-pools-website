import Section from "@components/Shared/Section";
import Container from "@components/Shared/Container";
import Header from "@components/Home/Factories/Header";
import Graphics from "@components/Home/Factories/Graphics";

const Factories: React.FC<{}> = () => {
  return (
    <Section
      id="section-4"
      className="bg-tracer-purple-dark pt-20 lg:h-[800px] lg:py-16 4xl:h-[1200px]"
    >
      <Container className="flex h-full items-center text-white">
        <Header />
      </Container>
      <Graphics />
    </Section>
  );
};

export default Factories;
