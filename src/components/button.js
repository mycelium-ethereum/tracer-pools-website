import React from "react";

const Button = ({ className, children, linkTo, outlineButton, glowButton }) => {
  return (
    <a
      className={
        className +
        " tracer-btn " +
        ((!!outlineButton) && " blue mx-auto text-xl h-32 ") +
        ((!!glowButton) && " glow text-2xl h-48 ") +
        " rounded-lg"
      }
      href={linkTo}
    >
      {children}
      {/* {smallButton && <img src={arrow_blue} alt="Blue Arrow" />} */}
    </a>
  );
};

export default Button;
