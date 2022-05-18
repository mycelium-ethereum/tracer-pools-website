import Section from "@components/Shared/Section";
import Container from "@components/Shared/Container";
import OptimisedImage from "@components/Shared/OptimisedImage";
import Header from "@components/Factories/DataFeed/Header";

const DataFeed: React.FC<{}> = () => {
  return (
    <Section id="section-3" className="bg-secondary pt-[270px] pb-[200px]">
      <Container>
        <Header />
      </Container>
      <OptimisedImage
        src="/img/factories/data-feed-bg.png"
        alt="Model background"
        className="absolute right-0 top-0 h-full max-w-[479px]"
      />
      <OptimisedImage
        src="/img/factories/mesh.png"
        alt="Mesh overlay"
        className="absolute right-0 top-0 h-full max-w-[1440px]"
      />
    </Section>
  );
};

export default DataFeed;
