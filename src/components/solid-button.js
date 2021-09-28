import React from "react";

const SolidButton = ({ className, children, href }) => {
  return (
    <a
      className={
        className +
        " bg-blue-600 no-underline flex items-center justify-center rounded-lg h-12 w-48 transition-all duration-500 text-white font-normal hover:text-blue-800"
      }
      rel="noreferrer"
      target="_blank"
      href={href}
    >
      {children}
    </a>
  );
};

export default SolidButton;
