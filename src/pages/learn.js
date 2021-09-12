/* eslint-disable */
import React from "react";

// Components
import Layout from "../components/layout";
import SEO from "../components/seo";
import ResearchPapers from "../components/research-papers";
import LearnHeader from "../components/learn-header";
import TracerDrop from "../components/tracer-drop";
import Socials from "../components/socials";

const Index = () => {
  return (
    <>
      <SEO title="Learn" />
      <Layout>
        <LearnHeader />
        <ResearchPapers />
        <TracerDrop />
      </Layout>
    </>
  );
};

export default Index;
