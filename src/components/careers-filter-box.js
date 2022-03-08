import React from "react";
import Dropdown from "../../static/img/general/chevron-down.svg";

const FilterBox = ({
  onClickAction,
  changeAction,
  open,
  text,
  reference,
  filterData,
  listingData,
  dataType,
  filtersChanged,
}) => {
  const toggleFilter = () => {
    onClickAction((prev) => !prev);
  };
  const handleChange = (e) => {
    changeAction(e);
  };

  return (
    <div
      className={`relative mb-2 min-w-[284px] cursor-pointer rounded-lg bg-[#F1F2F4] font-semibold text-black xl:ml-8 xl:mb-0 ${
        open ? "z-30" : "z-20"
      }`}
      data-type={dataType}
      onClick={toggleFilter}
      ref={reference}
    >
      <div className="pointer-events-none relative z-10 py-2.5 pl-6 pr-14 transition-colors duration-300">
        <span className="select-none">{text}</span>
        <div className="absolute right-6 top-1/2 flex h-full -translate-y-1/2 transform items-center">
          <img
            src={Dropdown}
            className={`transform-gpu select-none transition-all duration-300 ${
              open ? "translate-y-1 rotate-180 pt-2" : ""
            }`}
          />
        </div>
      </div>
      <div
        className={`absolute top-0 left-0 z-0 flex w-full transform-gpu flex-col overflow-hidden rounded-lg bg-[#F1F2F4] px-6 pt-11 transition-all duration-200 [box-shadow:0px_4px_15px_rgb(0_0_0_/_15%)] ${
          open
            ? "pointer-events-auto scale-100 opacity-100"
            : "pointer-events-none scale-[0.97] opacity-0"
        }`}
      >
        {filterData.map((label, i) => (
          <button
            key={i}
            className={`relative border-[#C4C4C4] bg-transparent py-2.5 text-left font-semibold transition-colors duration-300 [border-top-width:0.5px] ${
              i === filterData.length - 1 ? "pb-2.5" : ""
            }
            ${
              !listingData.includes(label)
                ? "text-tracer-darkgray"
                : "group hover:border-transparent hover:text-white"
            }`}
            data-filter={label}
            data-type={dataType}
            onClick={handleChange}
            // Disable button if there is current listings do not contain the filter
            disabled={!listingData.includes(label)}
          >
            <span className="pointer-events-none relative z-10 bg-transparent">
              {label}
            </span>
            <span className="pointer-events-none absolute -left-6 top-0 z-0 h-full w-[calc(100%_+_48px)] bg-transparent transition-colors duration-300 group-hover:bg-tracer-1000" />
          </button>
        ))}
      </div>
    </div>
  );
};

export default FilterBox;
