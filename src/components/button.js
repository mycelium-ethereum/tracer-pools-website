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
        " tracer-btn rounded-lg"
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
