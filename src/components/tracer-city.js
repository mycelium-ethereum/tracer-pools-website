import React, { useEffect } from "react";

// Components
import GlowButton from "../components/glow-button";

// Image assets
import tracer_city from "/static/img/home-page/city/tracer-city.png";
import tracer_building from "/static/img/home-page/city/tracer-building.svg";
import tracer_city_mobile from "/static/img/home-page/city/tracer-city-mobile.png";
import tracer_building_mobile from "/static/img/home-page/city/tracer-building-mobile.png";

const TracerCity = () => {
  const isMobile = () => {
    const width = window.innerWidth;
    if (width < 1024) {
      return true;
    } else {
      return false;
    }
  };
  const toggleActiveStyles = () => {
    const steps = document.querySelectorAll(".city-step");
    const slide2 = document.querySelector(".strategise-section");
    if (isMobile()) {
      steps.forEach((e) => e.classList.add("active"));
      slide2.style.background = "#050cbd";
    } else {
      steps.forEach((e) => e.classList.remove("active"));
      slide2.style.background = "unset";
    }
  };
  useEffect(() => {
    toggleActiveStyles();
    window.addEventListener("resize", function () {
      toggleActiveStyles();
    });
  });
  return (
    <section id="pinMasterCity" className="pin-master">
      <div id="pinContainerCity" className="pin-container">
        <section className="panel w-full h-screen city-step staking-section flex lg:items-center lg:absolute relative items-start lg:pt-0 pt-24">
          <div className="container xl flex justify-start mx-auto xl:px-24 lg:px-12 px-4 lg:flex-row flex-col">
            <div className="2xl:w-5/12 lg:w-1/3 h-auto flex flex-col justify-center z-10 lg:pb-0 lg:mb-0 pb-80 mb-10">
              <span className="2xl:text-3xl lg:text-2xl font-semibold color-blue mb-2 lg:block hidden">
                Built for DeFi...
              </span>
              <span className="text-3xl font-bold mb-2 text-white lg:hidden block text-center">
                Built for DeFi...
              </span>
              <h1 className="strategise-text font-bold text-white mb-4 2xl:text-6xl lg:text-4xl">
                Strategise Natively
              </h1>
              <small className="lg:text-2xl text-white font-light lg:text-left text-3xl text-center">
                Stake and farm with the dApps you know and love.
              </small>
              <GlowButton
                className="lg:h-16 h-12 w-48 text-normal rounded-2xl text-xl font-semibold mt-6 lg:ml-0 lg:mb-0 mb-8 mx-auto"
                linkTo="#"
              >
                Launch Docs
              </GlowButton>
            </div>
            <img
              className="w-screen absolute left-0 bottom-24 lg:hidden block"
              src={tracer_city_mobile}
            />
            <div className="city-step__animation w-3/4 h-screen absolute z-0 transform-gpu 2xl:scale-100 2xl:right-36 xl:scale-75 xl:-right-16 lg:scale-50 lg:-right-32 top-2/4 transform -translate-y-1/2 lg:block hidden">
              <img
                className="h-full absolute top-0 right-0"
                src={tracer_city}
                alt="Tracer City"
              />
            </div>
          </div>
        </section>
        <section className="panel w-full h-full city-step strategise-section flex items-center lg:absolute relative lg:pt-0 sm:pt-24 pt-0 lg:pointer-events-none pointer-events-auto">
          <div className="container xl flex justify-start mx-auto xl:px-24 lg:px-12 px-4 lg:flex-row flex-col">
            <div className="2xl:w-5/12 lg:w-1/3 h-auto flex flex-col justify-center z-10 lg:pb-0 lg:hidden block">
              <span className="text-3xl font-bold mb-2 text-white color-blue text-center">
                Built for DeFi...
              </span>
              <h1 className="font-bold text-white mb-4 text-4xl text-center">
                Strategise Natively
              </h1>
              <small className="lg:text-2xl text-white font-light lg:text-left text-3xl text-center">
                Stake and farm with the dApps you know and love.
              </small>
              <GlowButton
                className="lg:h-16 h-12 w-48 mt-6 rounded-2xl text-normal text-xl font-semibold lg:ml-0 lg:mb-0 mb-8 mx-auto"
                linkTo="#"
              >
                Launch Docs
              </GlowButton>
            </div>
            <img
              className="w-80 lg:hidden block mb-8 mx-auto"
              src={tracer_building_mobile}
            />
            <div className="city-step__animation w-3/4 h-screen absolute z-0 transform-gpu 2xl:scale-100 2xl:right-36 xl:scale-75 xl:-right-16 lg:scale-50 lg:-right-32 top-2/4 transform -translate-y-1/2 lg:block hidden">
              <img
                className="absolute right-0"
                src={tracer_building}
                alt="Tracer Building"
              />
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};

export default TracerCity;
