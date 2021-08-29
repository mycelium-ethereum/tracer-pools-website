import React from "react";

// Components
import Button from "../components/button";

// Image assets
import tracer_city from "/static/img/home-page/city/tracer-city.png";
import tracer_building from "/static/img/home-page/city/tracer-building.svg";

const TracerCity = () => {
  return (
    <section id="pinMasterCity" className="pin-master">
      <div id="pinContainerCity" className="pin-container">
        <section className="panel city-step staking-section flex items-center">
          <div className="container xl flex justify-center mx-auto xl:px-24 px-12">
            <div className="2xl:w-auto lg:w-8/12 h-auto flex flex-col justify-center relative z-10">
              <span className="2xl:text-5xl lg:text-4xl font-semibold color-blue mb-2">Built for DeFi...</span>
              <h1 className="strategise-text 2xl:text-6xl lg:text-5xl font-bold text-white">Strategise &amp; Natively</h1>
              <small className="2xl:text-4xl lg:text-3xl text-white font-normal mt-4">Stake and farm with the dApps you know and love.</small>
              <Button className="ml-0 mt-6" linkTo="#" glowButton>
                Launch Docs
              </Button>
            </div>
            <div className="city-step__animation w-3/4 h-screen relative z-0 transform xl:scale-75 lg:scale-50 lg:-right-1/4 ">
              <img className="h-full absolute top-0 right-0" src={tracer_city} alt="Tracer City" />
            </div>
          </div>
        </section>
        <section className="panel city-step strategise-section flex items-center">
          <div className="container xl flex justify-end mx-auto xl:px-24 px-12">
            <div className="w-auto h-auto flex flex-col justify-center">
            </div>
            <div className="city-step__animation w-3/4 h-screen relative z-0 transform xl:scale-75 lg:scale-50 lg:-right-1/4 ">
              <img className="absolute right-0" src={tracer_building} alt="Tracer Building" />
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};

export default TracerCity;
