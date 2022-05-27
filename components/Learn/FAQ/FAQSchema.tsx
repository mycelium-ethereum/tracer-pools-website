import Head from "next/head";

const FAQSchema: React.FC<{
  faqData: any;
}> = ({ faqData }) => {
  const structuredQuestions = faqData.map((faq: any) => {
    const question = {
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: `<p>${faq.answer}</p>`,
      },
    };
    return question;
  });

  const articleStructuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [...structuredQuestions],
  };

  return (
    <>
      <Head>
        <script type="application/ld+json">
          {JSON.stringify(articleStructuredData)}
        </script>
      </Head>
    </>
  );
};

export default FAQSchema;
