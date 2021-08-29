import React,{ useEffect } from "react";
import Parallax from "parallax-js";

// Images
import banner from "/static/img/home-page/banner.png";

const WebGLBackground = () => {
  useEffect(() => {
    var scene = document.querySelector(".tile-bg");
    var parallaxInstance = new Parallax(scene);
  });
  return (
    <>
      <div className="absolute top-0 left-0 w-full h-full z-0 overflow-hidden">
        <img data-depth="0.1" src={banner} className="tile-bg" alt="Banner" />
      </div>
      <div className="absolute top-0 left-0 w-full h-full z-0 overflow-hidden bg-darkblue" />
    </>
  );
};

export default WebGLBackground;
