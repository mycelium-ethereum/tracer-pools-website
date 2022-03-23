import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { StaticQuery, graphql } from "gatsby";
import Discord from "/static/img/social-icons/discord-footer.svg";
import PostLink from "../components/blog/blog-post-link";

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
          <div className="container relative mx-auto flex h-auto w-full items-center justify-center px-4 pt-36 pb-12 md:pt-72 xl:px-0">
            <header className="text-center text-white">
              <h1 className="text-5xl font-black sm:text-7xl xl:text-9xl">
                Coming Soon.
              </h1>
              <p className="mt-8 text-lg md:text-xl lg:text-2xl">
                <span className="inline sm:block">
                  We’re working hard to get everything just right. We should
                  &nbsp;
                </span>
                <span className="inline sm:block">
                  be online in the next 24hrs. Keep track of the
                  conversation&nbsp;
                </span>
                <span className="inline sm:block">
                  in our
                  <a
                    className="ml-2 inline-flex items-center"
                    href="https://discord.com/invite/kddBUqDVVb"
                    target="_blank"
                  >
                    <img
                      className="mr-2 w-5 sm:w-6"
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
        <section className="relative z-20 mt-16 h-full">
          <div className="container relative mx-auto w-full px-4 pb-12 lg:px-0">
            <h1 className="mb-8 text-center text-3xl font-semibold text-white">
              Latest Announcements
            </h1>
            <StaticQuery
              query={query}
              render={(data) => (
                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
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
                            className="block sm:hidden lg:block"
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
