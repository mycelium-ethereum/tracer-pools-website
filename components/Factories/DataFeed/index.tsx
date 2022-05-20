import Section from "@components/Shared/Section";
import Container from "@components/Shared/Container";
import Header from "@components/Factories/DataFeed/Header";
import Graphics from "@components/Factories/DataFeed/Graphics";

const DataFeed: React.FC<{}> = () => {
  return (
    <Section
      id="section-3"
      className="h-[650px] bg-secondary pt-16 lg:pt-0 4xl:h-[1000px]"
    >
      <Container className="flex h-full lg:items-center">
        <Header />
      </Container>
      <Graphics />
    </Section>
  );
};

export default DataFeed;
