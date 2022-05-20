import Section from "@components/Shared/Section";
import Container from "@components/Shared/Container";
import Header from "@components/Indices/HowItWorks/Header";
import Graphics from "@components/Indices/HowItWorks/Graphics";

const HowItWorks: React.FC<{}> = () => {
  return (
    <Section
      id="section-4"
      className="h-[550px] bg-secondary pt-16 lg:h-[650px] lg:pt-0 4xl:h-[1000px]"
    >
      <Container className="flex h-full flex-col justify-between lg:flex-row lg:items-center">
        <Header />
      </Container>
      <Graphics />
    </Section>
  );
};

export default HowItWorks;
