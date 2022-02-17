import React from "react";

const Container = ({ className, children }) => {
  return (
    <div
      className={`container relative z-10 mx-auto w-full px-[30px] transition-[max-width] duration-300 lg:px-0 xl:pl-2.5 ${
        className ? className : ""
      }`}
    >
      {children}
    </div>
  );
};

export default Container;
