import React from "react";
import arrowDown from "/static/img/general/arrow-down.svg";

const ArrowDown = ({ linkTo, className }) => {
  return (
    <a href={linkTo} className={className}>
      <img src={arrowDown} alt="Down Arrow" />
    </a>
  );
};

export default ArrowDown;
