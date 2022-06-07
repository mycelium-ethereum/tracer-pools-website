import Section from "@components/Shared/Section";
import Container from "@components/Shared/Container";
import Header from "@components/Home/Indices/Header";
import IndicesLottieAnim from "./IndicesLottieAnim";

const Indices: React.FC<{}> = () => {
  return (
    <Section
      id="section-5"
      className="bg-tracer-navy pt-20 lg:h-[800px] lg:py-16 4xl:h-[1200px]"
    >
      <Container className="flex h-full items-center text-white">
        <Header />
      </Container>
      <IndicesLottieAnim />
    </Section>
  );
};

export default Indices;
