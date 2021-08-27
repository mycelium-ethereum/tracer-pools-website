import React from "react";

import arrow_blue from "/static/img/general/arrow-blue.png";

const Button = ({ children, linkTo, smallButton }) => {
  return (
    <a
      className={smallButton ? "tracer-btn__blue" : "tracer-btn"}
      href={linkTo}
    >
      <span>{children}</span>
      {smallButton && <img src={arrow_blue} alt="Blue Arrow" />}
    </a>
  );
};

export default Button;
