import React, { useState } from "react";
import SearchIcon from "../../static/img/blog-posts/search-large.svg";
import Dropdown from "../../static/img/general/chevron-down.svg";

const PostFilters = ({ setShowSearch, setCategory }) => {
  const [categoryDropdownOpen, setCategoryDropdownOpen] = useState(false);

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
    setCategory(category);
  };

  const openSearch = () => {
    setShowSearch(true);
    disableScroll();
  };

  const disableScroll = () => {
    document.documentElement.style.overflow = "hidden";
    document.body.style.overflow = "hidden";
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
      className="relative flex md:justify-center items-center w-full h-11 md:mt-14 md:mb-16 mt-6 mb-8 z-10"
      id="top"
    >
      {CategoryInfo.map((category, i) => (
        <button
          className={
            "justify-center items-center h-full w-auto transition-colors duration-500 py-2.5 px-6 mr-6 rounded-3xl bg-gray-200 text-black font-semibold md:flex hidden " +
            (i === CategoryInfo.length - 1 ? "active" : "")
          }
          data-category={category.name}
          onClick={selectCategory}
        >
          {category.text}
        </button>
      ))}
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
        <span className="text-3xl font-semibold md:block hidden">Protocol</span>
        <ul className="md:mt-2 md:pl-4">
          {CategoryInfo.map((category, i) => (
            <li className="mb-2">
              <button
                data-category={category.name}
                onClick={selectCategory}
                className={`category-dropdown transition-colors duration-500 text-gray-400 ${
                  i === CategoryInfo.length - 1 ? "active" : ""
                }`}
              >
                {category.text}
              </button>
            </li>
          ))}
        </ul>
      </div>
      <button onClick={() => openSearch()}>
        <img className="w-5 h-5" src={SearchIcon} />
      </button>
    </div>
  );
};

export default PostFilters;
