/* eslint-disable */
import React, { useEffect, useState } from "react";
import { StaticQuery, graphql } from "gatsby";
import ReactPaginate from "react-paginate";
import PostLink from "./blog-post-link";
import BlogSearch from "./blog-search";
import SearchIcon from "../..//static/img/blog-posts/search-large.svg";

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
  const [showSearch, setShowSearch] = useState(false);
  const [perPage, setPerPage] = useState(9);
  const offset = currentPage * perPage;

  // use this for filtering by category later
  const loadData = (data) => {
    const curPosts = data
      .slice(offset, offset + perPage)
      .map((node, i) => <PostLink data={node} key={i} />);
    setCurrentPosts(curPosts);
    setPageCount(Math.ceil(data.length / perPage));
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

  const disableScroll = () => {
    document.body.style.overflow = "hidden";
  };

  const openSearch = () => {
    setShowSearch(true);
    disableScroll();
  };

  const adjustPostAmount = () => {
    const width = window.innerWidth;
    let amount = 9;
    if (width < 1024) {
      amount = 8;
    }
    if (width < 767) {
      amount = 4;
    }
    setPerPage(amount);
  };

  useEffect(() => {
    adjustPostAmount();
    window.addEventListener("resize", adjustPostAmount);
    return () => {
      window.removeEventListener("resize", adjustPostAmount);
    };
  }, []);

  useEffect(() => {
    loadData(posts);
  }, [posts, currentPage, perPage]);

  return (
    <>
      <BlogSearch
        setShowSearch={setShowSearch}
        showSearch={showSearch}
        posts={posts}
      />
      <section className="h-full w-full z-20 relative bg-white select-dark">
        <div className="container w-full mx-auto pt-6 md:pb-16 pb-6 lg:px-0 px-4">
          <h1 className="font-semibold text-3xl text-center mb-8">
            Latest Articles
          </h1>
          <div className="w-full flex justify-center items-center h-11 mt-14 mb-16">
            <button className="flex justify-center items-center h-full w-auto py-2.5 px-6 mr-6 rounded-3xl bg-gray-200 text-black font-semibold">
              Announcements
            </button>
            <button className="flex justify-center items-center h-full w-auto py-2.5 px-6 mr-6 rounded-3xl bg-gray-200 text-black font-semibold">
              AMA
            </button>
            <button className="flex justify-center items-center h-full w-auto py-2.5 px-6 mr-6 rounded-3xl bg-gray-200 text-black font-semibold">
              Education
            </button>
            <button className="flex justify-center items-center h-full w-auto py-2.5 px-6 mr-6 rounded-3xl bg-gray-200 text-black font-semibold">
              Partnership
            </button>
            <button className="flex justify-center items-center h-full w-auto py-2.5 px-6 mr-6 rounded-3xl bg-blogcategoryblue text-white font-semibold">
              All
            </button>
            <button onClick={() => openSearch()}>
              <img className="w-5 h-5" src={SearchIcon} />
            </button>
          </div>
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
            containerClassName={
              "relative box-border flex justify-center pl-0 w-full"
            }
            // pageClassName={"relative flex items-center justify-center color-paginationgrey w-9 h-12 transition-colors inactive-link"}
            pageLinkClassName={
              "relative flex items-center justify-center color-paginationgrey w-9 h-12 transition-colors inactive-link"
            }
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
