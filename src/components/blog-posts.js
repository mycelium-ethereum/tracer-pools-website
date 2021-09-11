/* eslint-disable */
import React, { useEffect, useState } from "react";
import { StaticQuery, graphql } from "gatsby";
import BlogPost from "./blog-post";

export const query = graphql`
  query TracerBlogs {
    allStrapiTracerBlogs {
      edges {
        node {
          id
          title
          body_text
          image {
            formats {
              medium {
                url
              }
            }
          }
          publish_date
        }
      }
    }
  }
`;
const BlogPosts = ({ data }) => {
  return (
    <>
      <section className="h-full w-full z-20 relative bg-white">
        <div className="container w-full mx-auto pt-6 pb-6 lg:px-0 px-4">
          <h1 className="font-semibold text-3xl text-center mb-8">
            Latest Articles
          </h1>
          <StaticQuery
            query={query}
            render={(data) => (
              <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8">
                {data.allStrapiTracerBlogs.edges
                  .sort((a, b) => (new Date(a.node.publish_date) > new Date(b.node.publish_date) ? -1 : 1))
                  .map((node) => (
                    <BlogPost data={node} />
                  ))}
              </div>
            )}
          />
        </div>
      </section>
    </>
  );
};

export default BlogPosts;
