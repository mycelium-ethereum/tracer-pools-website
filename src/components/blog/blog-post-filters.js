import React, { useState } from "react";
import SearchIcon from "../../../static/img/blog-posts/search-large.svg";
import Dropdown from "../../../static/img/general/chevron-down.svg";

const PostFilters = ({ setShowSearch, setCurrentPage, setCategory }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [dropdownText, setDropdownText] = useState("");

  const selectCategory = (e) => {
    const category = e.target.dataset.category;
    const buttons = document.querySelectorAll("button[data-category]");
    buttons.forEach((e) => {
      if (category !== e.dataset.category) {
        e.classList.remove("active");
      } else {
        e.classList.add("active");
      }
    });
    setTimeout(function () {
      setDropdownOpen(false);
      setDropdownText(category.charAt(0).toUpperCase() + category.slice(1));
    }, 500);
    setCategory(category);
    setCurrentPage(0);
  };
  const focusSearch = () => {
    document.querySelector(".search-box").focus();
  };

  const openSearch = () => {
    setShowSearch(true);
    focusSearch();
    disableScroll();
  };

  const disableScroll = () => {
    document.documentElement.style.overflowY = "hidden";
    document.documentElement.style.overflowX = "hidden";
    document.body.style.overflowY = "hidden";
    document.body.style.overflowX = "hidden";
  };

  const CategoryInfo = [
    {
      name: "announcements",
      text: "Announcements",
    },
    // {
    //   name: "ama",
    //   text: "AMA",
    // },
    {
      name: "education",
      text: "Education",
    },
    {
      name: "partnerships",
      text: "Partnerships",
    },
    {
      name: "all",
      text: "All",
    },
  ];

  return (
    <div
      className="relative z-10 mt-6 mb-8 flex h-11 w-full items-center md:mt-14 md:mb-16 md:justify-center"
      id="top"
    >
      {CategoryInfo.map((category, i) => (
        <button
          className={
            "mr-6 hidden h-full w-auto items-center justify-center rounded-3xl bg-gray-200 py-2.5 px-6 font-semibold text-black transition-colors duration-500 md:flex " +
            (i === CategoryInfo.length - 1 ? "active" : "")
          }
          data-category={category.name}
          onClick={selectCategory}
        >
          {category.text}
        </button>
      ))}
      <button
        className="relative mr-4 inline-flex h-11 w-auto items-center justify-start rounded-xl bg-gray-50 px-8 pl-4 text-base font-semibold md:hidden"
        onClick={() => {
          setDropdownOpen((wasOpen) => !wasOpen);
        }}
      >
        {dropdownText.length ? dropdownText : "Categories"}
        <img
          className="absolute top-1/2 right-2 h-auto w-4 -translate-y-1/2 transform"
          src={Dropdown}
          alt="Dropdown toggle"
        />
      </button>
      <div
        className={
          "absolute left-0 top-12 overflow-hidden rounded-md bg-white shadow transition-opacity duration-300 md:rounded-none md:bg-transparent md:p-0 md:shadow-none " +
          (dropdownOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0")
        }
      >
        <ul className="md:mt-2">
          {CategoryInfo.map((category, i) => (
            <li>
              <button
                data-category={category.name}
                onClick={selectCategory}
                className={`category-dropdown w-full py-1 px-4 text-left text-black transition-colors duration-300 ${
                  i === CategoryInfo.length - 1 ? "active pb-1" : ""
                }`}
              >
                {category.text}
              </button>
            </li>
          ))}
        </ul>
      </div>
      <button onClick={() => openSearch()}>
        <img className="h-5 w-5" src={SearchIcon} alt={"Search Icon"} />
      </button>
    </div>
  );
};

export default PostFilters;
