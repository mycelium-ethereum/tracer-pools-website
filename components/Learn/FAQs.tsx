import UnderlinedHeading from "@components/Shared/UnderlinedHeading";
import Container from "@components/Shared/Container";
import H2 from "@components/Shared/H2";
import Section from "@components/Shared/Section";
import HelpGovernBanner from "@components/Pools/Integration/HelpGovernBanner";
import { faqQuestions } from "@components/Learn/FAQ/presets";
import QuestionDropdown from "@components/Learn/FAQ/QuestionDropdown";

const FAQ: React.FC<{}> = () => {
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
        <div className="mb-6 flex flex-wrap justify-between">
          {faqQuestions.map((content, i) => (
            <QuestionDropdown
              key={i}
              content={content}
              className={i === 1 ? "ml-2" : "mr-2"}
            />
          ))}
        </div>
        <HelpGovernBanner />
      </Container>
    </Section>
  );
};

export default FAQ;
