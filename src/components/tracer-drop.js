import React from "react";
import { StaticQuery, graphql } from "gatsby";
// import PostLink from "./blog-post-link";
import Overlay06 from "/static/img/learn/overlay-06.svg";
import Overlay07 from "/static/img/learn/overlay-07.svg";
import Overlay08 from "/static/img/learn/overlay-08.svg";

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
            Latest Announcements
          </h1>
          <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8">
            <a
              className="relative h-thumbnail overflow-hidden col-span-1 transition-shadow duration-700 shadow-lg hover:shadow-2xl rounded-xl cursor-pointer"
              href="https://www.youtube.com/watch?v=pWVY84ttx6U"
              rel="noreferrer"
              target="_blank"
            >
              <img className="absolute bottom-0 left-0 z-20" src={Overlay08} />
              <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 z-10" />
              <img
                className="yt-thumbnail object-cover object-top w-full 2xl:-mt-10 md:-mt-8 -mt-14"
                src="https://img.youtube.com/vi/pWVY84ttx6U/0.jpg"
              />
            </a>
            <a
              className="relative h-thumbnail overflow-hidden col-span-1 transition-shadow duration-700 shadow-lg hover:shadow-2xl rounded-xl cursor-pointer"
              href="https://www.youtube.com/watch?v=7eQjiulVY6s"
              rel="noreferrer"
              target="_blank"
            >
              <img className="absolute bottom-0 left-0 z-20" src={Overlay07} />
              <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 z-10" />
              <img
                className="yt-thumbnail object-cover object-top w-full 2xl:-mt-10 md:-mt-8 -mt-14"
                src="https://img.youtube.com/vi/7eQjiulVY6s/0.jpg"
              />
            </a>
            <a
              className="relative h-thumbnail overflow-hidden col-span-1 transition-shadow duration-700 shadow-lg hover:shadow-2xl rounded-xl cursor-pointer lg:block sm:hidden block"
              href="https://www.youtube.com/watch?v=iEeVb1jH0u8"
              rel="noreferrer"
              target="_blank"
            >
              <img className="absolute bottom-0 left-0 z-20" src={Overlay06} />
              <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 z-10" />
              <img
                className="yt-thumbnail object-cover object-top w-full 2xl:-mt-10 md:-mt-8 -mt-14"
                src="https://img.youtube.com/vi/iEeVb1jH0u8/0.jpg"
              />
            </a>
          </div>

          {/* <StaticQuery
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
          /> */}
        </div>
      </section>
    </>
  );
};

export default TracerDrop;
