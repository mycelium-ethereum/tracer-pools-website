import Section from "@components/Shared/Section";
import Container from "@components/Shared/Container";
import ParagraphBlock from "@components/Home/ParagraphBlock";
import AnimateIn from "@components/Shared/AnimateIn";
import OptimisedImage from "@components/Shared/OptimisedImage";

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
      <Container className="flex flex-col py-28 lg:py-40">
        <header className="flex flex-col justify-center 3xl:max-w-[1043px]">
          <AnimateIn delay={0.2}>
            <h1 className="mb-4 text-[40px] font-light leading-[44px] text-action-active 3xl:text-6xl 3xl:leading-[66px]">
              Any market,
              <br className="block lg:hidden" />
              Accessible Anywhere,
              <br />
              For Anyone
            </h1>
          </AnimateIn>
          <AnimateIn delay={0.6}>
            <p className="text-action-active">
              Leveraging base layer blockchain technology to
              <br className="hidden sm:block" /> democratise access to risk
              management tooling.
            </p>
          </AnimateIn>
        </header>
        <div className="mt-10 grid grid-cols-2 gap-6 lg:w-max lg:gap-9">
          {paragraphCopy.map((paragraph, i) => {
            delay += 0.4;
            return (
              <AnimateIn delay={delay} key={i}>
                <ParagraphBlock
                  title={paragraph.title}
                  text={paragraph.text}
                  className="border-action-active text-action-active"
                />
              </AnimateIn>
            );
          })}
        </div>
        <div className="flex max-w-[561px] flex-col justify-center">
          <AnimateIn delay={0.2}>
            <h1 className="mt-24 mb-4 text-[40px] font-light leading-[44px] text-action-active 3xl:text-6xl 3xl:leading-[66px]">
              Not just one protocol, but the railroads of the future of
              derivatives
            </h1>
          </AnimateIn>
          <AnimateIn delay={0.6}>
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
        className="pointer-events-none -bottom-[30px] -right-[30px] min-h-[727px] min-w-[1284px]"
      />
    </Section>
  );
};

export default AccessibleMarkets;
