/* eslint-disable */
import React from "react";
import { StaticQuery, graphql } from "gatsby";
import BlogPost from "./blog-post";

const query = graphql`
  query tracerBlogs {
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
const TracerDrop = () => {
  return (
    <>
      <section className="h-full w-full z-20 relative mt-16">
        <div className="container relative w-full mx-auto pb-12 lg:px-0 px-4">
          <h1 className="font-semibold text-3xl text-center mb-8 text-white">
            Tracer Drop
          </h1>
          <StaticQuery
            query={query}
            render={(data) => (
              <div className="md:grid block grid-cols-3 gap-4">
                {data.allStrapiTracerBlogs.edges
                  .sort((a, b) =>
                    new Date(a.node.publish_date) >
                    new Date(b.node.publish_date)
                      ? -1
                      : 1
                  )
                  .slice(0, 3)
                  .map((node, i) => (
                    <BlogPost data={node} key={i} />
                  ))}
              </div>
            )}
          />
        </div>
      </section>
    </>
  );
};

export default TracerDrop;
