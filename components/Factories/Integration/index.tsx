import Section from "@components/Shared/Section";
import Container from "@components/Shared/Container";
import { integrationItems } from "@components/Factories/Integration/presets";
import IntegrationCard from "@components/Shared/Cards/InfoCard";
import HelpGovernBanner from "@components/Shared/Banners/HelpGovernBanner";

const Integration: React.FC<{}> = () => {
  return (
    <Section id="section-5" className="bg-secondary pt-20">
      <Container>
        <div className="mx-auto mb-[93px] grid max-w-[1680px] gap-16 sm:grid-cols-2 md:grid-cols-3 3xl:gap-x-56">
          {integrationItems.map((item, i) => (
            <IntegrationCard {...item} key={i} />
          ))}
        </div>
        <HelpGovernBanner />
      </Container>
    </Section>
  );
};

export default Integration;