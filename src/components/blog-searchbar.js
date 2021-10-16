import React, { useState } from "react";
import Trie from "./trie";

const SearchBar = ({ postTitles, searchResults, setSearchTerm }) => {
  const [prefix, setPrefix] = useState("");
  const [suggestion, setSuggestion] = useState("");
  const myTrie = new Trie();
  const animateSearch = (event) => {
    searchResults.current.classList.add("opacity-0");
    onChange(event);
    setTimeout(() => {
      setSearchTerm(event.target.value);
      searchResults.current.classList.remove("opacity-0");
    }, 500);
  };
  (async () => {
    let words = postTitles.words;
    for (let i = 0; i < words.length; i++) {
      const word = words[i];
      myTrie.insert(word);
    }
  })();
  const onChange = (e) => {
    let value = e.target.value;
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
  const handleKeydown = (e) => {
    if (e.keyCode === 39 || e.keyCode === 9) {
      e.preventDefault();
      // if right arrow or tab is pressed
      setPrefix(suggestion);
    }
  };
  return (
    <>
      <input
        className="search-box bg-transparent w-full h-full bg-searchgrey rounded-2xl pl-12 z-0 font-normal text-gray-800"
        placeholder="Search"
        name="search-bar"
        type="text"
        onChange={animateSearch}
        onKeyDown={handleKeydown}
        value={prefix}
      />
      <input
        type="text"
        name="search-bar"
        className="absolute top-0 md:left-0 left-2 bg-transparent w-full h-full rounded-2xl pl-12 font-normal pointer-events-none z-10 opacity-40"
        value={suggestion}
      />
    </>
  );
};

export default SearchBar;
