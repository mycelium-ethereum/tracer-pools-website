import Section from "@/components/Shared/Section";
import Container from "@/components/Shared/Container";
import Button from "@/components/Shared/Button";
import ParagraphBlock from "@/components/Home/ParagraphBlock";
import NextEvolutionBgSVG from "@/components/SVG/NextEvolutionBgSVG";
import CursorMask from "@/components/Shared/CursorMask";

const Railroads: React.FC<{}> = () => {
  return (
    <Section id="section-3" className="overflow-hidden bg-white">
      <Container className="flex h-screen flex-col py-14 sm:py-16">
        <header className="flex h-full max-w-[600px] flex-grow flex-col justify-center">
          <h1 className="mb-4 text-6xl font-thin leading-[66px] text-action-active">
            Not just one protocol, but the railroads of the future of
            derivatives
          </h1>
          <p className="max-w-[407px] text-action-active">
            We build factory contracts which are fully modular and
            permissionless to deploy.
            <br />A derivative product suite including applications and
            contracts to enable truly global financial stability.
          </p>
        </header>
      </Container>
      <img
        className="absolute top-0 left-0 z-0 h-full w-full object-cover object-right"
        src="/img/home/mesh-bottom-right.png"
      />
      <img
        className="absolute top-0 right-0 h-full w-full object-cover object-top"
        src="/img/home/next-evolution-bg.png"
      />
      {/* <NextEvolutionBgSVG />
      <CursorMask /> */}
    </Section>
  );
};

export default Railroads;
