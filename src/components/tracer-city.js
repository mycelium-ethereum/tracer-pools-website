import React, { useEffect, useState } from "react";
import Button from "../components/button";
import { detect } from "detect-browser";

// Image assets
import TracerCityVideoWEBM from "/static/img/home-page/city/tracer-city.webm";
import TracerCityVideoMP4 from "/static/img/home-page/city/tracer-city.mp4";
import TracerBuildingWEBM from "/static/img/home-page/city/tracer-building.webm";
import TracerBuildingMP4 from "/static/img/home-page/city/tracer-building.mp4";
import MeshSmall from "/static/img/home-page/city/mesh-small.png";
import MeshLarge from "/static/img/home-page/city/mesh-large.svg";
import CityBottom from "/static/img/home-page/city/city-bottom.png";

const TracerCity = () => {
  const [isWebkit, setWebkit] = useState("");
  const detectBrowser = () => {
    const browser = detect();
    if (browser) {
      switch (browser && browser.name) {
        case "safari":
          // console.log("Safari");
          setWebkit(true);
          break;

        default:
          // console.log("Not Safari");
          setWebkit(false);
      }
    }
  };
  useEffect(() => {
    detectBrowser();
  }, []);
  return (
    <>
      <section
        id="city-trigger"
        className="panel w-full staking-section flex lg:items-center lg:flex-row flex-col relative items-start xl:pb-0 lg:pb-48 bg-blue overflow-hidden z-20"
      >
        <div className="container lg:grid block grid-cols-8 md:gap-8 w-full lg:pt-0 xl:px-0 px-4 h-auto mx-auto relative z-10">
          <div className="col-span-3">
            <div
              data-stellar-ratio="1.4"
              className="h-auto lg:absolute 2xl:mt-48 lg:mt-64 force-flex flex-col justify-center lg:items-start items-center z-10 xl:left-0 lg:left-4 lg:pb-0 lg:mb-0 sm:pt-0 xl:px-0 xl:w-full lg:w-80 w-full mx-auto left-0 pt-8 mb-0 lg:text-left text-center"
            >
              <h1 className="font-bold text-white xl:text-5xl lg:text-4xl lg:mb-4 mb-2 text-3xl">
                Built for DeFi
              </h1>
              <small className="text-white font-light xl:w-80 lg:text-left lg:text-2xl lg:w-auto w-56 text-lg">
                Use pool tokens with the dApps you know and love.
              </small>
            </div>
          </div>
          <video
            muted
            loop="loop"
            autoPlay
            playsInline
            className="h-fit lg:opacity-0 transition-opacity duration-700 h-full col-span-5 lg:static lg:transform-none transform-gpu scale-110 relative"
          >
            <source
              src={isWebkit ? TracerCityVideoMP4 : TracerCityVideoWEBM}
              type={isWebkit ? "video/mp4" : "video/webm"}
            />
          </video>
        </div>
        <img
          className="absolute w-full h-full left-2/4 transform-gpu opacity-50 -translate-x-1/2 bottom-0 z-0 block min-w-max"
          src={MeshSmall}
          alt="Mesh Background"
        />
      </section>
      <section
        id="building-trigger"
        className="panel w-full lg:h-auto h-auto staking-section flex lg:items-center relative items-start xl:pb-12 lg:pt-0 pt-24 bg-blue z-10 overflow-hidden"
      >
        <div className="container flex justify-between mx-auto w-full h-full xl:px-0 px-4 lg:flex-row flex-col-reverse relative z-10">
          <video
            muted
            loop="loop"
            autoPlay
            playsInline
            id="tracer-building"
            className="h-fit lg:opacity-0 transition-opacity duration-700 lg:w-1/2 lg:mx-0 mx-auto w-3/4 md:mt-0 mt-6 lg:static lg:left-0 relative"
          >
            <source
              src={isWebkit ? TracerBuildingMP4 : TracerBuildingWEBM}
              type={isWebkit ? "video/mp4" : "video/webm"}
            />
          </video>
          <div
            className="2xl:mt-96 xl:mt-80 lg:pl-12 lg:mt-48 lg:pb-0 lg:pr-12 lg:absolute lg:text-left left-1/2 mx-auto px-4 w-full force-flex flex-col justify-center lg:items-start items-center z-10 h-auto text-center"
            data-stellar-ratio="1.4"
          >
            <span className="xl:text-5xl lg:text-4xl font-semibold text-base lg:mb-2 mb-0 text-white color-blue">
              Built for DeFi
            </span>
            <h1 className="font-bold text-white xl:text-5xl lg:text-4xl lg:mb-4 mb-2 text-3xl">
              Strategise Natively
            </h1>
            <small className="text-white font-light xl:w-80 lg:text-left lg:text-2xl lg:w-auto w-56 text-lg">
              Stake and farm with the dApps you know and love.
            </small>
            <Button
              className="mt-6"
              linkTo="https://app.gitbook.com/login/tracer-1/pool-swaps"
            >
              Launch Docs
            </Button>
          </div>
        </div>
        <img
          className="absolute opacity-30 w-full h-auto md:top-1/2 top-3/4 transform -translate-y-1/2 left-0 z-0 min-w-max"
          alt="Mesh Background"
          src={MeshLarge}
        />
      </section>
      <div className="small-spacer relative">
        <img
          className="absolute w-full bottom-0"
          alt="City Bottom"
          src={CityBottom}
        />
      </div>
    </>
  );
};

export default TracerCity;
