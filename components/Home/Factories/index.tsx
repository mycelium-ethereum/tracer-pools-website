import Section from "@components/Shared/Section";
import Container from "@components/Shared/Container";
import Header from "@components/Home/Factories/Header";
import DesktopFactoriesLottieAnim from "@components/Home/Factories/DesktopFactoriesLottieAnim";
import MobileFactoriesLottieAnim from "@components/Home/Factories/MobileFactoriesLottieAnim";

const Factories: React.FC<{}> = () => {
  return (
    <Section
      id="section-4"
      className="bg-tracer-purple-dark py-20 lg:h-[800px] lg:py-16 4xl:h-[1200px]"
    >
      <Container className="flex h-full items-center text-white">
        <Header />
      </Container>
      <DesktopFactoriesLottieAnim />
      <MobileFactoriesLottieAnim />
    </Section>
  );
};

export default Factories;
