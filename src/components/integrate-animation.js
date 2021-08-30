import React from "react";

// Image assets
import MobileTile from "/static/img/home-page/integrate/mobile-tile.png";
import Tile from "/static/img/home-page/integrate/tile.svg";
import LayerOne from "/static/img/home-page/integrate/layer-1.svg";
import LayerTwo from "/static/img/home-page/integrate/layer-2.svg";
import LayerThree from "/static/img/home-page/integrate/layer-3-square.svg";
import LayerFour from "/static/img/home-page/integrate/layer-4-arrow.svg";

const IntegrateAnimation = () => {
  return (
    <section className="integrate-section flex items-center lg:h-screen h-auto lg:pb-0 pb-24">
      <div className="flex container xl mx-auto flex items-center xl:px-24 sm:px-12 px-4">
        <div className="container xl flex lg:justify-start lg:flex-row justify-center flex-col">
          <img
            src={MobileTile}
            className="sm:w-3/4 mx-auto w-full lg:hidden block"
          />
          <div className="lg:w-2/4 w-full h-auto flex flex-col justify-center">
            <small className="2xl:text-3xl lg:text-2xl lg:text-left text-center font-bold text-2xl color-blue mb-1">
              Integrate Now
            </small>
            <h1 className="gradient 2xl:text-6xl lg:text-5xl lg:text-left text-center text-3xl font-black text-white mb-4">
              Strategise &amp; Natively
            </h1>
            <p className="fade-anim lg:opacity-0 transition-all duration-500 2xl:text-2xl lg:text-xl lg:text-left text-center text-2xl color-grey font-normal opacity-100">
              Seamlessly integrate into your proprietary trading interface or
              into a user-facing application.
            </p>
          </div>
        </div>
        <div className="w-2/5 integrate-animation 2xl:scale-75 relative 2xl:-right-48 lg:transform lg:scale-50 lg:-right-24 lg:block hidden">
          <img className="integrate-animation__tile" src={Tile} />
          <img className="integrate-animation__layerone" src={LayerOne} />
          <img className="integrate-animation__layertwo" src={LayerTwo} />
          <img className="integrate-animation__layerthree" src={LayerThree} />
          <img className="integrate-animation__layerfour" src={LayerFour} />
        </div>
      </div>
    </section>
  );
};

export default IntegrateAnimation;
