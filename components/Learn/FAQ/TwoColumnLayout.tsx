import QuestionDropdown from "@components/Learn/FAQ/QuestionDropdown";

const ThreeColumnLayout: React.FC<{
  faqQuestions: {
    question: string;
    answer: JSX.Element;
  }[];
}> = ({ faqQuestions }) => {
  const columnStyles = "block 3xl:hidden";
  return (
    <>
      <div className={columnStyles}>
        {faqQuestions.map((content: any, i: number) => {
          if (i % 2 === 0 || i === 0) {
            return <QuestionDropdown key={i} content={content} />;
          }
        })}
      </div>
      <div className={columnStyles}>
        {faqQuestions.map((content: any, i: number) => {
          if (i % 2 === 1 || i === 1) {
            return <QuestionDropdown key={i} content={content} />;
          }
        })}
      </div>
    </>
  );
};

export default ThreeColumnLayout;
