import Section from "@/components/Shared/Section";
import Container from "@/components/Shared/Container";
import Button from "@/components/Shared/Button";
import BackgroundVideo from "@/components/Home/BackgroundVideo";
import ParagraphBlock from "@/components/Home/ParagraphBlock";

const DecentralisedDerivatives: React.FC<{}> = () => {
  const paragraphCopy = [
    {
      title: "PROGRAMMABLE MARKETS",
      text: "Currently, everyday people are blocked out from utilising powerful risk management tools due to either licencing or transaction costs.",
    },
    {
      title: "DECENTRALISED",
      text: "Fault Tolerant, decentralised financial infrastructure is fundamental next step for humanity. Tracer reduces the reliance on single intermediaries.",
    },
  ];
  return (
    <Section id="section-2">
      <Container className="flex h-screen flex-col py-14 sm:py-16">
        <header className="flex h-full max-w-[407px] flex-grow flex-col justify-center">
          <h1 className="mb-1 text-6xl font-thin text-action-active">
            Decentralised Derivatives Infrastructure
          </h1>
          <p className="text-action-active">
            Markets and transactions become jurisdiction agnostic by leveraging
            base layer blockchain technology.
          </p>
          <Button lightGradient className="mt-4">
            Launch Pools
          </Button>
        </header>
        <div className="flex">
          {paragraphCopy.map((paragraph, index) => (
            <ParagraphBlock
              key={index}
              title={paragraph.title}
              text={paragraph.text}
              className="border-action-active text-action-active"
            />
          ))}
        </div>
      </Container>
      <BackgroundVideo src="/img/home/decentralised-derivatives.mp4" />
    </Section>
  );
};

export default DecentralisedDerivatives;
