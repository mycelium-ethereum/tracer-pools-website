import React, { useEffect } from "react";

// Components
import GlowButton from "../components/glow-button";

// Image assets
import TracerCityVideo from "/static/img/home-page/city/tracer-city.mp4";
import TracerBuilding from "/static/img/home-page/city/tracer-building.png";
import MeshLarge from "/static/img/home-page/city/background-3d-large.png";
import CityBottom from "/static/img/home-page/city/city-bottom.png";

const TracerCity = () => {
  return (
    <>
      <section className="panel w-full city-step staking-section flex lg:items-center relative items-start lg:pt-0 background-blue z-10">
        <div className="container xl flex h-screen justify-end mx-auto xl:px-24 lg:px-12 px-4 lg:flex-row flex-col relative">
          <div
            className="lg:w-80 h-auto absolute left-24 mt-96 force-flex flex-col justify-center z-10 lg:pb-0 lg:mb-0 pb-80 mb-10"
            data-stellar-ratio="1.4"
          >
            <span className="2xl:text-5xl lg:text-4xl font-semibold text-white mb-2 lg:block hidden">
              Built for DeFi...
            </span>
            <small className="lg:text-2xl text-white font-light lg:text-left text-3xl text-center">
              Stake and farm with the dApps you know and love.
            </small>
          </div>
          <video
            muted
            loop="loop"
            autoplay
            playsinline
            className="min-w-video absolute top-0 -right-48"
          >
            <source src={TracerCityVideo} type="video/mp4" />
          </video>
        </div>
      </section>
      <section className="panel w-full h-screen city-step staking-section flex lg:items-center relative items-start lg:pt-0 pt-24 background-blue">
        <div className="container xl flex justify-between mx-auto xl:px-24 lg:px-12 px-4 lg:flex-row flex-col relative z-10">
          <div className="w-2/4 h-screen z-0 items-center justify-center flex">
            <img
              className="w-full"
              src={TracerBuilding}
              alt="Tracer Building"
            />
          </div>
          <div
            className="2xl:w-1/3 lg:w-1/3 h-auto absolute right-24 mt-96 force-flex flex-col justify-center z-10 lg:pb-0"
            data-stellar-ratio="1.4"
          >
            <span className="text-5xl font-semibold mb-2 text-white color-blue">
              Built for DeFi
            </span>
            <h1 className="font-bold text-white mb-4 text-5xl">
              &amp; Strategise Natively
            </h1>
            <small className="2xl:w-72 lg:text-2xl text-white font-light lg:text-left text-3xl">
              Stake and farm with the dApps you know and love.
            </small>
            <GlowButton
              className="lg:h-16 h-12 w-48 text-normal rounded-2xl text-xl font-semibold mt-6 lg:ml-0 lg:mb-0 mb-8 mx-auto"
              linkTo="#"
            >
              Launch Docs
            </GlowButton>
          </div>
        </div>
        <img
          className="absolute w-full h-3/4 top-2/4 left-2/4 transform -translate-x-1/2 -translate-y-1/2 z-0"
          src={MeshLarge}
        />
      </section>
      <div className="small-spacer relative">
        <img
          className="absolute w-full top-0 left-2/4 transform -translate-x-1/2 z-0"
          src={CityBottom}
        />
      </div>
    </>
  );
};

export default TracerCity;
