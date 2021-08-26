import React, { useEffect } from "react";
import Parallax from "parallax-js";

// Images
import banner from "/static/img/home-page/banner.png";

const WebGLBackground = () => {
  useEffect(() => {
    var scene = document.querySelector(".tile-bg");
    var parallaxInstance = new Parallax(scene);
  });
  return (
    // <canvas></canvas>
    <>
      <div className="tile-bg">
        <img data-depth="0.1" src={banner} alt="Banner" />
      </div>
      <div className="tile-bg__overlay"></div>
    </>
  );
};

export default WebGLBackground;
