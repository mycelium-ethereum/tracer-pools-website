import React, { useEffect, useState } from "react";

// Components
import Layout from "../../../components/layout";
import SEO from "../../../components/seo";
import BlogContent from "../../../components/blog-template-content";

const Preview = (props) => {
  const [postPreview, setPostPreview] = useState({
    title: "",
    image: {
      formats: {
        medium: {
          url: "",
        },
      },
    },
    description: "",
  });
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
        setPostPreview(data[i]);
        break;
      }
    }
  }
  useEffect(() => {
    getPost();
  }, []);
  return (
    <>
      <SEO
        title={postPreview.title}
        // image={postPreview.image[0].formats.medium.url}
        // description={postPreview.description}
      />
      <Layout>
        <BlogContent data={postPreview} />
      </Layout>
    </>
  );
};

export default Preview;
