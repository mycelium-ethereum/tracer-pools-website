import React from "react";

// Components
import Layout from "../components/layout";
import SEO from "../components/seo";
import PolicyTextContainer from "../components/policy-text-container";

const PrivacyPolicyPage = () => {
  return (
    <>
      <SEO
        title="Privacy Policy"
        description="The Privacy Policy for tracer.finance."
      />
      <Layout>
        <PolicyTextContainer />
      </Layout>
    </>
  );
};

export default PrivacyPolicyPage;
