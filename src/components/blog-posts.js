/* eslint-disable */
import React, { useEffect, useState, useRef } from "react";
import { StaticQuery, graphql } from "gatsby";
import ReactPaginate from "react-paginate";
import PostLink from "./blog-post-link";
import BlogSearch from "./blog-search";
import SearchIcon from "../../static/img/blog-posts/search-large.svg";
import Dropdown from "../../static/img/general/chevron-down.svg";

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
  const [categoryDropdownOpen, setCategoryDropdownOpen] = useState(false);

  const postContainer = useRef();
  const offset = currentPage * perPage;

  const loadData = (data) => {
    const curPosts = data
      .slice(offset, offset + perPage)
      .map((node, i) => <PostLink data={node} key={i} />);
    setCurrentPosts(curPosts);
    setPageCount(Math.ceil(data.length / perPage));
  };

  const handlePageClick = ({ selected: selectedPage, e }) => {
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
    }, 1200);
  };

  const sortByDate = (a, b) => {
    return (
      new Date(b.node.publish_date).getTime() -
      new Date(a.node.publish_date).getTime()
    );
  };

  const disableScroll = () => {
    document.documentElement.style.overflow = "hidden";
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

  const selectCategory = (e) => {
    const category = e.target.dataset.category;
    const buttons = document.querySelectorAll("button[data-category]");
    buttons.forEach((e) => {
      if (category != e.dataset.category) {
        e.classList.remove("active");
      } else {
        e.classList.add("active");
      }
    });
    setTimeout(function () {
      setCategoryDropdownOpen(false);
    }, 500);
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
          <h1 className="font-semibold text-3xl text-center mb-8" id="top">
            Latest Articles
          </h1>
          <div className="relative flex md:justify-center items-center w-full h-11 mt-14 mb-16 z-10">
            <button
              className="justify-center items-center h-full w-auto transition-colors duration-500 py-2.5 px-6 mr-6 rounded-3xl bg-gray-200 text-black font-semibold md:flex hidden"
              data-category="announcements"
              onClick={selectCategory}
            >
              Announcements
            </button>
            <button
              className="justify-center items-center h-full w-auto transition-colors duration-500 py-2.5 px-6 mr-6 rounded-3xl bg-gray-200 text-black font-semibold md:flex hidden"
              data-category="ama"
              onClick={selectCategory}
            >
              AMA
            </button>
            <button
              className="justify-center items-center h-full w-auto transition-colors duration-500 py-2.5 px-6 mr-6 rounded-3xl bg-gray-200 text-black font-semibold md:flex hidden"
              data-category="education"
              onClick={selectCategory}
            >
              Education
            </button>
            <button
              className="justify-center items-center h-full w-auto transition-colors duration-500 py-2.5 px-6 mr-6 rounded-3xl bg-gray-200 text-black font-semibold md:flex hidden"
              data-category="partnership"
              onClick={selectCategory}
            >
              Partnership
            </button>
            <button
              className="justify-center items-center h-full w-auto transition-colors duration-500 py-2.5 px-6 mr-6 rounded-3xl bg-gray-200 text-black font-semibold md:flex hidden active"
              data-category="all"
              onClick={selectCategory}
            >
              All
            </button>
            <button
              className="relative md:hidden inline-flex mr-4 justify-start items-center text-base font-semibold w-32 h-11 rounded-xl bg-gray-50 pl-4"
              onClick={() => {
                setCategoryDropdownOpen((wasOpen) => !wasOpen);
              }}
            >
              Categories
              <img
                className="absolute top-1/2 transform -translate-y-1/2 right-2 w-4 h-auto"
                src={Dropdown}
                alt="Dropdown toggle"
              />
            </button>
            <div
              className={
                "absolute left-0 top-12 md:rounded-none md:p-0 md:shadow-none shadow p-4 rounded-xl md:bg-transparent bg-white transition-opacity duration-500 " +
                (categoryDropdownOpen
                  ? "opacity-100 pointer-events-auto"
                  : "opacity-0 pointer-events-none")
              }
            >
              <span className="text-3xl font-semibold md:block hidden">
                Protocol
              </span>
              <ul className="md:mt-2 md:pl-4">
                <li className="mb-2">
                  <button
                    data-category="announcements"
                    onClick={selectCategory}
                    className="category-dropdown transition-colors duration-500 text-gray-400"
                  >
                    Announcements
                  </button>
                </li>
                <li className="mb-2">
                  <button
                    data-category="ama"
                    onClick={selectCategory}
                    className="category-dropdown transition-colors duration-500 text-gray-400"
                  >
                    AMA
                  </button>
                </li>
                <li className="mb-2">
                  <button
                    data-category="education"
                    onClick={selectCategory}
                    className="category-dropdown transition-colors duration-500 text-gray-400"
                  >
                    Education
                  </button>
                </li>
                <li className="mb-2">
                  <button
                    data-category="partnership"
                    onClick={selectCategory}
                    className="category-dropdown transition-colors duration-500 text-gray-400"
                  >
                    Partnership
                  </button>
                </li>
                <li className="mb-2">
                  <button
                    data-category="all"
                    onClick={selectCategory}
                    className="category-dropdown transition-colors duration-500 text-gray-400 active"
                  >
                    All
                  </button>
                </li>
              </ul>
            </div>
            <button onClick={() => openSearch()}>
              <img className="w-5 h-5" src={SearchIcon} />
            </button>
          </div>

          <div
            ref={postContainer}
            className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8 transition-opacity duration-500"
          >
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
            pageRangeDisplayed={2}
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
