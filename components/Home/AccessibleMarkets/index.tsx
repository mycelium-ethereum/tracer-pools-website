import Section from "@components/Shared/Section";
import Container from "@components/Shared/Container";
import ParagraphBlock from "@components/Home/ParagraphBlock";
import AnimateIn from "@components/Shared/AnimateIn";
import OptimisedImage from "@components/Shared/OptimisedImage";
import { paragraphCopy } from "@components/Home/AccessibleMarkets/presets";
import H1 from "@components/Home/H1";
import Paragraph from "@components/Home/Paragraph";

const AccessibleMarkets: React.FC<{}> = () => {
  let delay = 0.6;
  return (
    <Section id="section-2">
      <Container className="flex flex-col pt-28 pb-[400px] text-action-active md:pb-[300px] md:pt-28 lg:py-40">
        <header className="flex flex-col justify-center 3xl:max-w-[1043px]">
          <AnimateIn delay={0.2}>
            <H1 className="mb-4">
              Any market,
              <br className="block lg:hidden" />
              Accessible Anywhere,
              <br />
              For Anyone
            </H1>
          </AnimateIn>
          <AnimateIn delay={0.6}>
            <Paragraph>
              Leveraging base layer blockchain technology to
              <br className="hidden sm:block" /> democratise access to risk
              management tooling.
            </Paragraph>
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
                  className="border-action-active"
                />
              </AnimateIn>
            );
          })}
        </div>
        <div className="mt-20 flex max-w-[561px] flex-col justify-center sm:mt-24">
          <AnimateIn delay={0.2}>
            <H1 className="mb-4">
              Not just one protocol, but the railroads of the future of
              derivatives
            </H1>
          </AnimateIn>
          <AnimateIn delay={0.6}>
            <Paragraph>
              We build factory contracts which are fully modular and
              <br className="hidden sm:block" />
              permissionless to deploy.
            </Paragraph>
            <Paragraph className="mt-2">
              A derivative product suite including applications and contracts
              <br className="hidden sm:block" />
              to enable truly global financial stability.
            </Paragraph>
          </AnimateIn>
        </div>
      </Container>
      <OptimisedImage
        src="/img/home/accessible-markets-bg.png"
        alt=""
        className="pointer-events-none absolute -bottom-[30px] -right-[30px] hidden min-h-[727px] min-w-[1284px] xl:block"
      />
      <OptimisedImage
        src="/img/home/accessible-markets-mobile-bg.png"
        alt=""
        className="pointer-events-none absolute -bottom-[30px] -right-[30px] block min-h-[480px] max-w-[350px] translate-x-4 md:translate-x-0 xl:hidden"
      />
    </Section>
  );
};

export default AccessibleMarkets;
