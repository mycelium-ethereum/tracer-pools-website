/* eslint-disable */
import React from "react";

// Components
import Layout from "../components/layout";
import SEO from "../components/seo";
import BackgroundParallax from "../components/parallax";
import PolicyText from "../components/policy-text";
import Socials from "../components/socials";

const BlogPostTemplate = () => {
  return (
    <>
      <SEO title="Privacy Policy" />
      <BackgroundParallax fixed />
      <Layout>
        <PolicyText />
        <Socials />
      </Layout>
    </>
  );
};

export default BlogPostTemplate;
