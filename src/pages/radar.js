import React from "react";

// Components
import Layout from "../components/layout";
import SEO from "../components/seo";
import Header from "../components/header";
import BlogPosts from "../components/blog-posts";

const Index = () => {
  return (
    <>
      <SEO title="Radar" description="Read the latest news for Tracer." />
      <Layout>
        <Header
          title={"Radar"}
          subheading={"Read the latest news for Tracer"}
        />
        <BlogPosts />
      </Layout>
    </>
  );
};

export default Index;
