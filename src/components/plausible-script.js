import React, { useEffect } from "react";

const Plausible = () => {
  let plausibleScript = document.createElement("script");
  useEffect(() => {
    const plausible = "https://plausible.io/js/plausible.js";
    // Create plausible script tag
    plausibleScript.async = false;
    plausibleScript.defer = true;
    plausibleScript.src = plausible;
    plausibleScript.dataDomain = "tracer.finance";
  });
  return <>{console.log(plausibleScript)}</>;
};

export default Plausible;
