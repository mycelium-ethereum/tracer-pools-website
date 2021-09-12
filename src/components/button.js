import React from "react";

const Button = ({
  className,
  children,
  linkTo,
  outlineButton,
  glowButton,
  id,
}) => {
  return (
    <a
      className={
        className +
        " tracer-btn rounded-lg h-11 w-48 text-center transition-all duration-500 border-2 border-white"
      }
      href={linkTo}
      id={id}
    >
      {children}
      {/* {smallButton && <img src={arrow_blue} alt="Blue Arrow" />} */}
    </a>
  );
};

export default Button;
