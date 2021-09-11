/* eslint-disable */
import React from "react";

// Components
import Layout from "../components/layout";
import SEO from "../components/seo";
import BackgroundParallax from "../components/parallax";
import Header from "../components/header";
import BlogPosts from "../components/blog-posts";
import Socials from "../components/socials";

const Index = () => {
  return (
    <>
      <SEO title="Blog" />
      <Layout>
        <BackgroundParallax fixed />
        <Header
          title={"Radar"}
          subheading={"Read the latest news for Tracer"}
        />
        <BlogPosts />
        <Socials />
      </Layout>
    </>
  );
};

export default Index;
