import Section from "@components/Shared/Section";
import Container from "@components/Shared/Container";
import GradientLine from "@components/Shared/GradientLine";
import MeshUnderlay from "@components/Shared/Mesh/MeshUnderlay";
import PartnerLogo from "@components/Home/Partners/PartnerLogo";
import { partnerLogos } from "@components/Home/Partners/presets";

const Partners: React.FC<{}> = () => {
  return (
    <Section id="section-6" className="bg-tracer-navy">
      <Container className="relative pt-20 pb-[107px] md:pt-16 md:pb-11">
        <header className="mb-8 h-full w-full max-w-[678px]">
          <div className="mb-2 flex items-center">
            <img
              src="/img/icons/bullet.svg"
              alt="Bullet"
              className="mr-2 h-2.5 w-2.5"
            />
            <span className="inline-block tracking-[0.15em]">PARTNERS</span>
          </div>
          <GradientLine color="lightblue" />
        </header>
        <div className="flex max-w-[584px] flex-wrap lg:max-w-[864px] 4xl:max-w-[unset]">
          {partnerLogos.map((logo, i) => (
            <PartnerLogo key={i} {...logo} />
          ))}
        </div>
      </Container>
      <MeshUnderlay fullPage />
    </Section>
  );
};

export default Partners;
