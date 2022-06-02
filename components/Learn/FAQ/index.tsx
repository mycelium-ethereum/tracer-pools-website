import UnderlinedHeading from "@components/Shared/Heading/UnderlinedHeading";
import Container from "@components/Shared/Container";
import H2 from "@components/Shared/Heading/H2";
import Section from "@components/Shared/Section";
import HelpGovernBanner from "@components/Shared/Banners/HelpGovernBanner";
import FAQSchema from "@components/Learn/FAQ/FAQSchema";
import FourColumnLayout from "@components/Learn/FAQ/FourColumnLayout";
import ThreeColumnLayout from "@components/Learn/FAQ/ThreeColumnLayout";
import TwoColumnLayout from "@components/Learn/FAQ/TwoColumnLayout";
import { faqQuestions, faqSchemaData } from "@components/Learn/FAQ/presets";

const FAQ: React.FC<{}> = () => {
  return (
    <>
      <FAQSchema faqData={faqSchemaData} />
      <Section className="bg-secondary pt-20">
        <Container className="text-action-active">
          <UnderlinedHeading
            hideBullet
            lineColor="lightblue"
            className="max-w-[294px]"
          >
            FAQs
          </UnderlinedHeading>
          <H2 className="mb-6 max-w-[767px]">
            The essentials to get started using Perpetual Pools
          </H2>
          <div className="mb-6 grid flex-wrap justify-between gap-x-4 sm:grid-cols-2 xl:max-w-[926px] 3xl:max-w-full 3xl:grid-cols-3 4xl:grid-cols-4">
            <ThreeColumnLayout faqQuestions={faqQuestions} />
            <FourColumnLayout faqQuestions={faqQuestions} />
            <TwoColumnLayout faqQuestions={faqQuestions} />
            {/* <div>
              {faqQuestions.map((content, i) => (
                <QuestionDropdown key={i} content={content} />
              ))}
            </div>
            <div>
              {faqQuestions.reverse().map((content, i) => (
                <QuestionDropdown key={i} content={content} />
              ))}
            </div>
            <div className="hidden 3xl:block">
              {faqQuestions.reverse().map((content, i) => (
                <QuestionDropdown key={i} content={content} />
              ))}
            </div>
            <div className="hidden 4xl:block">
              {faqQuestions.reverse().map((content, i) => (
                <QuestionDropdown key={i} content={content} />
              ))}
            </div> */}
          </div>
          <HelpGovernBanner />
        </Container>
      </Section>
    </>
  );
};

export default FAQ;
