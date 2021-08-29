import React from "react";

const Button = ({ className, children, linkTo, outlineButton, glowButton }) => {
  return (
    <a
      className={
        className +
        " tracer-btn " +
        ((!!outlineButton) && " blue mx-auto text-xl h-32 ") +
        " rounded-2xl"
      }
      href={linkTo}
    >
      {children}
      {/* {smallButton && <img src={arrow_blue} alt="Blue Arrow" />} */}
    </a>
  );
};

export default Button;
