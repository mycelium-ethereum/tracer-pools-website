/* eslint-disable */
import React from "react";

// Components
import Layout from "../components/layout";
import SEO from "../components/seo";
import BackgroundParallax from "../components/parallax";
import Header from "../components/header";
import BlogArticles from "../components/blog-articles";
import Socials from "../components/socials";

const Index = () => {
  return (
    <>
      <SEO title="Blog" />
      <Layout>
        <BackgroundParallax fixed />
        <Header />
        <BlogArticles />
        <Socials />
      </Layout>
    </>
  );
};

export default Index;
