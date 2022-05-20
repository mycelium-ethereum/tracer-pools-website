import Section from "@components/Shared/Section";
import Container from "@components/Shared/Container";
import Tokens from "@components/Home/PerpetualPools/Tokens";
import V2LottieAnim from "@components/Home/PerpetualPools/V2LottieAnim";
import Header from "@components/Home/PerpetualPools/Header";

const PerpetualPools: React.FC<{}> = () => {
  return (
    <Section
      id="section-3"
      className="bg-tracer-navy pt-10 md:py-16 lg:h-[800px] 4xl:h-[1200px]"
    >
      <Container className="z-10 flex h-full flex-col text-white">
        <Header />
      </Container>
      <div className="relative h-[370px] sm:h-[50vh] sm:min-h-[500px] lg:static lg:h-auto lg:min-h-[unset]">
        <Tokens />
        <V2LottieAnim />
      </div>
    </Section>
  );
};

export default PerpetualPools;
