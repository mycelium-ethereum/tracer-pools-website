import React, { useEffect, useState } from "react";
import Button from "../components/button";
import { isSafari } from "react-device-detect";
import Container from "../components/container";

// Image and video assets
import TracerCityVideoWEBM from "/static/img/home-page/city/tracer-city.webm";
import TracerCityPNG from "/static/img/home-page/city/tracer-city.png";
import TracerBuildingWEBM from "/static/img/home-page/city/tracer-building.webm";
import TracerBuildingPNG from "/static/img/home-page/city/tracer-building.png";
import MeshSmall from "/static/img/home-page/city/mesh-small.svg";
import MeshSmallMobile from "/static/img/home-page/city/mesh-small-mobile.svg";
import MeshLarge from "/static/img/home-page/city/mesh-large.svg";
import MeshLargeMobile from "/static/img/home-page/city/mesh-large-mobile.svg";
import CityBottom from "/static/img/home-page/city/city-bottom.png";

const TracerCity = () => {
  const [isSafariBrowser, setIsSafari] = useState(false);
  const playVideos = () => {
    const videos = document.querySelectorAll("video");
    videos.forEach((video) => {
      if (video) {
        video.play();
      }
    });
  };
  useEffect(() => {
    setIsSafari(isSafari);
    playVideos();
  }, [isSafari]);
  return (
    <>
      <section
        id="city-trigger"
        className="panel staking-section bg-blue relative z-20 flex w-full flex-col items-start overflow-hidden lg:flex-row lg:items-center lg:pb-48 xl:pb-0"
      >
        <Container className="block h-auto grid-cols-8 md:gap-8 lg:grid lg:pt-0">
          <div className="col-span-3">
            <div
              data-stellar-ratio="1.4"
              className="left-0 z-10 mx-auto mb-8 h-auto flex-col items-center justify-center pt-8 text-center sm:pt-0 lg:absolute lg:left-4 lg:mt-20 lg:mb-0 lg:items-start lg:pb-0 lg:text-left xl:left-0 xl:mt-0 xl:px-0 2xl:mt-20"
            >
              <h1 className="mb-2 text-3xl font-bold lg:mb-4 lg:text-4xl xl:text-5xl">
                <span className="text-tracer-400">Built for DeFi</span>
                <br />
                <span className="text-white">Strategise Natively</span>
              </h1>
              <ul className="mx-auto w-max list-inside list-disc text-left text-lg font-light text-white lg:w-auto lg:text-2xl">
                <li>Permissionless Market Deployment</li>
                <li>Create Custom Indices</li>
                <li>Use Pool Tokens with dApps you know and love</li>
              </ul>
              <Button className="mb-12 mt-6 lg:ml-0 lg:mb-0" href="">
                Launch Docs
              </Button>
            </div>
          </div>
          {isSafariBrowser ? (
            <video
              data-piwik-ignore
              loop="loop"
              muted
              playsInline
              disablePictureInPicture
              className="relative col-span-5 h-fit scale-110 transform overflow-hidden rounded-xl transition-opacity duration-700 lg:opacity-0"
              poster={TracerCityPNG}
              id="tracer-city"
            />
          ) : (
            <video
              data-piwik-ignore
              loop="loop"
              muted
              playsInline
              disablePictureInPicture
              className="relative col-span-5 h-fit scale-110 transform overflow-hidden rounded-xl transition-opacity duration-700 lg:opacity-0"
              id="tracer-city"
              preload="none"
            >
              <source src={TracerCityVideoWEBM} type="video/webm" />
            </video>
          )}
        </Container>
        <img
          className="absolute -right-48 -bottom-12 z-0 hidden h-full w-full md:block"
          src={MeshSmall}
          alt="Mesh Background"
          loading="lazy"
        />
        <img
          className="absolute left-2/4 -bottom-20 z-0 block h-full w-full min-w-max -translate-x-1/2 transform-gpu opacity-40 md:hidden"
          src={MeshSmallMobile}
          alt="Mesh Background"
          loading="lazy"
        />
      </section>
      <section
        id="building-trigger"
        className="panel staking-section bg-blue relative z-10 flex h-auto w-full items-start overflow-hidden pt-24 lg:h-auto lg:items-center lg:pt-0 xl:pb-12"
      >
        <div className="container relative z-10 mx-auto flex h-full w-full flex-col-reverse justify-between px-4 lg:flex-row xl:px-0">
          {isSafariBrowser ? (
            <video
              data-piwik-ignore
              muted
              loop="loop"
              playsInline
              disablePictureInPicture
              id="tracer-building"
              className="relative mx-auto mt-6 h-fit w-3/4 transition-opacity duration-700 md:mt-0 lg:static lg:left-0 lg:mx-0 lg:w-1/2 lg:opacity-0"
              poster={TracerBuildingPNG}
            />
          ) : (
            <video
              data-piwik-ignore
              muted
              loop="loop"
              playsInline
              disablePictureInPicture
              id="tracer-building"
              className="relative mx-auto mt-6 h-fit w-3/4 transition-opacity duration-700 md:mt-0 lg:static lg:left-0 lg:mx-0 lg:w-1/2 lg:opacity-0"
              preload="none"
            >
              <source src={TracerBuildingWEBM} type="video/webm" />
            </video>
          )}
          <div
            className="left-1/2 z-10 mx-auto h-auto w-full flex-col items-center justify-center px-4 text-center lg:absolute lg:mt-48 lg:items-start lg:pl-12 lg:pb-0 lg:pr-12 lg:text-left xl:mt-80 2xl:mt-52"
            data-stellar-ratio="1.4"
          >
            {/* <span className="xl:text-5xl lg:text-4xl font-semibold text-base lg:mb-2 mb-0 text-white color-blue">
              Built for DeFi
            </span> */}
            <h1 className="mb-4 text-3xl font-bold text-white lg:mb-4 lg:text-4xl xl:text-5xl">
              Stake Natively
            </h1>
            <small className="w-auto text-lg font-light text-white lg:text-left lg:text-2xl">
              Using Tracer Strategies to earn TCR
            </small>
            <Button
              id="view-staking"
              className="mb-12 mt-6 lg:ml-0 lg:mb-0"
              href="https://pools.tracer.finance/stake/"
            >
              View Strategies
            </Button>
          </div>
        </div>
        <img
          className="absolute top-3/4 left-0 z-0 block h-auto w-full min-w-max -translate-y-1/2 transform opacity-40 lg:hidden"
          alt="Mesh Background"
          src={MeshLargeMobile}
          loading="lazy"
        />
        <img
          className="absolute top-3/4 left-0 z-0 hidden h-auto w-full min-w-max -translate-y-1/2 transform opacity-40 md:top-1/2 lg:block"
          alt="Mesh Background"
          src={MeshLarge}
          loading="lazy"
        />
      </section>
      <div className="small-spacer relative">
        <img
          className="absolute bottom-0 w-full"
          alt="City Bottom"
          src={CityBottom}
          loading="eager"
        />
      </div>
    </>
  );
};

export default TracerCity;
