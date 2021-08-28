import React from "react";

// Image assets
import ClearTile from "/static/img/home-page/steps/tile.svg";
import BaseTile from "/static/img/home-page/steps/base.svg";
import LayerTwo from "/static/img/home-page/steps/layer-2.svg";
import LayerThree from "/static/img/home-page/steps/layer-3.svg";
import LayerFour from "/static/img/home-page/steps/layer-4.svg";

const IntegrateAnimation = () => {
  return (
    <div id="scrollTriggerIntegrate" className="h-screen w-full relative z-3">
      <section className="panel">
        <div className="flex container xl mx-auto flex items-center h-full">
          <div className="container xl flex justify-left">
            <div className="w-3/5 h-auto flex flex-col justify-center">
              <small className="text-5xl font-semibold color-blue mb-2">
                Integrate Now
              </small>
              <h1 className="gradient text-6xl font-bold text-white mb-4">
                Strategise &amp; Natively
              </h1>
              <p className="text-4xl color-grey font-normal">
                Seamlessly integrate into your proprietary trading interface or into a user-facing application.
              </p>
            </div>
          </div>
          <div className="w-2/5 step-animation -top-24">
            <img className="step-animation__tile" src={ClearTile} />
            <img className="step-animation__base" src={BaseTile} />
            <img className="step-animation__layertwo" src={LayerTwo} />
            <img className="step-animation__layerthree" src={LayerThree} />
            <img className="step-animation__layerfour" src={LayerFour} />
          </div>
        </div>
      </section>
    </div>
  );
};

export default IntegrateAnimation;
