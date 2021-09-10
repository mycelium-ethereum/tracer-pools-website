/* eslint-disable */
import React, { useEffect } from "react";
import { graphql } from "gatsby";
import BlogPost from "./blog-post";

// export const query = graphql`
//   query TracerBlogs {
//     allStrapiTracerBlogs {
//       edges {
//         node {
//           id
//           title
//           slug
//           img {
//             formats {
//               medium {
//                 url
//               }
//             }
//           }
//           publish_date
//         }
//       }
//     }
//   }
// `;
const BlogArticles = () => {
  const generatePosts = () => {
    const article_data = this.props.data.allStrapiKojiArticles.edges,
      posts = []
        .concat(article_data)
        .sort((a, b) => (a.node.id > b.node.id ? -1 : 1))
        .map((element, index) => {
          const title = element.node.title,
            thumbnail = element.node.img.formats.medium.url,
            slug = element.node.slug,
            date = element.node.publish_date,
            description = element.node.description;

          return (
            <BlogPost
              title={title}
              thumbnail={thumbnail}
              date={date}
              description={description}
              slug={slug}
              key={index}
            />
          );
        });
    // Assign the new array to the state array
    // this.setState({ articles: sortedArticles });
    return posts;
  };
  return (
    <>
      <section className="h-full w-full z-20 relative bg-white">
        <div className="container w-full mx-auto pt-6 pb-6 lg:px-0 px-4">
          <h1 className="font-semibold text-3xl text-center mb-8">
            Latest Articles
          </h1>
          <div className="flex">
            <BlogPost />
            {/* {generatePosts()} */}
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogArticles;
