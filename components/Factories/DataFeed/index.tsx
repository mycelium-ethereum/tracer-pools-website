import Section from "@components/Shared/Section";
import Container from "@components/Shared/Container";
import Header from "@components/Factories/DataFeed/Header";
import Mesh from "@components/Factories/DataFeed/Mesh";
import DataFeedLottieAnim from "@components/Factories/DataFeed/DataFeedLottieAnim";

const DataFeed: React.FC<{}> = () => {
  return (
    <Section
      id="section-3"
      className="h-[650px] bg-secondary pt-16 lg:pt-0 4xl:h-[1000px]"
    >
      <Container className="flex h-full flex-col justify-between sm:flex-row lg:items-center">
        <Header />
        <DataFeedLottieAnim />
      </Container>
      <Mesh />
    </Section>
  );
};

export default DataFeed;
