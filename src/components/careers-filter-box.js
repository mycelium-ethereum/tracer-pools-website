import React from "react";
import Dropdown from "../../static/img/general/chevron-down.svg";

const FilterBox = ({
  onClickAction,
  changeAction,
  open,
  text,
  reference,
  filterData,
  dataType,
}) => {
  const toggleFilter = () => {
    onClickAction((prev) => !prev);
  };
  const handleChange = (e) => {
    changeAction(e);
  };

  return (
    <div
      className={`relative ml-8 mb-2 w-[284px] cursor-pointer rounded-lg bg-[#F1F2F4] font-semibold text-black lg:mb-0 ${
        open ? "z-30" : "z-20"
      }`}
      data-type={dataType}
      onClick={toggleFilter}
      ref={reference}
    >
      <div className="pointer-events-none relative z-10 border-b border-white py-2.5 pl-6 pr-14 transition-colors duration-300">
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
        className={`absolute top-0 left-0 z-0 flex w-full transform-gpu flex-col overflow-hidden rounded-lg bg-white px-6 pt-11 drop-shadow-lg transition-all duration-200 ${
          open
            ? "pointer-events-auto scale-100 opacity-100"
            : "pointer-events-none scale-[0.97] opacity-0"
        }`}
      >
        {filterData.map((label, i) => (
          <span
            key={i}
            className={`group relative border-[#C4C4C4] bg-transparent py-2.5 transition-colors duration-300 [border-top-width:0.5px] hover:border-transparent hover:text-white ${
              i === filterData.length - 1 ? "pb-2.5" : ""
            }`}
            data-filter={label}
            data-type={dataType}
            onClick={handleChange}
          >
            <span className="pointer-events-none relative z-10 bg-transparent">
              {label}
            </span>
            <span className="pointer-events-none absolute -left-6 top-0 z-0 h-full w-[calc(100%_+_48px)] bg-transparent transition-colors duration-300 group-hover:bg-tracer-1000" />
          </span>
        ))}
      </div>
    </div>
  );
};

export default FilterBox;