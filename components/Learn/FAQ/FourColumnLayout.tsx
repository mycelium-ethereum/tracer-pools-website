import QuestionDropdown from "@components/Learn/FAQ/QuestionDropdown";

const ThreeColumnLayout: React.FC<{
  faqQuestions: {
    question: string;
    answer: JSX.Element;
  }[];
}> = ({ faqQuestions }) => {
  const columnStyles = "4xl:block hidden";
  return (
    <>
      <div className={columnStyles}>
        {faqQuestions.map(
          (content: any, i: number) =>
            (i % 4 === 0 || i === 0) && (
              <QuestionDropdown key={i} content={content} />
            )
        )}
      </div>
      <div className={columnStyles}>
        {faqQuestions.map(
          (content: any, i: number) =>
            (i % 4 === 1 || i === 1) &&
            i !== 0 && <QuestionDropdown key={i} content={content} />
        )}
      </div>
      <div className={columnStyles}>
        {faqQuestions.map(
          (content: any, i: number) =>
            (i % 4 === 2 || i === 2) && (
              <QuestionDropdown key={i} content={content} />
            )
        )}
      </div>
      <div className={columnStyles}>
        {faqQuestions.map(
          (content: any, i: number) =>
            i % 4 !== 0 &&
            i !== 0 &&
            i % 4 !== 1 &&
            i !== 1 &&
            i % 4 !== 2 &&
            i !== 2 && <QuestionDropdown key={i} content={content} />
        )}
      </div>
    </>
  );
};

export default ThreeColumnLayout;
