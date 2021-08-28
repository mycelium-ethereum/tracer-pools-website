import React from "react";

import arrow_blue from "/static/img/general/arrow-blue.png";

const Button = ({ className, children, linkTo, outlineButton }) => {
  return (
    <a
      className={
        className +
        (outlineButton ? " tracer-btn__blue" : " tracer-btn") +
        " mx-auto rounded-lg"
      }
      href={linkTo}
    >
      {children}
      {/* {smallButton && <img src={arrow_blue} alt="Blue Arrow" />} */}
    </a>
  );
};

export default Button;
