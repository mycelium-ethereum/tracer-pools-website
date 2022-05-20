import Section from "@components/Shared/Section";
import Container from "@components/Shared/Container";
import IntegrationCard from "@components/Shared/Cards/InfoCard";
import HelpGovernBanner from "@components/Shared/Banners/HelpGovernBanner";
import { integrationItems } from "@components/Indices/InfoPoints/presets";

const InfoPoints: React.FC<{}> = () => {
  return (
    <Section id="section-5" className="bg-white pt-20">
      <Container>
        <div className="mx-auto mb-[93px] grid max-w-[1680px] gap-4 sm:grid-cols-2 md:grid-cols-3 lg:gap-16 3xl:gap-x-56">
          {integrationItems.map((item, i) => (
            <IntegrationCard {...item} key={i} />
          ))}
        </div>
        <HelpGovernBanner />
      </Container>
    </Section>
  );
};

export default InfoPoints;
