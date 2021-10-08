import React, { useEffect, useRef } from "react";

const Scripts = () => {
  const scriptDiv = useRef();
  useEffect(() => {
    const scripts = [
      "https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.4/jquery.min.js",
      "https://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.8/ScrollMagic.min.js",
      "https://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.8/plugins/animation.gsap.min.js",
      "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.3.3/gsap.min.js",
      "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.3.3/ScrollTrigger.min.js",
      "https://cdnjs.cloudflare.com/ajax/libs/stellar.js/0.6.1/jquery.stellar.min.js",
      "/js/script.js",
      "/js/plausible-track.js",
    ];

    scripts.forEach(function (value) {
      const script = document.createElement("script");
      script.async = false;
      script.referrerPolicy = "no-referrer";
      script.crossOrigin = "anonymous";
      script.src = value;
      scriptDiv.current.appendChild(script);
    });

    // Create plausible script tag
    const plausible = "/js/redirect.js";
    const plausibleScript = document.createElement("script");
    plausibleScript.async = false;
    plausibleScript.defer = true;
    plausibleScript.src = plausible;
    plausibleScript.dataDomain = "tracer.finance";
    scriptDiv.current.appendChild(plausibleScript);
  });
  return (
    <div className="scripts" ref={scriptDiv}>
      {/* Scripts are inserted here */}
    </div>
  );
};

export default Scripts;
