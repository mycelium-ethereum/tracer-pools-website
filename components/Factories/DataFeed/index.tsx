import Section from "@components/Shared/Section";
import Container from "@components/Shared/Container";
import Header from "@components/Factories/DataFeed/Header";
import Graphics from "@components/Factories/DataFeed/Graphics";

const DataFeed: React.FC<{}> = () => {
  return (
    <Section
      id="section-3"
      className="bg-secondary pt-[270px] pb-[200px] 3xl:pb-[386px] 3xl:pt-[486px]"
    >
      <Container>
        <Header />
      </Container>
      <Graphics />
    </Section>
  );
};

export default DataFeed;
