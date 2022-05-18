import UnderlinedHeading from "@components/Shared/Heading/UnderlinedHeading";
import Container from "@components/Shared/Container";
import H2 from "@components/Shared/Heading/H2";
import Section from "@components/Shared/Section";
import HelpGovernBanner from "@components/Shared/Banners/HelpGovernBanner";
import { faqQuestions } from "@components/Learn/FAQ/presets";
import QuestionDropdown from "@components/Learn/FAQ/QuestionDropdown";

const FAQ = () => {
  return (
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
          {`{Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.}`}
        </H2>
        <div className="mb-6 grid flex-wrap justify-between gap-x-4 sm:grid-cols-2 xl:max-w-[926px]">
          <div>
            {faqQuestions.map((content, i) => (
              <QuestionDropdown key={i} content={content} />
            ))}
          </div>
          <div>
            {faqQuestions.reverse().map((content, i) => (
              <QuestionDropdown key={i} content={content} />
            ))}
          </div>
        </div>
        <HelpGovernBanner />
      </Container>
    </Section>
  );
};

export default FAQ;
