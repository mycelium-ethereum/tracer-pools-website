import React, { useEffect, useState, useRef } from "react";
import SearchResult from "./blog-search-result";
import SearchBar from "./blog-searchbar";
import CloseIcon from "../../static/img/blog-posts/close.svg";

const BlogSearch = ({ setShowSearch, showSearch, posts, postTitles }) => {
  const [postResults, setPostResults] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const searchResults = useRef();
  const MAX_RESULTS = 4;
  const getRecentPosts = () => {
    const postElements = posts
      .slice(0, MAX_RESULTS)
      .map((node, i) => <SearchResult data={node} key={i} />);
    setPostResults(postElements);
  };
  const searchPosts = () => {
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
    document.documentElement.style.overflowY = "unset";
    document.documentElement.style.overflowX = "hidden";
    document.body.style.overflowY = "unset";
    document.body.style.overflowX = "hidden";
  };
  const focusSearch = () => {
    document.querySelector(".search-box").focus();
  };
  const listenForEscape = (e) => {
    const key = e.which || e.keyCode;
    if (key == 27) {
      setShowSearch(false);
      enableScroll();
    }
  };
  useEffect(() => {
    if (showSearch) {
      focusSearch();
    }
    document.addEventListener("keyup", listenForEscape);
    return () => {
      document.removeEventListener("keyup", listenForEscape);
    };
  }, []);
  useEffect(() => {
    searchPosts();
  }, [searchTerm]);
  useEffect(() => {
    getRecentPosts();
    return () => {
      enableScroll();
    };
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
          className="absolute md:top-6 top-3 right-6"
          onClick={() => closeSearch()}
        >
          <img className="w-6 h-6" src={CloseIcon} />
        </button>
        <div className="container max-w-blog mx-auto md:pt-32 pt-14 md:pb-16 pb-6 lg:px-0 px-4">
          <div className="relative flex flex-row-reverse items-center w-full md:h-14 md:mb-11 h-10 mb-8 md:px-8">
            <SearchBar
              postTitles={postTitles}
              searchResults={searchResults}
              setSearchTerm={setSearchTerm}
            />
          </div>
          <div className="overflow-y-hidden md:rounded-none rounded-tl-2xl rounded-tr-2xl">
            <div
              className="search-results overflow-y-scroll overflow-x-hidden transition-opacity duration-500 md:block sm:grid-cols-2 grid grid-cols-1 gap-8 pb-8 md:px-8"
              ref={searchResults}
            >
              {postResults}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogSearch;
