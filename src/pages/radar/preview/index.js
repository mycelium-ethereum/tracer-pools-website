import React from "react";

// Components
import Layout from "../../../components/layout";
import SEO from "../../../components/seo";
import BlogContent from "../../../components/blog-template-content";

// async function loadCorgis() {
//   const data = await fetch("/.netlify/functions/load-corgis")
//     .then((res) => res.json())
//     .catch((err) => console.error(err));
//   console.log(data);
// }
const Preview = () => {
  return (
    <>
      <SEO
      //   title={this.props.data.strapiTracerBlogs.title}
      //   image={this.props.data.strapiTracerBlogs.image[0].formats.medium.url}
      //   description={this.props.data.strapiTracerBlogs.description}
      />
      <Layout>
        {/* <BlogContent data={this.props.data.strapiTracerBlogs} /> */}
      </Layout>
    </>
  );
};

export default Preview;
