/* eslint-disable */
import React from "react";

// Components
import Layout from "../components/layout";
import SEO from "../components/seo";
import BackgroundParallax from "../components/parallax";
import BlogText from "../components/blog-text";
import Socials from "../components/socials";

const BlogPostTemplate = () => {
  return (
    <>
      <SEO title="Blog Post" />
      <BackgroundParallax fixed />
      <Layout>
        <BlogText />
        <Socials />
      </Layout>
    </>
  );
};

export default BlogPostTemplate;
