import React from "react";

const ClearFiltersButton = ({ clearFilters, filtersChanged }) => {
  return (
    <button
      onClick={clearFilters}
      className={`${
        filtersChanged
          ? "pointer-events-auto opacity-100"
          : "pointer-events-none opacity-0"
      } mx-auto mb-12 mt-5 block w-max font-semibold text-black underline transition-all duration-300 hover:text-tracer-800`}
    >
      Clear filters
    </button>
  );
};
export default ClearFiltersButton;
