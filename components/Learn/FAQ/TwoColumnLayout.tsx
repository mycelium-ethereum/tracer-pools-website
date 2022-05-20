import QuestionDropdown from "@components/Learn/FAQ/QuestionDropdown";
import { faqQuestions } from "@components/Learn/FAQ/presets";

const TwoColumnLayout = () => {
  return (
    <>
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
    </>
  );
};

export default TwoColumnLayout;
