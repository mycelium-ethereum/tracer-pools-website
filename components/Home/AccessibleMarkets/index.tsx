import Section from "@components/Shared/Section";
import Container from "@components/Shared/Container";
import ParagraphBlock from "@components/Home/ParagraphBlock";
import AnimateIn from "@components/Shared/AnimateIn";
import OptimisedImage from "@components/Shared/OptimisedImage";
import { paragraphCopy } from "@components/Home/AccessibleMarkets/presets";

const AccessibleMarkets: React.FC<{}> = () => {
  let delay = 0.6;
  return (
    <Section id="section-2">
      <Container className="flex flex-col pt-28 md:py-28 lg:py-40">
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
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:w-max lg:gap-9">
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
        <div className="mt-20 flex max-w-[561px] flex-col justify-center sm:mt-24">
          <AnimateIn delay={0.2}>
            <h1 className="mb-4 text-[40px] font-light leading-[44px] text-action-active 3xl:text-6xl 3xl:leading-[66px]">
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
        className="pointer-events-none -bottom-[30px] -right-[30px] hidden min-h-[727px] min-w-[1284px] xl:block"
      />
      <div className="flex justify-end">
        <OptimisedImage
          src="/img/home/accessible-markets-mobile-bg.png"
          alt=""
          className="pointer-events-none -bottom-[30px] -right-[30px] block min-h-[480px] max-w-[350px] md:absolute xl:hidden"
        />
      </div>
    </Section>
  );
};

export default AccessibleMarkets;
