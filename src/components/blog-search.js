import React, { useEffect, useState, useRef } from "react";
import SearchResult from "./blog-search-result";
import CloseIcon from "../../static/img/blog-posts/close.svg";

const BlogSearch = ({ setShowSearch, showSearch, posts }) => {
  const [postResults, setPostResults] = useState([]);
  const searchResults = useRef();
  const searchBox = useRef();
  const MAX_RESULTS = 4;
  const getRecentPosts = () => {
    const postElements = posts
      .slice(0, MAX_RESULTS)
      .map((node, i) => <SearchResult data={node} key={i} />);
    setPostResults(postElements);
  };
  const searchPosts = (e) => {
    const searchTerm = e.target.value.toLowerCase();
    if (searchTerm) {
      const postElements = posts.map((data, i) => {
        const postTitle = data.node.title.toLowerCase();
        const postDesc = data.node.description.toLowerCase();
        if (postTitle.includes(searchTerm) || postDesc.includes(searchTerm)) {
          return <SearchResult data={data} key={i} />;
        }
      });
      setPostResults(postElements);
    } else {
      getRecentPosts();
    }
  };
  const closeSearch = () => {
    enableScroll();
    setShowSearch(false);
  };
  const enableScroll = () => {
    document.documentElement.style.overflow = "unset";
  };
  const focusSearch = () => {
    searchBox.current.focus();
  };
  useEffect(() => {
    if (showSearch) {
      focusSearch();
    }
    searchBox.current.addEventListener("input", searchPosts);
    return () => {
      if (searchBox && searchBox.current) {
        searchBox.current.removeEventListener("input", searchPosts);
      }
      document.documentElement.style.overflow = "unset";
    };
  });
  useEffect(() => {
    getRecentPosts();
  }, [posts]);
  return (
    <>
      <section
        className={
          "fixed h-screen w-full z-50 bg-white select-dark top-0 left-0 transition-all duration-500 " +
          (showSearch
            ? "pointer-events-all opacity-100"
            : "pointer-events-none opacity-0")
        }
      >
        <button
          className="absolute md:top-6 md:right-6 top-3 right-3"
          onClick={() => closeSearch()}
        >
          <img className="w-6 h-6" src={CloseIcon} />
        </button>
        <div className="container max-w-blog mx-auto md:pt-32 pt-14 md:pb-16 pb-6 lg:px-0 px-4">
          <div className="relative flex flex-row-reverse items-center w-full md:h-14 md:mb-11 h-10 mb-8">
            <input
              className="search-box bg-transparent w-full h-full bg-searchgrey rounded-2xl pl-12"
              placeholder="Search"
              ref={searchBox}
            />
            <svg
              width="19"
              height="20"
              viewBox="0 0 19 20"
              fill="none"
              className="absolute left-4 w-5 h-5 transition-all duration-300"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16.625 17.125L11.875 12.375M13.4583 8.41667C13.4583 9.14441 13.315 9.86503 13.0365 10.5374C12.758 11.2097 12.3498 11.8206 11.8352 12.3352C11.3206 12.8498 10.7097 13.258 10.0374 13.5365C9.36503 13.815 8.64441 13.9583 7.91667 13.9583C7.18892 13.9583 6.46831 13.815 5.79596 13.5365C5.12362 13.258 4.51271 12.8498 3.99812 12.3352C3.48353 11.8206 3.07533 11.2097 2.79683 10.5374C2.51834 9.86503 2.375 9.14441 2.375 8.41667C2.375 6.94693 2.95885 5.53738 3.99812 4.49812C5.03738 3.45885 6.44693 2.875 7.91667 2.875C9.38641 2.875 10.796 3.45885 11.8352 4.49812C12.8745 5.53738 13.4583 6.94693 13.4583 8.41667Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div
            className="search-results overflow-y-scroll overflow-x-hidden md:block sm:grid-cols-2 grid grid-cols-1 gap-8 pb-8"
            ref={searchResults}
          >
            {postResults}
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogSearch;
