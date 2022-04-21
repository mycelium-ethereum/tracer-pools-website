import Section from "@/components/Shared/Section";
import Container from "@/components/Shared/Container";
import Button from "@/components/Shared/Button";
import BackgroundVideo from "@/components/Home/BackgroundVideo";
import ParagraphBlock from "@/components/Home/ParagraphBlock";

const AccessibleMarkets: React.FC<{}> = () => {
  const paragraphCopy = [
    {
      title: "PROGRAMMABLE",
      text: "Create and trade the markets you desire using our permissionless infrastructure without writing a single line of code. Any market, any leverage, using any token as settlement.",
    },
    {
      title: "ACCESSIBLE",
      text: "Decentralised technology strips away the barriers to accessing risk management tooling enforced by traditional finance. Our infrastructure gives anyone with an internet connection unstoppable market access.",
    },
    {
      title: "DECENTRALISED",
      text: "Zero counter-party risk; improved settlement; lower transaction costs; completely censorship resistant; and fully transparent financial transactions enabled by removing all reliance on centralised intermediaries and exchanges.",
    },
  ];
  return (
    <Section id="section-2">
      <Container className="flex h-screen flex-col py-14 sm:py-16">
        <header className="flex h-full max-w-[561px] flex-grow flex-col justify-center">
          <h1 className="mb-4 text-6xl font-thin leading-[66px] text-action-active">
            Any market, Accessible Anywhere, For Anyone
          </h1>
          <p className="text-action-active">
            Leveraging base layer blockchain technology to
            <br /> democratise access to risk management tooling.
          </p>
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
      <BackgroundVideo loop src="/img/home/decentralised-derivatives.mp4" />
    </Section>
  );
};

export default AccessibleMarkets;
