import React, { useEffect, useState } from "react";
import Button from "../components/button";
import { isSafari } from "react-device-detect";

// Image assets
import TracerCityVideoWEBM from "/static/img/home-page/city/tracer-city.webm";
import TracerCityVideoMP4 from "/static/img/home-page/city/tracer-city.mp4";
import TracerBuildingWEBM from "/static/img/home-page/city/tracer-building.webm";
import TracerBuildingMP4 from "/static/img/home-page/city/tracer-building.mp4";
import MeshSmall from "/static/img/home-page/city/mesh-small.svg";
import MeshSmallMobile from "/static/img/home-page/city/mesh-small-mobile.svg";
import MeshLarge from "/static/img/home-page/city/mesh-large.svg";
import MeshLargeMobile from "/static/img/home-page/city/mesh-large-mobile.svg";
import CityBottom from "/static/img/home-page/city/city-bottom.png";

const TracerCity = () => {
  const [isWebkit, setWebkit] = useState("");
  const detectBrowser = () => {
    if (isSafari) {
      setWebkit(true);
    } else {
      setWebkit(false);
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
              className="h-auto lg:absolute 2xl:mt-20 lg:mt-20 force-flex flex-col justify-center lg:items-start items-center z-10 xl:left-0 lg:left-4 lg:pb-0 lg:mb-0 sm:pt-0 xl:px-0 xl:w-full lg:w-80 w-full mx-auto left-0 pt-8 mb-8 lg:text-left text-center"
            >
              <h1 className="font-bold text-white xl:text-5xl lg:text-4xl lg:mb-4 mb-2 text-3xl">
                Built for DeFi
              </h1>
              <small className="text-white font-light xl:w-80 lg:text-left lg:text-2xl lg:w-auto w-56 text-lg">
                Use Pool Tokens with dApps you know and love
              </small>
            </div>
          </div>
          <video
            muted
            loop="loop"
            autoPlay
            playsInline
            disableRemotePlayback={true}
            disablePictureInPicture
            className="h-fit lg:opacity-0 transition-opacity duration-700 h-full col-span-5 transform scale-110 relative"
          >
            <source
              src={isWebkit ? TracerCityVideoMP4 : TracerCityVideoWEBM}
              type={isWebkit ? "video/mp4" : "video/webm"}
            />
          </video>
        </div>
        <img
          className="absolute h-full -right-48 -bottom-12 z-0 w-full md:block hidden"
          src={MeshSmall}
          alt="Mesh Background"
        />
        <img
          className="absolute w-full h-full opacity-40 left-2/4 transform-gpu -translate-x-1/2 -bottom-20 z-0 min-w-max md:hidden block"
          src={MeshSmallMobile}
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
            disableRemotePlayback={true}
            disablePictureInPicture
            id="tracer-building"
            className="h-fit lg:opacity-0 transition-opacity duration-700 lg:w-1/2 lg:mx-0 mx-auto w-3/4 md:mt-0 mt-6 lg:static lg:left-0 relative"
          >
            <source
              src={isWebkit ? TracerBuildingMP4 : TracerBuildingWEBM}
              type={isWebkit ? "video/mp4" : "video/webm"}
            />
          </video>
          <div
            className="2xl:mt-52 xl:mt-80 lg:pl-12 lg:mt-48 lg:pb-0 lg:pr-12 lg:absolute lg:text-left left-1/2 mx-auto px-4 w-full force-flex flex-col justify-center lg:items-start items-center z-10 h-auto text-center"
            data-stellar-ratio="1.4"
          >
            {/* <span className="xl:text-5xl lg:text-4xl font-semibold text-base lg:mb-2 mb-0 text-white color-blue">
              Built for DeFi
            </span> */}
            <h1 className="font-bold text-white xl:text-5xl lg:text-4xl lg:mb-4 mb-4 text-3xl">
              Stake Natively
            </h1>
            <small className="text-white font-light lg:text-left lg:text-2xl w-auto text-lg">
              In the Tracer Interface and earn TCR
            </small>
            <Button
              className="lg:ml-0 lg:mb-0 mb-12 mt-6"
              href="https://pools.tracer.finance/stake/"
            >
              View Staking
            </Button>
          </div>
        </div>
        <img
          className="absolute opacity-40 w-full h-auto top-3/4 transform -translate-y-1/2 left-0 z-0 min-w-max lg:hidden block"
          alt="Mesh Background"
          src={MeshLargeMobile}
        />
        <img
          className="absolute opacity-40 w-full h-auto md:top-1/2 top-3/4 transform -translate-y-1/2 left-0 z-0 min-w-max lg:block hidden"
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
