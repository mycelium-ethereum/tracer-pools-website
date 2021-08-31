import React, { useEffect } from "react";

// Components
import GlowButton from "../components/glow-button";

// Image assets
import tracer_city from "/static/img/home-page/city/tracer-city.png";
import tracer_building from "/static/img/home-page/city/tracer-building.png";
import Mesh from "/static/img/home-page/city/background-3d.png";
import MeshLarge from "/static/img/home-page/city/background-3d-large.png";
import CityTop from "/static/img/home-page/city/city-top.png";
import CityBottom from "/static/img/home-page/city/city-bottom.png";

const TracerCity = () => {
  return (
    <>
      <section className="panel w-full h-screen city-step staking-section flex lg:items-center relative items-start lg:pt-0 background-blue z-0">
        <div className="container xl flex justify-between mx-auto xl:px-24 lg:px-12 px-4 lg:flex-row flex-col relative z-10">
          <div className="lg:w-80 h-auto flex flex-col justify-center z-10 lg:pb-0 lg:mb-0 pb-80 mb-10">
            <span className="2xl:text-5xl lg:text-4xl font-semibold text-white mb-2 lg:block hidden">
              Built for DeFi...
            </span>
            <small className="lg:text-2xl text-white font-light lg:text-left text-3xl text-center">
              Stake and farm with the dApps you know and love.
            </small>
          </div>
          <div className="w-3/4 h-screen z-0 items-center justify-center flex">
            <img
              className="w-full"
              src={tracer_city}
              alt="Tracer City"
            />
          </div>
        </div>
        <img
          className="absolute w-full h-3/4 top-2/4 left-2/4 transform -translate-x-1/2 -translate-y-1/2 z-0"
          src={Mesh}
        />
        <img
          className="absolute w-full -top-64 left-2/4 transform -translate-x-1/2 -translate-y-1/2 z-0"
          src={CityTop}
        />
      </section>
      <section className="panel w-full h-screen city-step staking-section flex lg:items-center relative items-start lg:pt-0 pt-24 background-blue">
        <div className="container xl flex justify-between mx-auto xl:px-24 lg:px-12 px-4 lg:flex-row flex-col relative z-10">
          <div className="w-2/4 h-screen z-0 items-center justify-center flex">
            <img
              className="w-full"
              src={tracer_building}
              alt="Tracer Building"
            />
          </div>
          <div className="2xl:w-1/3 lg:w-1/3 h-auto flex flex-col justify-center z-10 lg:pb-0">
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
        <img
          className="absolute w-full -bottom-2/4 left-2/4 transform -translate-x-1/2 z-0"
          src={CityBottom}
        />
      </section>
      <div className="small-spacer" />
    </>
  );
};

export default TracerCity;
