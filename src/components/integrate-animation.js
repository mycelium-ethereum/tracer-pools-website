import React from "react";

// Image assets
import Tile from "/static/img/home-page/integrate/tile.svg";
import LayerOne from "/static/img/home-page/integrate/layer-1.svg";
import LayerTwo from "/static/img/home-page/integrate/layer-2.svg";
import LayerThree from "/static/img/home-page/integrate/layer-3-square.svg";
import LayerFour from "/static/img/home-page/integrate/layer-4-arrow.svg";
import IntegrateBG from "/static/img/home-page/integrate/background.svg";

const IntegrateAnimation = () => {
  return (
    <section className="integrate-section flex items-center h-screen">
      <div className="flex container xl mx-auto flex items-center">
        <div className="container xl flex justify-left">
          <div className="w-3/5 h-auto flex flex-col justify-center">
            <small className="text-5xl font-semibold color-blue mb-2">
              Integrate Now
            </small>
            <h1 className="gradient text-6xl font-bold text-white mb-4">
              Strategise &amp; Natively
            </h1>
            <p className="fade-anim opacity-0 transition-all duration-500 text-4xl color-grey font-normal">
              Seamlessly integrate into your proprietary trading interface or
              into a user-facing application.
            </p>
          </div>
        </div>
        <div className="w-2/5 integrate-animation -top-24">
          <img className="integrate-animation__tile" src={Tile} />
          <img className="integrate-animation__layerone" src={LayerOne} />
          <img className="integrate-animation__layertwo" src={LayerTwo} />
          <img className="integrate-animation__layerthree" src={LayerThree} />
          <img className="integrate-animation__layerfour" src={LayerFour} />
          {/* <img className="absolute h-full w-full top-0 right-0 bg-temp" src={IntegrateBG}/> */}
        </div>
      </div>
    </section>
  );
};

export default IntegrateAnimation;
