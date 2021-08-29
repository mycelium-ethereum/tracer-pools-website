import React from "react";

const SubscribeButton = ({ className, children, linkTo }) => {
  return (
    <a
      className={
        className +
        " tracer-btn.subscribe"
      }
      href={linkTo}
    >
      {children}
      {/* {smallButton && <img src={arrow_blue} alt="Blue Arrow" />} */}
    </a>
  );
};

export default SubscribeButton;
