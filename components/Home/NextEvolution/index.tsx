import Section from "@/components/Shared/Section";
import Container from "@/components/Shared/Container";
import Button from "@/components/Shared/Button";
import ParagraphBlock from "@/components/Home/ParagraphBlock";
import NextEvolutionBgSVG from "@/components/SVG/NextEvolutionBgSVG";
import CursorMask from "@/components/Shared/CursorMask";

const NextEvolution: React.FC<{}> = () => {
  const paragraphCopy = [
    {
      title: "GLOBALLY SCALABLE",
      text: "Markets and transactions become jurisdiction agnostic by leveraging base layer blockchain technology. This means that anybody with an internet connection can plug into Tracer.",
    },
  ];
  return (
    <Section id="section-3" className="overflow-hidden bg-white">
      <Container className="flex h-screen flex-col py-14 sm:py-16">
        <header className="flex h-full max-w-[533px] flex-grow flex-col justify-center">
          <h1 className="mb-1 text-6xl font-thin text-tracer-lightblue">
            The next evolution of global derivatives lies within the building
            blocks of the Tracer Protocol.
          </h1>
          <p className="max-w-[407px] text-tracer-lightblue">
            A derivative product suite with the applications and contracts to
            enable financial stability for the future.
          </p>
          <Button lightGradient className="mt-4 text-tracer-lightblue">
            Launch Pools
          </Button>
        </header>
        <ParagraphBlock
          title={paragraphCopy[0].title}
          text={paragraphCopy[0].text}
          className="border-action-active text-action-active"
        />
      </Container>
      <img
        className="absolute top-0 left-0 z-0 h-full w-full object-cover object-right"
        src="/img/home/mesh.svg"
      />
      <img
        className="absolute top-0 right-0 h-full w-full object-cover object-top"
        src="/img/home/next-evolution-bg.png"
      />
      {/* <CursorMask /> */}
    </Section>
  );
};

export default NextEvolution;
