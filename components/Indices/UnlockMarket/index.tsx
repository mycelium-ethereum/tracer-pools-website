import Section from "@components/Shared/Section";
import Container from "@components/Shared/Container";
import Header from "@components/Indices/UnlockMarket/Header";

const UnlockMarket: React.FC<{}> = () => {
  return (
    <Section id="section-3" className="h-[650px] bg-white 3xl:h-[1000px]">
      <Container className="flex h-full items-center">
        <Header />
      </Container>
    </Section>
  );
};

export default UnlockMarket;
