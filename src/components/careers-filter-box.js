import React from "react";

const FilterBox = ({
  onClickAction,
  changeAction,
  open,
  text,
  reference,
  filterData,
  dataType,
}) => {
  const upperCaseFirstLetter = (str) => {
    return str[0].toUpperCase() + str.slice(1).toLowerCase();
  };
  const toggleFilter = () => {
    onClickAction((prev) => !prev);
  };
  const handleChange = (e) => {
    changeAction(e);
  };

  return (
    <div
      className={`relative mt-4 w-full cursor-pointer bg-[#E5E7EB] text-white xl:max-w-[300px] ${
        open ? "z-30" : "z-20"
      }`}
      data-type={dataType}
      onClick={toggleFilter}
      ref={reference}
    >
      <div className="pointer-events-none relative z-10 border-b border-white py-2.5 transition-colors duration-300">
        <span className="select-none">{text}</span>
        <div className="absolute right-0 top-1/2 flex h-full -translate-y-1/2 transform items-center pb-1">
          <img
            src="/static/img/general/arrow-down.svg"
            className={`transform-gpu select-none transition-all duration-300 ${
              open ? "translate-y-1 rotate-180" : ""
            }`}
          />
        </div>
      </div>
      <div
        className={`bg-mycelium-midgreen absolute top-0 -left-4 z-0 flex w-[calc(100%_+_32px)] transform-gpu flex-col overflow-hidden rounded-xl px-4 pt-11 transition-all duration-200 ${
          open
            ? "pointer-events-auto scale-100 opacity-100"
            : "pointer-events-none scale-[0.97] opacity-0"
        }`}
      >
        <span
          className="group relative bg-transparent py-2.5 transition-colors duration-300 hover:text-black"
          data-filter="All"
          data-type={dataType}
          onClick={handleChange}
        >
          <span className="relative z-10">All</span>
          <span className="pointer-events-none absolute -left-4 top-0 z-0 h-full w-[calc(100%+32px)] bg-transparent transition-colors duration-300 group-hover:bg-black" />
        </span>
        {filterData.map((label, i) => (
          <span
            key={i}
            className={`group relative border-t border-white bg-transparent py-2.5 transition-colors duration-300 hover:border-transparent hover:text-black ${
              i === filterData.length - 1 ? "mb-3" : ""
            }`}
            data-filter={label}
            data-type={dataType}
            onClick={handleChange}
          >
            <span className="relative z-10">{label}</span>
            <span className="pointer-events-none absolute -left-4 top-0 z-0 h-full w-[calc(100%_+_32px)] bg-transparent transition-colors duration-300 group-hover:bg-black" />
          </span>
        ))}
      </div>
    </div>
  );
};

export default FilterBox;
