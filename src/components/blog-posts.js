import React, { useEffect, useState } from "react";
import { StaticQuery, graphql } from "gatsby";
import ReactPaginate from "react-paginate";
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
  const [currentPage, setCurrentPage] = useState(0);
  const [currentPosts, setCurrentPosts] = useState(0);
  const [pageCount, setPageCount] = useState(0);
  const [posts, setPosts] = useState([]);
  const PER_PAGE = 9;
  const offset = currentPage * PER_PAGE;

  const loadData = (data) => {
    const curPosts = data
      .slice(offset, offset + PER_PAGE)
      .map((node, i) => <PostLink data={node} key={i} />);
    setCurrentPosts(curPosts);
    setPageCount(Math.ceil(data.length / PER_PAGE));
  };

  const handlePageClick = ({ selected: selectedPage }) => {
    setCurrentPage(selectedPage);
  };

  const sortByDate = (a, b) => {
    return (
      new Date(b.node.publish_date).getTime() -
      new Date(a.node.publish_date).getTime()
    );
  };

  useEffect(() => {
    loadData(posts);
  }, [posts]);

  useEffect(() => {
    loadData(posts);
  }, [currentPage]);

  return (
    <>
      <section className="h-full w-full z-20 relative bg-white select-dark">
        <div className="container w-full mx-auto pt-6 md:pb-24 pb-6 lg:px-0 px-4">
          <h1 className="font-semibold text-3xl text-center mb-8">
            Latest Articles
          </h1>
          <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8">
            <StaticQuery
              query={query}
              render={(data) =>
                setPosts(
                  data.allStrapiTracerBlogs.edges.sort((a, b) =>
                    sortByDate(a, b)
                  )
                )
              }
            />
            {currentPosts}
          </div>
          <hr className="mt-16 color-paginationrulegrey" />
          <ReactPaginate
            previousLabel={"Previous"}
            nextLabel={"Next"}
            pageCount={pageCount}
            onPageChange={handlePageClick}
            containerClassName={"relative box-border flex justify-center pl-0 mb-12 w-full"}
            // pageClassName={"relative flex items-center justify-center color-paginationgrey w-9 h-12 transition-colors inactive-link"}
            pageLinkClassName={"relative flex items-center justify-center color-paginationgrey w-9 h-12 transition-colors inactive-link"}
            previousLinkClassName={"prev-arrow absolute left-0 py-2 pl-8"}
            nextLinkClassName={"next-arrow absolute right-0 py-2 pr-8"}
            disabledClassName={"disabled"}
            activeLinkClassName={"active-link relative color-tracerdarkblue"}
          />
          {/* <ReactPaginate
            previousLabel={"previous"}
            nextLabel={"next"}
            breakLabel={"..."}
            breakClassName={"break-me"}
            pageCount={10}
            marginPagesDisplayed={2}
            pageRangeDisplayed={5}
            // onPageChange={handlePageClick()}
            containerClassName={"pagination"}
          /> */}
        </div>
      </section>
    </>
  );
};

export default BlogPosts;
