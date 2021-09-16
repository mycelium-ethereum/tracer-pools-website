import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { StaticQuery, graphql } from "gatsby";
import Discord from "/static/img/social-icons/discord.svg";
import PostLink from "../components/blog-post-link";

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

const ComingSoon = () => {
  return (
    <>
      <Layout>
        <SEO title="Coming Soon" />
        <section className="relative z-10">
          <div className="container w-full h-auto relative flex items-center justify-center md:pt-72 pt-36 pb-12 xl:px-0 px-4 mx-auto">
            <header className="text-white text-center">
              <h1 className="xl:text-9xl sm:text-7xl text-5xl font-black">
                Coming Soon.
              </h1>
              <p className="lg:text-2xl md:text-xl text-lg mt-8">
                <span className="sm:block inline">
                  We’re working hard to get everything just right. We should
                  &nbsp;
                </span>
                <span className="sm:block inline">
                  be online in the next 24hrs. Keep track of the
                  conversation&nbsp;
                </span>
                <span className="sm:block inline">
                  in our
                  <a
                    className="inline-flex items-center ml-2"
                    href="https://discord.com/invite/kddBUqDVVb"
                    rel="noreferrer"
                    target="_blank"
                  >
                    <img
                      className="sm:w-6 w-5 mr-2"
                      src={Discord}
                      alt="Discord"
                    />
                    Discord
                  </a>
                </span>
              </p>
            </header>
          </div>
        </section>
        <section className="h-full z-20 relative mt-16">
          <div className="container relative w-full mx-auto pb-12 lg:px-0 px-4">
            <h1 className="font-semibold text-3xl text-center mb-8 text-white">
              Latest Announcements
            </h1>
            <StaticQuery
              query={query}
              render={(data) => (
                <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8">
                  {data.allStrapiTracerBlogs.edges
                    .sort((a, b) =>
                      new Date(a.node.publish_date) >
                      new Date(b.node.publish_date)
                        ? -1
                        : 1
                    )
                    .slice(0, 3)
                    .map((node, i) => {
                      //   Hide the third post on tablet and below
                      if (i === 2) {
                        return (
                          <PostLink
                            className="lg:block sm:hidden block"
                            data={node}
                            key={i}
                          />
                        );
                      } else {
                        return <PostLink data={node} key={i} />;
                      }
                    })}
                </div>
              )}
            />
          </div>
        </section>
      </Layout>
    </>
  );
};

export default ComingSoon;
