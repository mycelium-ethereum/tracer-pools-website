import React from "react";
import Button from "../components/button";

// Components
import GlowButton from "../components/glow-button";

// Image assets
import TracerCityVideo from "/static/img/home-page/city/tracer-city.mp4";
import TracerCityMobileVideo from "/static/img/home-page/city/tracer-city-mobile.mp4";
import TracerBuildingImage from "/static/img/home-page/city/tracer-building.png";
import TracerBuilding from "/static/img/home-page/city/tracer-building.mp4";
import MeshLarge from "/static/img/home-page/city/background-3d-large.png";
import CityBottom from "/static/img/home-page/city/city-bottom.png";

const TracerCity = () => {
  return (
    <>
      <section
        id="city-trigger"
        className="panel w-full staking-section flex lg:items-center lg:flex-row flex-col relative items-start xl:pb-0 lg:pb-48 background-blue overflow-hidden z-10"
      >
        <div className="container flex xl:h-screen w-full lg:h-96sm:px-0 lg:flex-row lg:pt-0 lg:px-0 px-4 h-auto lg:justify-end mx-auto flex-col justify-start relative">
          <div
            className="h-auto lg:absolute  2xl:mt-96 lg:mt-48 force-flex flex-col justify-center z-10 lg:pb-0 lg:mb-0 sm:pt-0 sm:px-0 lg:w-80 w-52 mx-auto left-0 pt-8 mb-10 lg:text-left text-center"
            data-stellar-ratio="1.4"
          >
            <span className="xl:text-5xl lg:text-4xl text-3xl font-extrabold text-white mb-2">
              Built for DeFi
            </span>
            <small className="lg:text-2xl text-white font-light lg:text-left text-lg text-center">
              Stake and farm with the dApps you know and love.
            </small>
          </div>
        </div>
        {/* Desktop video */}
        <video
          muted
          loop="loop"
          autoPlay
          playsInline
          className="min-w-video absolute top-1/2 sm:opacity-0 left-1/2 transform -translate-y-1/2 -translate-x-1/2 transition-opacity duration-1000 lg:block hidden"
        >
          <source src={TracerCityVideo} type="video/mp4" />
        </video>
        {/* Mobile video - full width */}
        <video
          muted
          loop="loop"
          autoPlay
          playsInline
          className="min-w-video transition-opacity duration-1000 lg:hidden block"
        >
          <source src={TracerCityMobileVideo} type="video/mp4" />
        </video>
      </section>
      <section
        id="building-trigger"
        className="panel w-full lg:h-screen h-auto staking-section flex lg:items-center relative items-start lg:pt-0 xl:pb-12 pt-24 background-blue z-0"
      >
        {/* Desktop building video */}
        <video
          muted
          loop="loop"
          autoPlay
          playsInline
          id="tracer-building"
          className="min-w-video absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 transition-opacity duration-1000 sm:block sm:opacity-0 transition-opacity duration-1000 hidden"
        >
          <source src={TracerBuilding} type="video/mp4" />
        </video>
        <div className="container flex justify-between mx-auto w-full h-full sm:px-0 px-4 lg:flex-row flex-col-reverse relative z-10">
          {/* Mobile image - full width */}
          <div className="w-2/4 xl:h-screen sm:w-auto w-full h-auto z-0 items-center justify-center flex">
            <img
              className="sm:w-96 w-full lg:hidden block"
              src={TracerBuildingImage}
              alt="Tracer Building"
            />
          </div>
          <div
            className="2xl:w-auto 2xl:mt-96 lg:mt-24 lg:pb-0 lg:w-1/3 lg:absolute lg:right-24 lg:text-left sm:px-0 right-0 mx-auto px-4 force-flex flex-col justify-center lg:items-start items-center z-10 h-auto text-center"
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
              linkTo="#"
            >
              Launch Docs
            </GlowButton>
          </div>
        </div>
        <img
          className="absolute w-full h-3/4 left-2/4 transform -translate-x-1/2 bottom-0 z-0 lg:hidden block"
          src={MeshLarge}
        />
      </section>
      <div className="small-spacer relative">
        <img
          className="absolute w-full top-0 left-2/4 transform -translate-x-1/2 z-0"
          alt="City Bottom"
          src={CityBottom}
        />
      </div>
    </>
  );
};

export default TracerCity;
