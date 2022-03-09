import React from "react";

const ErrorText = ({ showError }) => {
  return (
    <span className={`text-tracer-800 ${showError ? "block" : "hidden"}`}>
      Error retrieving data from Lever. Please try again later.
    </span>
  );
};

export default ErrorText;
