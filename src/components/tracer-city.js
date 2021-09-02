import React from "react";

// Components
import GlowButton from "../components/glow-button";

// Image assets
import TracerCityVideo from "/static/img/home-page/city/tracer-city.mp4";
import TracerCityVideoMobile from "/static/img/home-page/city/tracer-city-mobile.mp4";
import TracerBuilding from "/static/img/home-page/city/tracer-building.png";
import MeshLarge from "/static/img/home-page/city/background-3d-large.png";
import CityBottom from "/static/img/home-page/city/city-bottom.png";

const TracerCity = () => {
  return (
    <>
      {/*tracer city text mobile*/}
      <div className="sm:hidden h-52 flex justify-center items-center bg-blue-1000">
        <div className="text-white">
          <div className="text-3xl font-bold">Built for DeFi...</div>
          <div>Stake and farm with the dApps you know and love.</div>
        </div>
      </div>

      <div className="panel relative w-full z-10">
        {/*tracer city text desktop*/}
        <div className="hidden sm:block absolute top-48 left-32 z-10 text-white" data-stellar-ratio="1.4">
          <div className="text-3xl font-bold">Built for DeFi...</div>
          <div>Stake and farm with the dApps you know and love.</div>
        </div>

        {/*tracer city video mobile*/}
        <div className="sm:hidden">
          <video autoPlay loop muted playsInline className="w-full">
            <source src={TracerCityVideoMobile} type="video/mp4" />
          </video>
        </div>

        {/*tracer city video desktop*/}
        <div className="hidden sm:block">
          <video autoPlay loop muted playsInline className="w-full">
            <source src={TracerCityVideo} type="video/mp4" />
          </video>
        </div>
      </div>

      <div className="panel w-full relative bg-blue-1000">
        <div className="sm:container mx-auto relative flex lg:flex-row flex-col z-10">
          <div className="2xl:w-1/3 lg:w-1/3 h-auto absolute right-24 mt-96 force-flex flex-col justify-center z-10 lg:pb-0" data-stellar-ratio="1.4">
            <div className="text-5xl font-bold mb-2 text-white color-blue">
              Built for DeFi
            </div>
            <h1 className="font-bold text-white mb-4 text-5xl">
              &amp; Strategise Natively
            </h1>
            <small className="2xl:w-72 lg:text-2xl text-white font-light lg:text-left text-3xl">
              Stake and farm with the dApps you know and love.
            </small>
            <GlowButton
              className="lg:h-16 h-12 w-48 text-normal rounded-2xl text-xl font-bold mt-6 lg:ml-0 lg:mb-0 mb-8 mx-auto"
              linkTo="#"
            >
              Launch Docs
            </GlowButton>
          </div>
          <img src={TracerBuilding} alt="Tracer Building" />
        </div>
        <img className="absolute w-full h-3/4 top-2/4 left-2/4 transform -translate-x-1/2 -translate-y-1/2 z-0" src={MeshLarge} alt="Large Mesh" />
      </div>
      <img className="w-full z-0" src={CityBottom} alt="City Bottom" />
    </>
  );
};

export default TracerCity;
