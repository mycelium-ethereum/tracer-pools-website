import React from "react";

const SolidButton = ({ className, children, href, analytics, id }) => {
  return (
    <a
      className={
        className +
        " bg-blue-600 no-underline flex items-center justify-center rounded-lg h-12 w-48 transition-all duration-500 text-white font-normal hover:bg-blue-1000"
      }
      id={id}
      target="_blank"
      href={href}
      data-analytics={analytics}
    >
      {children}
    </a>
  );
};

export default SolidButton;
