import React from "react";

const ErrorText = ({ showError }) => {
  return (
    <span
      className={`text-mycelium-lightgreen ${showError ? "block" : "hidden"}`}
    >
      {/* <span className={`text-mycelium-lightgreen`}> */}
      Error retrieving data from Lever. Please try again later.
    </span>
  );
};

export default ErrorText;
