import React, { useEffect } from "react";
import Parallax from "parallax-js";

// Images
import banner from "/static/img/home-page/banner.png";

const Parallax = () => {
  useEffect(() => {
    const scene = document.querySelector(".tile-bg");
    new Parallax(scene);
    // var parallaxInstance = new Parallax(scene);
  });
  return (
    <>
      <div className="absolute top-0 left-0 w-full h-full z-10 tile-bg">
        <img className="w-screen" data-depth="0.1" src={banner} alt="Banner" />
      </div>
      <div className="absolute top-0 left-0 w-full h-full z-0 overflow-hidden bg-darkblue" />
    </>
  );
};

export default Parallax;
