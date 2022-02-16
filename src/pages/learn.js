import React from "react";

// Components
import Layout from "../components/layout";
import SEO from "../components/seo";
import ResearchPapers from "../components/research-papers";
import TracerDrop from "../components/tracer-drop";
import TracerResearchHeader from "../components/tracer-research-header";
import FAQSection from "../components/faq-section";

const LearnPage = () => {
  return (
    <>
      <SEO
        title="Learn"
        description="Gain a more in-depth understanding of the Tracer protocol"
      />
      <Layout>
        <FAQSection />
        <TracerResearchHeader />
        <ResearchPapers />
        <TracerDrop />
      </Layout>
    </>
  );
};

export default LearnPage;
