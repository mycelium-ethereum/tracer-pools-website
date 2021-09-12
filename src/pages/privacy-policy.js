/* eslint-disable */
import React from "react";

// Components
import Layout from "../components/layout";
import SEO from "../components/seo";
import PolicyText from "../components/policy-text";
import Socials from "../components/socials";

const Index = () => {
  return (
    <>
      <SEO title="Privacy Policy" />
      <Layout>
        <PolicyText />
      </Layout>
    </>
  );
};

export default Index;
