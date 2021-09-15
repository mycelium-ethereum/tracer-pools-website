import React from "react";

// Components
import Layout from "../components/layout";
import SEO from "../components/seo";
import ResearchPapers from "../components/research-papers";
import LearnHeader from "../components/learn-header";
import TracerDrop from "../components/tracer-drop";

const Index = () => {
  return (
    <>
      <SEO
        title="Learn"
        description="Gain a more in-depth understanding of the Tracer protocol"
      />
      <Layout>
        <LearnHeader />
        <ResearchPapers />
        {/* <TracerDrop /> */}
      </Layout>
    </>
  );
};

export default Index;
