import Section from "@/components/Shared/Section";
import Container from "@/components/Shared/Container";
import ParagraphBlock from "@/components/Home/ParagraphBlock";
import AnimateIn from "@/components/Shared/AnimateIn";
import OptimisedImage from "@/components/Shared/OptimisedImage";

const AccessibleMarkets: React.FC<{}> = () => {
  let delay = 0.6;
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
      <Container className="flex flex-col py-40">
        <header className="flex max-w-[561px] flex-col justify-center">
          <AnimateIn delay={0.2}>
            <h1 className="mb-4 text-6xl font-thin leading-[66px] text-action-active">
              Any market, Accessible Anywhere, For Anyone
            </h1>
          </AnimateIn>
          <AnimateIn delay={0.6}>
            <p className="text-action-active">
              Leveraging base layer blockchain technology to
              <br /> democratise access to risk management tooling.
            </p>
          </AnimateIn>
        </header>
        <div className="mt-10 grid w-max grid-cols-2 gap-9">
          {paragraphCopy.map((paragraph, index) => {
            delay += 0.4;
            return (
              <AnimateIn delay={delay}>
                <ParagraphBlock
                  key={index}
                  title={paragraph.title}
                  text={paragraph.text}
                  className="border-action-active text-action-active"
                />
              </AnimateIn>
            );
          })}
        </div>
        <div className="flex max-w-[561px] flex-col justify-center">
          <AnimateIn delay={2.2}>
            <h1 className="mt-24 mb-4 text-6xl font-thin leading-[66px] text-action-active">
              Not just one protocol, but the railroads of the future of
              derivatives
            </h1>
          </AnimateIn>
          <AnimateIn delay={2.6}>
            <p className="text-action-active">
              We build factory contracts which are fully modular and
              <br />
              permissionless to deploy.
            </p>
            <p className="mt-2 text-action-active">
              A derivative product suite including applications and contracts
              <br />
              to enable truly global financial stability.
            </p>
          </AnimateIn>
        </div>
      </Container>
      <OptimisedImage
        src="/img/home/accessible-markets-bg.png"
        alt=""
        absolute
        className="pointer-events-none -bottom-[30px] -right-[30px] h-[727px] w-[1284px]"
      />
    </Section>
  );
};

export default AccessibleMarkets;
