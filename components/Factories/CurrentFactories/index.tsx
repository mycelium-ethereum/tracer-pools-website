import Section from "@components/Shared/Section";
import Container from "@components/Shared/Container";
import Header from "@components/Factories/CurrentFactories/Header";
import FactoryInfoCard from "@components/Factories/FactoryInfoCard";
import { cardContent } from "@components/Factories/CurrentFactories/presets";

const CurrentFactories: React.FC<{}> = () => {
  return (
    <Section id="section-4" className="bg-white pt-20 pb-32">
      <Container className="flex h-full items-center justify-between">
        <Header />
        <div className="grid grid-cols-2 gap-4 4xl:grid-cols-3">
          {cardContent.map((content, index) => (
            <FactoryInfoCard key={index} {...content} />
          ))}
        </div>
      </Container>
    </Section>
  );
};

export default CurrentFactories;
