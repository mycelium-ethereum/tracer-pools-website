import React from "react";
import Button from "../components/button";

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
        <div className="flex flex-col items-center text-white">
          <div className="text-3xl font-bold">Built for DeFi...</div>
          <div>Stake and farm with the dApps you know and love.</div>
          <Button
            className="mt-6 h-12 w-48 border border-white text-xl rounded-2xl"
            linkTo="/"
          >
            Launch Docs
          </Button>
        </div>
      </div>

      <div className="panel relative w-full z-10">
        {/*tracer city text desktop*/}
        <div className="hidden sm:block absolute top-28 lg:top-56 left-32 z-10 text-white">
          <div className="text-3xl font-bold">Built for DeFi...</div>
          <div className="text-xl mt-6">
            Stake and farm with the dApps <br /> you know and love.
          </div>
          <Button
            className="mt-6 h-12 w-48 border border-white text-xl rounded-2xl"
            linkTo="/"
          >
            Launch Docs
          </Button>
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

      {/*tracer building text mobile*/}
      <div className="sm:hidden h-52 flex justify-center items-center bg-blue-1000">
        <div className="flex flex-col items-center text-white">
          <div className="text-3xl font-bold">Built for DeFi...</div>
          <div>Strategise Natively</div>
          <Button
            className="mt-6 h-12 w-48 border border-white text-xl rounded-2xl"
            linkTo="/"
          >
            Launch Docs
          </Button>
        </div>
      </div>

      <div className="panel w-full relative bg-blue-1000">
        {/*tracer building section content*/}
        <div className="sm:container mx-auto relative flex flex-col sm:flex-row z-10">
          {/*tracer building image*/}
          <img
            className="w-1/2 mx-auto md:mx-0"
            src={TracerBuilding}
            alt="Tracer Building"
          />

          {/*tracer building text desktop */}
          <div className="hidden sm:flex flex-col justify-center z-10 md:ml-20">
            <div className="text-3xl font-bold mb-2 text-white color-blue">
              Built for DeFi
            </div>
            <div className="font-bold text-white mb-4 text-3xl">
              Strategise Natively
            </div>
            <GlowButton
              className="lg:h-16 h-12 w-48 text-normal rounded-2xl text-xl font-bold mt-6 lg:ml-0 lg:mb-0 mb-8"
              linkTo="#"
            >
              Launch Docs
            </GlowButton>
          </div>
        </div>

        {/*tracer building mesh background*/}
        <img
          className="absolute w-full h-3/4 top-2/4 left-2/4 transform -translate-x-1/2 -translate-y-1/2 z-0"
          src={MeshLarge}
          alt="Large Mesh"
        />
      </div>

      <img className="w-full z-0" src={CityBottom} alt="City Bottom" />
    </>
  );
};

export default TracerCity;
