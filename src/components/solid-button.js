import React from "react";

const SolidButton = ({ className, children, href, analytics }) => {
  return (
    <a
      className={
        className +
        " bg-blue-600 no-underline flex items-center justify-center rounded-lg h-12 w-48 transition-all duration-500 text-white font-normal hover:bg-blue-1000"
      }
      
      target="_blank"
      href={href}
      data-analytics={analytics}
    >
      {children}
    </a>
  );
};

export default SolidButton;
