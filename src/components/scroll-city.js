import React from "react";

// Components
import Button from "../components/button";

// Image assets
import tracer_city from "/static/img/home-page/city/tracer-city.png";
import tracer_building from "/static/img/home-page/city/tracer-building.svg";

const ScrollTracerCity = () => {
  return (
    <div id="pinMasterCity" className="pin-master">
      <div id="pinContainerCity" className="pin-container">
        <section className="panel city-step staking-section flex items-center">
          <div className="container xl flex justify-center mx-auto">
            <div className="w-auto h-auto flex flex-col justify-center">
              <h1 className="text-5xl font-semibold color-blue mb-2">Built for DeFi...</h1>
              <h1 className="strategise-text text-6xl font-bold text-white mb-4">Strategise &amp; Natively</h1>
              <small className="text-4xl text-white font-normal">Stake and farm with the dApps you know and love.</small>
              <Button className="ml-0 mt-6" linkTo="#" outlineButton>
                Launch Docs
              </Button>
            </div>
            <div className="city-step__animation w-3/4 h-screen relative">
              <img className="h-full absolute top-0 right-0" src={tracer_city} alt="Tracer City" />
            </div>
          </div>
        </section>
        <section className="panel city-step strategise-section flex items-center">
          <div className="container xl flex justify-end mx-auto">
            <div className="w-auto h-auto flex flex-col justify-center">
            </div>
            <div className="city-step__animation w-3/4 h-screen relative">
              <img className="absolute right-0" src={tracer_building} alt="Tracer Building" />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ScrollTracerCity;
