import React, { useState } from "react";
import Dropdown from "../../static/img/general/chevron-down.svg";

const BrandFilters = ({ setCategory }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [dropdownText, setDropdownText] = useState("");
  const selectCategory = (e) => {
    let category = e.target.dataset.category;
    const buttons = document.querySelectorAll("button[data-category]");
    buttons.forEach((e) => {
      if (category !== e.dataset.category) {
        e.classList.remove("active");
      } else if (
        category === e.dataset.category &&
        e.classList.contains("active")
      ) {
        e.classList.remove("active");
        category = "all";
      } else {
        e.classList.add("active");
      }
    });
    setDropdownOpen(false);
    setDropdownText(category.charAt(0).toUpperCase() + category.slice(1));
    setCategory(category);
  };

  const CategoryInfo = [
    {
      name: "all",
      text: "All",
    },
    {
      name: "logos",
      text: "Logos",
    },
    {
      name: "colours",
      text: "Colours",
    },
    {
      name: "graphics",
      text: "Support Graphics",
    },
    {
      name: "typography",
      text: "Typography",
    },
  ];

  return (
    <div className="relative z-10 mb-8 flex w-full items-center pt-12 md:mt-12 md:mb-14 md:justify-center">
      {CategoryInfo.slice(1, 5).map((category, i) => (
        <button
          className={`hidden h-full w-auto items-center justify-center rounded-3xl bg-gray-200 py-2.5 px-6 font-semibold text-black transition-colors duration-500 md:flex ${
            i === CategoryInfo.length - 1 ? "mr-0" : "mr-6"
          }`}
          data-category={category.name}
          onClick={selectCategory}
        >
          {category.text}
        </button>
      ))}
      <div className="flex items-center">
        <span className="mr-7 block text-[#828790] md:hidden">Jump to</span>
        <div className="relative">
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
              "absolute left-0 top-12 w-max overflow-hidden rounded-md bg-white shadow transition-opacity duration-300 md:hidden md:rounded-none md:bg-transparent md:p-0 md:shadow-none" +
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
                      i === CategoryInfo.length - 1 ? "pb-1" : ""
                    }`}
                  >
                    {category.text}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandFilters;
