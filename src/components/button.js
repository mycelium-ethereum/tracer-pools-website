import React from "react";

const Button = ({ className, children, href, id, analytics }) => {
  return (
    <a
      className={
        className +
        " flex items-center justify-center rounded-lg h-12 w-48 transition-all duration-500 border-2 border-white text-white bg-white bg-opacity-10 mx-auto text-normal font-normal hover:bg-opacity-100 hover:text-blue-400"
      }
      href={href}
      id={id}
      data-analytics={analytics}
      target="_blank"
    >
      {children}
    </a>
  );
};

export default Button;
