import Section from "@components/Shared/Section";
import Container from "@components/Shared/Container";
import { integrationItems } from "@components/Pools/Integration/presets";
import IntegrationCard from "@components/Pools/Integration/IntegrationCard";
import HelpGovernBanner from "@components/Pools/Integration/HelpGovernBanner";

const Integration: React.FC<{}> = () => {
  return (
    <Section id="section-5" className="bg-secondary">
      <Container>
        <div className="mx-auto mt-16 mb-[99px] grid max-w-[1680px] gap-16 sm:grid-cols-2 md:grid-cols-3 lg:mt-32 3xl:gap-x-56">
          {integrationItems.map((item) => (
            <IntegrationCard {...item} />
          ))}
        </div>
        <HelpGovernBanner />
      </Container>
    </Section>
  );
};

export default Integration;
