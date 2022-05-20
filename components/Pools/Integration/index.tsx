import Section from "@components/Shared/Section";
import Container from "@components/Shared/Container";
import IntegrationCard from "@components/Shared/Cards/InfoCard";
import HelpGovernBanner from "@components/Shared/Banners/HelpGovernBanner";
import { integrationItems } from "@components/Pools/Integration/presets";

const Integration: React.FC<{}> = () => {
  return (
    <Section id="section-5" className="bg-secondary">
      <Container>
        <div className="mx-auto mt-16 mb-[99px] grid max-w-[1680px] gap-16 sm:grid-cols-2 md:grid-cols-3 lg:mt-32 3xl:gap-x-56">
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
