import React, { Component } from "react";

class Scripts extends Component {
  componentDidMount() {
    const scripts = [
      "https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.4/jquery.min.js",
      "https://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.8/ScrollMagic.min.js",
      "https://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.8/plugins/animation.gsap.min.js",
      "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.3.3/gsap.min.js",
      "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.3.3/ScrollTrigger.min.js",
      "https://cdnjs.cloudflare.com/ajax/libs/stellar.js/0.6.1/jquery.stellar.min.js",
      // "/tracer-pools-website/js/script.js",
      "/js/script.js",
    ];

    const div = this.div;
    scripts.forEach(function (value, index, array) {
      const script = document.createElement("script");
      script.async = false;
      script.referrerPolicy = "no-referrer";
      script.crossOrigin = "anonymous";
      script.src = value;
      div.appendChild(script);
    });
  }
  render() {
    return (
      <div className="scripts" ref={(el) => (this.div = el)}>
        {/* Scripts are inserted here */}
      </div>
    );
  }
}

export default Scripts;
