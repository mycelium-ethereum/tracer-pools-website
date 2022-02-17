import React from "react";

const BrandDownloadButton = ({ className, children, link, blue, gray }) => {
  return (
    <a href={link} download>
      <button
        className={`mx-auto flex h-[43px] w-[274px] items-center justify-center rounded-lg  border-0 font-semibold outline-none transition-colors duration-300 ${
          className ? className : ""
        }
        ${
          blue
            ? "bg-[#1C64F2] text-white hover:bg-tracer-800"
            : "bg-gray-200 text-[#374151] hover:bg-[#1C64F2] hover:text-white"
        }`}
      >
        {children}
      </button>
    </a>
  );
};

export default BrandDownloadButton;
