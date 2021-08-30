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
    </a>
  );
};

export default SubscribeButton;
