import React from "react";
import { StaticQuery, graphql } from "gatsby";
import PostLink from "./blog-post-link";

const query = graphql`
  query TracerBlogs {
    allStrapiTracerBlogs {
      edges {
        node {
          id
          title
          description
          image {
            formats {
              medium {
                url
              }
            }
          }
          publish_date
          slug
        }
      }
    }
  }
`;
const BlogPosts = () => {
  const sortByDate = (a, b) => {
    return (
      new Date(b.node.publish_date).getTime() -
      new Date(a.node.publish_date).getTime()
    );
  };
  return (
    <>
      <section className="h-full w-full z-20 relative bg-white select-dark">
        <div className="container w-full mx-auto pt-6 md:pb-24 pb-6 lg:px-0 px-4">
          <h1 className="font-semibold text-3xl text-center mb-8">
            Latest Articles
          </h1>
          <StaticQuery
            query={query}
            render={(data) => (
              <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8">
                {data.allStrapiTracerBlogs.edges
                  .sort((a, b) => sortByDate(a, b))
                  .map((node, i) => (
                    <PostLink data={node} key={i} />
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
