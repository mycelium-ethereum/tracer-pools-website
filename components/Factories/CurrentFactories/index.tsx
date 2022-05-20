import Section from "@components/Shared/Section";
import Container from "@components/Shared/Container";
import Header from "@components/Factories/CurrentFactories/Header";
import DesktopGrid from "@components/Factories/CurrentFactories/DesktopGrid";
import TabletGrid from "@components/Factories/CurrentFactories/TabletGrid";
import MobileGrid from "@components/Factories/CurrentFactories/MobileGrid";

const CurrentFactories: React.FC<{}> = () => {
  return (
    <Section id="section-4" className="bg-white py-20 md:pt-20 md:pb-32">
      <Container className="flex h-full flex-col items-start justify-between lg:flex-row">
        <Header />
        <DesktopGrid />
        <TabletGrid />
        <MobileGrid />
      </Container>
    </Section>
  );
};

export default CurrentFactories;
