import React from "react";

// Components
import Layout from "../components/layout";
import SEO from "../components/seo";
import PolicyText from "../components/policy-text";

const Index = () => {
  return (
    <>
      <SEO title="Privacy Policy" description="The Privacy Policy for tracer.finance."/>
      <Layout>
        <PolicyText />
      </Layout>
    </>
  );
};

export default Index;
