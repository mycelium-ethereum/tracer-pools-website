import React from "react";

const ClearFiltersButton = ({ clearFilters, filtersChanged, matches }) => {
  return (
    <button
      onClick={clearFilters}
      className={`${
        filtersChanged && matches
          ? "pointer-events-auto opacity-100"
          : "pointer-events-none opacity-0"
      } text-mycelium-lightgreen mb-20 mt-5 w-max underline transition-all duration-300 hover:text-white`}
    >
      Clear filters
    </button>
  );
};
export default ClearFiltersButton;
