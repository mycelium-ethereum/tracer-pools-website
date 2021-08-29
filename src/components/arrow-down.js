import React from "react";
import arrowDown from "/static/img/general/arrow-down.svg";

const ArrowDown = ({ linkTo }) => {
  return (
    <a href={linkTo} className="absolute bottom-32 2xl:right-48 xl:right-30 lg:right-24 right-16 z-10">
      <img src={arrowDown} alt="Down Arrow" />
    </a>
  );
};

export default ArrowDown;
