import Section from "@components/Shared/Section";
import Container from "@components/Shared/Container";
import Header from "@components/Factories/CurrentFactories/Header";
import InfoCard from "@components/Factories/InfoCard";
import { cardContent } from "@components/Factories/CurrentFactories/presets";

const CurrentFactories: React.FC<{}> = () => {
  return (
    <Section id="section-4" className="pt-20 pb-[133px]">
      <Container className="flex justify-between">
        <Header />
        <div className="grid grid-cols-2 gap-4">
          {cardContent.map((content, index) => (
            <InfoCard key={index} {...content} />
          ))}
        </div>
      </Container>
    </Section>
  );
};

export default CurrentFactories;
