import React, { useEffect, useState } from "react";

// Components
import Layout from "../../../components/layout";
import SEO from "../../../components/seo";
import BlogContent from "../../../components/blog-template-content";

const Preview = (props) => {
  const [blogPreview, setBlogPreview] = useState(false);
  const [blogContent, setBlogContent] = useState(false);
  async function getPost() {
    // Get blog post ID from URL parameters
    const params = new URLSearchParams(props.location.search);
    const id = parseInt(params.get("id"));
    const data = await fetch(
      "https://mycelium-content.uc.r.appspot.com/tracer-blogs?_publicationState=preview&published_at_null=true"
    )
      .then((res) => res.json())
      .catch((err) => console.error(err));
    for (let i = 0; i < data.length; i++) {
      if (data[i].id === id) {
        setBlogPreview(data[i]);
        break;
      }
    }
  }
  const createContent = (data) => {
    if (!!data) {
      setBlogContent(
        <>
          <SEO
            title={data.title}
            image={data.image[0].formats.medium.url}
            description={data.description}
          />
          <Layout>
            <BlogContent data={data} />
          </Layout>
        </>
      );
    }
  };
  useEffect(() => {
    getPost();
  }, []);
  useEffect(() => {
    createContent(blogPreview);
  }, [blogPreview]);
  return <>{blogContent}</>;
};

export default Preview;
