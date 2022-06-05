import Section from "@components/Shared/Section";
import Container from "@components/Shared/Container";
import Header from "@components/Indices/UnlockMarket/Header";
import UnlockMarketLottieAnim from "@components/Indices/UnlockMarket/UnlockMarketLottieAnim";

const UnlockMarket: React.FC<{}> = () => {
  return (
    <Section
      id="section-3"
      className="h-[400px] bg-white lg:h-[650px] 4xl:h-[1000px]"
    >
      <Container className="flex h-full items-center">
        <Header />
      </Container>
      <UnlockMarketLottieAnim />
    </Section>
  );
};

export default UnlockMarket;
