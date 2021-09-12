/* eslint-disable */
import React, { Component } from "react";

// Components
import Layout from "../../components/layout";
import SEO from "../../components/seo";
import BlogText from "../../components/blog-text";
import Socials from "../../components/socials";
import { graphql } from "gatsby";

export const query = graphql`
  query StrapiTracerBlogs($slug: String!) {
    strapiTracerBlogs(slug: { eq: $slug }) {
      id
      title
      body_text
      description
      slug
      tagline
      image {
        formats {
          medium {
            url
          }
        }
      }
      publish_date
      read_time
    }
    allStrapiTracerBlogs {
      edges {
        node {
          id
          title
          body_text
          description
          slug
          tagline
          image {
            formats {
              medium {
                url
              }
            }
          }
          publish_date
          read_time
        }
      }
    }
  }
`;

// For some reason ES6 components don't work with the query above
class BlogPostTemplate extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <SEO title={this.props.data.strapiTracerBlogs.title} />
        <Layout>
          <BlogText data={this.props.data.strapiTracerBlogs} />
          <Socials />
        </Layout>
      </>
    );
  }
}

export default BlogPostTemplate;
