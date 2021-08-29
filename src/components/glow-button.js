import React from "react";

const GradientButton = ({ className, children, linkTo, outlineButton, glowButton }) => {
  return (
    <a
      className={
        className +
        " tracer-btn glow rounded-lg"
      }
      href={linkTo}
    >
      {children}
      {/* {smallButton && <img src={arrow_blue} alt="Blue Arrow" />} */}
    </a>
  );
};

export default GradientButton;
