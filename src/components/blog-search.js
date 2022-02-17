import React, { useEffect, useState, useRef } from "react";
import SearchResult from "./blog-search-result";
import SearchBar from "./blog-searchbar";
import CloseIcon from "../../static/img/blog-posts/close.svg";
import Container from "../components/container";

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
    if (key === 27) {
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
          "select-dark fixed top-0 left-0 z-50 h-screen w-full bg-white transition-opacity duration-500 " +
          (showSearch
            ? "pointer-events-all opacity-100"
            : "pointer-events-none opacity-0")
        }
      >
        <button
          className="absolute top-3 right-6 md:top-6"
          onClick={() => closeSearch()}
        >
          <img className="h-6 w-6" src={CloseIcon} alt={"Close Icon"} />
        </button>
        <Container>
          <div className="max-w-blog mx-auto pt-14 pb-6 md:pt-32 md:pb-16">
            <div className="relative mb-8 flex h-10 w-full flex-row-reverse items-center md:mb-11 md:h-14 md:px-8">
              <SearchBar
                postTitles={postTitles}
                searchResults={searchResults}
                setSearchTerm={setSearchTerm}
              />
            </div>
            <div className="overflow-y-hidden rounded-tl-2xl rounded-tr-2xl md:rounded-none">
              <div
                className="search-results grid grid-cols-1 gap-8 overflow-x-hidden overflow-y-scroll pb-8 transition-opacity duration-500 sm:grid-cols-2 md:block md:px-8"
                ref={searchResults}
              >
                {postResults}
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default BlogSearch;
