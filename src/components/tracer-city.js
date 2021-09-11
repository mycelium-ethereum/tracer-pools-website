import React from "react";
import Button from "../components/button";

// Components
import GlowButton from "../components/glow-button";

// Image assets
import TracerCityVideoWEBM from "/static/img/home-page/city/tracer-city.webm";
// import TracerCityVideoMP4 from "/static/img/home-page/city/tracer-city.mp4";
import TracerBuildingWEBM from "/static/img/home-page/city/tracer-building.webm";
import TracerBuildingMP4 from "/static/img/home-page/city/tracer-building.mp4";
import MeshSmall from "/static/img/home-page/city/mesh-small.png";
import MeshLarge from "/static/img/home-page/city/mesh-large.svg";
import CityBottom from "/static/img/home-page/city/city-bottom.png";

const TracerCity = () => {
  return (
    <>
      <section
        id="city-trigger"
        className="panel w-full staking-section flex lg:items-center lg:flex-row flex-col relative items-start xl:pb-0 lg:pb-48 bg-blue overflow-hidden z-10"
      >
        <div className="container flex lg:h-screen w-full lg:flex-row lg:pt-0 xl:px-0 px-4 h-auto lg:justify-end mx-auto flex-col justify-start relative z-10">
          <div
            className="h-auto lg:absolute 2xl:mt-96 lg:mt-60 force-flex flex-col justify-center z-10 xl:left-0 lg:left-4 lg:pb-0 lg:mb-0 sm:pt-0 xl:px-0 lg:w-80 w-52 mx-auto left-0 pt-8 mb-10 lg:text-left text-center"
            data-stellar-ratio="1.4"
          >
            <span className="xl:text-5xl lg:text-4xl font-semibold text-base lg:mb-2 mb-0 text-white color-blue">
              Built for DeFi
            </span>
            <h1 className="font-bold text-white xl:text-5xl lg:text-4xl lg:mb-4 mb-2 text-3xl">
              Strategise &amp; Natively
            </h1>
            <small className="text-white font-light 2xl:w-72 lg:text-left lg:text-2xl lg:w-auto w-56 text-lg">
              Stake and farm with the dApps you know and love.
            </small>
            <GlowButton
              className="lg:h-16 h-12 w-48 text-normal rounded-lg font-normal mt-6 lg:ml-0 lg:mb-0 sm:text-xl text-lg mb-8 mx-auto"
              linkTo="https://app.gitbook.com/login/tracer-1/pool-swaps"
            >
              Launch Docs
            </GlowButton>
          </div>
          {/* Desktop video */}
          <video
            muted
            loop="loop"
            autoPlay
            playsInline
            className="opacity-0 transition-opacity duration-700 h-full w-full lg:w-1/2 lg:static lg:transform-none lg:left-none transform-gpu scale-110 relative -left-2"
          >
            <source src={TracerCityVideoWEBM} type="video/mp4" />
          </video>
        </div>
        <img
          className="absolute w-full h-full left-2/4 transform-gpu opacity-50 -translate-x-1/2 bottom-0 z-0 block min-w-max"
          src={MeshSmall}
        />
      </section>
      <section
        id="building-trigger"
        className="panel w-full lg:h-screen h-auto staking-section flex lg:items-center relative items-start lg:pt-0 xl:pb-12 pt-24 bg-blue z-10"
      >
        <div className="container flex justify-between mx-auto w-full h-full xl:px-0 px-4 lg:flex-row flex-col-reverse relative z-10">
          <video
            muted
            loop="loop"
            autoPlay
            playsInline
            id="tracer-building"
            className="opacity-0 transition-opacity duration-700 h-full w-full lg:w-1/2 lg:static lg:transform-none lg:left-none transform-gpu relative lg:scale-150 scale-125 lg:my-0 my-12"
          >
            <source src={TracerBuildingWEBM} type="video/webm" />
            <source src={TracerBuildingMP4} type="video/mp4" />
          </video>
          <div
            className="2xl:w-auto 2xl:mt-96 lg:mt-48 lg:pb-0 lg:w-1/3 lg:absolute lg:text-left xl:px-0 right-0 mx-auto px-4 force-flex flex-col justify-center lg:items-start items-center z-10 h-auto text-center"
            data-stellar-ratio="1.4"
          >
            <span className="xl:text-5xl lg:text-4xl font-semibold text-base lg:mb-2 mb-0 text-white color-blue">
              Built for DeFi
            </span>
            <h1 className="font-bold text-white xl:text-5xl lg:text-4xl lg:mb-4 mb-2 text-3xl">
              Strategise &amp; Natively
            </h1>
            <small className="text-white font-light 2xl:w-72 lg:text-left lg:text-2xl lg:w-auto w-56 text-lg">
              Stake and farm with the dApps you know and love.
            </small>
            <GlowButton
              className="lg:h-16 h-12 w-48 text-normal rounded-lg font-normal mt-6 lg:ml-0 lg:mb-0 sm:text-xl text-lg mb-8 mx-auto"
              linkTo="https://app.gitbook.com/login/tracer-1/pool-swaps"
            >
              Launch Docs
            </GlowButton>
          </div>
        </div>
        <img
          className="absolute opacity-30 w-auto h-full top-1/2 transform -translate-y-1/2 left-0 z-0 min-w-max"
          src={MeshLarge}
        />
      </section>
      <div className="small-spacer relative">
        <img
          className="absolute w-full top-0 left-2/4 transform-gpu -translate-x-1/2 z-0"
          alt="City Bottom"
          src={CityBottom}
        />
      </div>
    </>
  );
};

export default TracerCity;
