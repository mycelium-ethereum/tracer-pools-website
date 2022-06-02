import QuestionDropdown from "@components/Learn/FAQ/QuestionDropdown";

const ThreeColumnLayout: React.FC<{
  faqQuestions: {
    question: string;
    answer: JSX.Element;
  }[];
}> = ({ faqQuestions }) => {
  const columnStyles = "4xl:hidden 3xl:block hidden";
  return (
    <>
      <div className={columnStyles}>
        {faqQuestions.map((content: any, i: number) => {
          if (i % 3 === 0 || i === 0) {
            return <QuestionDropdown key={i} content={content} />;
          }
        })}
      </div>
      <div className={columnStyles}>
        {faqQuestions.map((content: any, i: number) => {
          if (i % 3 === 1 || i === 1) {
            return <QuestionDropdown key={i} content={content} />;
          }
        })}
      </div>
      <div className={columnStyles}>
        {faqQuestions.map((content: any, i: number) => {
          if (i % 3 !== 1 && i !== 1 && i % 3 !== 0 && i !== 0) {
            return <QuestionDropdown key={i} content={content} />;
          }
        })}
      </div>
    </>
  );
};

export default ThreeColumnLayout;
