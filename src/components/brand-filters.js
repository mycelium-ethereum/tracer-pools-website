import React from "react";

const BrandFilters = ({ setCategory }) => {
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
    setCategory(category);
  };

  const CategoryInfo = [
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
      {CategoryInfo.map((category, i) => (
        <button
          className="mr-6 hidden h-full w-auto items-center justify-center rounded-3xl bg-gray-200 py-2.5 px-6 font-semibold text-black transition-colors duration-500 md:flex"
          data-category={category.name}
          onClick={selectCategory}
        >
          {category.text}
        </button>
      ))}
    </div>
  );
};

export default BrandFilters;
