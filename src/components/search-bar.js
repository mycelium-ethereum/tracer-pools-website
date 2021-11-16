import React, { useEffect, useState } from "react";
import Trie from "./trie";

const SearchBar = ({ postTitles }) => {
  const [prefix, setPrefix] = useState("");
  const [suggestion, setSuggestion] = useState("");
  const myTrie = new Trie();
  const focusSearch = () => {
    document.querySelector(".search-box").focus();
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
    if (e.keyCode === 39) {
      // if right arrow is pressed
      setPrefix(suggestion);
    }
  };
  useEffect(() => {
    if (showSearch) {
      focusSearch();
    }
  }, []);
  return (
    <>
      <input
        className="search-box bg-transparent w-full h-full bg-searchgrey rounded-2xl pl-12 z-0 font-normal"
        placeholder="Search"
        name="search-bar"
        type="text"
        value={prefix}
        onChange={animateSearch}
        onKeyDown={handleKeydown}
      />
      <input
        type="text"
        name="search-bar"
        className="absolute left-0 top-0 bg-transparent w-full h-full rounded-2xl pl-12 font-normal pointer-events-none z-10"
        id="search-hidden"
        value={suggestion}
      />
    </>
  );
};

export default SearchBar;
