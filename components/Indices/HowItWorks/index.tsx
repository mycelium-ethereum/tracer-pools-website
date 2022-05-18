import Section from "@components/Shared/Section";
import Container from "@components/Shared/Container";
import OptimisedImage from "@components/Shared/OptimisedImage";
import Header from "@components/Indices/HowItWorks/Header";

const HowItWorks: React.FC<{}> = () => {
  return (
    <Section id="section-4" className="h-[650px] bg-secondary">
      <Container className="flex h-full items-center justify-between">
        <Header />
      </Container>
      <OptimisedImage
        src="/img/indices/how-it-works-bg.png"
        alt="Background graphic"
        className="absolute right-0 top-0 h-full max-w-[883px]"
      />
      <OptimisedImage
        src="/img/indices/mesh.png"
        alt="Mesh overlay"
        className="absolute right-0 top-0 h-full max-w-[1440px]"
      />
    </Section>
  );
};

export default HowItWorks;
