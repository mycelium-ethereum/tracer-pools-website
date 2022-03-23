import React, { useState, useRef } from "react";
import Trie from "../trie";

const SearchBar = ({ postTitles, searchResults, setSearchTerm }) => {
  const [prefix, setPrefix] = useState("");
  const [suggestion, setSuggestion] = useState("");
  const searchBar = useRef();
  const myTrie = new Trie();
  const animateSearch = () => {
    let value = searchBar.current.value;
    searchResults.current.classList.add("opacity-0");
    onChange(value);
    setTimeout(() => {
      setSearchTerm(value.toLowerCase());
    }, 500);
    setTimeout(() => {
      searchResults.current.classList.remove("opacity-0");
    }, 700);
  };
  (async () => {
    let words = postTitles.words;
    for (let i = 0; i < words.length; i++) {
      const word = words[i];
      myTrie.insert(word);
    }
  })();
  const onChange = (value) => {
    setPrefix(value);
    let words = value.split(" ");
    let trie_prefix = words[words.length - 1].toLowerCase();
    let found_words = myTrie.find(trie_prefix).sort((a, b) => {
      return a.length - b.length;
    });
    let first_word = found_words[0];
    if (
      found_words.length !== 0 &&
      value !== "" &&
      value[value.length - 1] !== " "
    ) {
      if (first_word != null) {
        let remainder = first_word.slice(trie_prefix.length);
        setSuggestion(value + remainder);
      }
    } else {
      setSuggestion(value);
    }
  };
  const unFocusSearch = () => {
    searchBar.current.blur();
  };
  const handleKeydown = (e) => {
    // If right arrow or tab is pressed
    if (e.keyCode === 39 || e.keyCode === 9) {
      e.preventDefault();
      setPrefix(suggestion);
    }
    // If enter key pressed
    if (e.keyCode === 13) {
      unFocusSearch();
    }
  };
  return (
    <>
      <input
        className="search-box bg-searchgrey z-0 h-full w-full rounded-2xl bg-transparent pl-11 font-normal text-gray-800 md:pl-14"
        placeholder="Search"
        name="search-bar"
        ref={searchBar}
        type="text"
        onChange={animateSearch}
        onKeyDown={handleKeydown}
        value={prefix}
      />
      <input
        type="text"
        name="search-bar"
        className="pointer-events-none absolute top-0 left-0 z-10 h-full w-full rounded-2xl bg-transparent pl-11 font-normal opacity-40 md:left-8 md:pl-14"
        value={suggestion}
      />
      <svg
        width="19"
        height="20"
        viewBox="0 0 19 20"
        fill="none"
        className="absolute left-4 h-5 w-5 transition-all duration-300 md:left-14"
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
    </>
  );
};

export default SearchBar;
