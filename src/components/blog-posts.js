/* eslint-disable */
import React, { useEffect, useState, useRef } from "react";
import { StaticQuery, graphql } from "gatsby";
import ReactPaginate from "react-paginate";
import PostLink from "./blog-post-link";
import BlogSearch from "./blog-search";
import PostFilters from "./blog-post-filters";

const query = graphql`
  query TracerBlogs {
    allStrapiTracerBlogs {
      edges {
        node {
          id
          title
          description
          category
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
  const [category, setCategory] = useState("all");
  const [showSearch, setShowSearch] = useState(false);
  const [perPage, setPerPage] = useState(9);
  const postContainer = useRef();
  const offset = currentPage * perPage;
  const postTitles = {
    words: [],
  };

  const loadData = () => {
    let curPosts = [];
    const postData = [];
    if (category != "all") {
      posts.map((data, i) => {
        const postCategory = data.node.category;
        if (!!postCategory && postCategory === category) {
          postData.push(data);
        }
      });
      postData
        .slice(offset, offset + perPage)
        .map((data, i) => curPosts.push(<PostLink data={data} key={i} />));
    } else {
      posts
        .slice(offset, offset + perPage)
        .map((data, i) => curPosts.push(<PostLink data={data} key={i} />));
    }
    postContainer.current.classList.add("opacity-0");
    setTimeout(() => {
      setCurrentPosts(postData ? curPosts : posts);
      setPageCount(
        Math.ceil((postData ? postData.length : posts.length) / perPage)
      );
    }, 600);
    setTimeout(() => {
      postContainer.current.classList.remove("opacity-0");
    }, 800);
  };

  const handlePageClick = ({ selected: selectedPage }) => {
    // Scroll to top of posts
    document.getElementById("top").scrollIntoView({
      behavior: "smooth",
    });
    setTimeout(function () {
      postContainer.current.classList.add("opacity-0");
    }, 600);
    setTimeout(function () {
      setCurrentPage(selectedPage);
    }, 1100);
    setTimeout(function () {
      postContainer.current.classList.remove("opacity-0");
    }, 1400);
  };

  const sortByDate = (a, b) => {
    return (
      new Date(b.node.publish_date).getTime() -
      new Date(a.node.publish_date).getTime()
    );
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

  const listenEscapeKey = (e) => {
    const key = e.which || e.keyCode;
    if (key == 27) {
      setShowSearch(false);
    }
  };

  useEffect(() => {
    adjustPostAmount();
    window.addEventListener("resize", adjustPostAmount);
    document.addEventListener("keyup", listenEscapeKey);
    return () => {
      window.removeEventListener("resize", adjustPostAmount);
      document.removeEventListener("keyup", listenEscapeKey);
    };
  }, []);

  useEffect(() => {
    loadData();
  }, [posts, currentPage, perPage, category]);

  return (
    <>
      <BlogSearch
        setShowSearch={setShowSearch}
        showSearch={showSearch}
        posts={posts}
        postTitles={postTitles}
      />
      <section className="h-full w-full z-20 relative bg-white select-dark">
        <div className="container w-full mx-auto pt-6 md:pb-16 pb-6 lg:px-0 sm:px-4 pl-4 pr-11">
          <h1 className="font-semibold text-3xl text-center mb-8 md:block hidden">
            Latest Articles
          </h1>
          <PostFilters
            setShowSearch={setShowSearch}
            setCategory={setCategory}
          />
          <div
            ref={postContainer}
            className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8 transition-opacity duration-500"
          >
            <StaticQuery
              query={query}
              render={(data) => {
                setPosts(
                  data.allStrapiTracerBlogs.edges.sort((a, b) =>
                    sortByDate(a, b)
                  )
                );
                data.allStrapiTracerBlogs.edges.map((data) => {
                  const splitTitle = data.node.title
                    .replace("-", " ")
                    .split(" ");
                  // Add words as they were, with uppercase letters
                  for (let i = 0; i < splitTitle.length; i++) {
                    postTitles.words.push(splitTitle[i]);
                  }
                  // Convert the words to lowercase as well
                  for (let i = 0; i < splitTitle.length; i++) {
                    postTitles.words.push(splitTitle[i].toLowerCase());
                  }
                });
              }}
            />
            {currentPosts}
          </div>
          <hr className="mt-16 border-paginationrulegrey" />
          <ReactPaginate
            previousLabel={"Previous"}
            nextLabel={"Next"}
            pageCount={pageCount}
            onPageChange={handlePageClick}
            pageRangeDisplayed={1}
            breakLabel={"..."}
            breakClassName={"break"}
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
            // hrefBuilder={() => {
            //   return "#top";
            // }}
          />
        </div>
      </section>
    </>
  );
};

export default BlogPosts;
