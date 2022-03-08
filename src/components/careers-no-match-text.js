import React from "react";

const NoMatchText = ({ clearFilters, matches }) => {
  return (
    <div className={`${!matches ? "block" : "hidden"}`}>
      <h1 className="mb-8">No open positions match the selected filters.</h1>
      <button
        onClick={clearFilters}
        className="text-mycelium-lightgreen underline transition-colors duration-300 hover:text-white"
      >
        Clear all filters
      </button>
    </div>
  );
};
export default NoMatchText;
