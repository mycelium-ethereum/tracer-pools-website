import React, { useEffect } from "react";

// Image assets
import Tile from "/static/img/home-page/integrate/tile.svg";
import LayerOne from "/static/img/home-page/integrate/layer-1.svg";
import LayerTwo from "/static/img/home-page/integrate/layer-2.svg";
import LayerThree from "/static/img/home-page/integrate/layer-3-square.svg";
import LayerFour from "/static/img/home-page/integrate/layer-4-arrow.svg";

const IntegrateAnimation = () => {
  const isMobile = () => {
    const width = window.innerWidth;
    return width < 1024;
  };
  const toggleActiveStyles = () => {
    const section = document.querySelector(".integrate-section");
    if (isMobile()) {
      section.classList.add("active");
    }
  };
  useEffect(() => {
    toggleActiveStyles();
    window.addEventListener("resize", function () {
      toggleActiveStyles();
    });
  });
  return (
    <section className="integrate-section flex sm:items-center items-start sm:h-screen h-auto">
      <div className="flex h-full w-full container mx-auto relative flex items-center lg:flex-row lg:pb-0 lg:justify-end justify-center xl:px-0 sm:pb-0 pb-96 flex-col px-4">
        <div
          className="force-flex lg:absolute 2xl:mt-24 xl:left-0 left-4 lg:mt-48 lg:justify-start lg:flex-row left-0 justify-center flex-col mx-auto z-10"
          data-stellar-ratio="1.2"
        >
          <div className="integrate-text xl:w-full lg:w-96 h-auto flex flex-col justify-center">
            <h1 className="2xl:text-6xl lg:text-5xl lg:text-left text-center text-3xl font-bold text-white mb-4">
              Integrate Now
            </h1>
            <p className="fade-anim transition-all duration-500 text-center xl:text-2xl lg:opacity-0 lg:text-xl lg:text-left sm:text-2xl sm:w-auto w-60 text-lg text-white font-normal opacity-100">
              Seamlessly integrate into your proprietary trading interface or
              into a user-facing application.
            </p>
          </div>
        </div>
        <div className="w-2/5 integrate-animation 2xl:scale-75 absolute 2xl:-right-48 transform-gpu 2xl:top-0 xl:top-4 lg:scale-50 lg:-right-24 sm:relative sm:scale-50 sm:-right-64 sm:bottom-24 -right-28 -bottom-64">
          <img className="integrate-animation__tile lg:opacity-0" src={Tile} />
          <img
            className="integrate-animation__layerone lg:opacity-0"
            src={LayerOne}
          />
          <img
            className="integrate-animation__layertwo lg:opacity-0"
            src={LayerTwo}
          />
          <img
            className="integrate-animation__layerthree lg:opacity-0"
            src={LayerThree}
          />
          <img
            className="integrate-animation__layerfour lg:opacity-0"
            src={LayerFour}
          />
        </div>
      </div>
    </section>
  );
};

export default IntegrateAnimation;
