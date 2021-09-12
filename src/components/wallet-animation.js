import React from "react";
import TokenSlider from "../components/token-slider";
import Button from "../components/button";

// Images
import MetamaskFox from "/static/img/slider/metamask-fox.svg";
import CityTopDark from "/static/img/home-page/city/city-top-dark.png";
import CityTop from "/static/img/home-page/city/city-top.png";

// CityBackground
const WalletAnimation = () => {
  return (
    <>
      <section
        className="panel relative lg:h-full w-full z-0 bg-blue"
        id="token-trigger"
      >
        <div className="container flex flex-col align-center justify-start h-full w-full relative z-10 mx-auto 2xl:pt-96 xl:pt-80 xl:px-0 pt-60 px-4">
          <h1
            id="fade1"
            className="mb-4 text-center 2xl:mt-12 lg:text-6xl text-4xl font-black text-white lg:opacity-0 lg:leading-snug"
          >
            Fungible ERC-20
            <br />
            Tokenised Positions
          </h1>
          <p
            id="fade2"
            className="text-2xl color-grey text-center font-normal color-orange lg:opacity-0"
          >
            That live in your wallet
          </p>
          <Button
            className="mx-auto lg:opacity-0"
            linkTo="#"
            id="fade3"
          >
            Browse Tokens
          </Button>
        </div>
        <div className="w-full relative 2xl:h-60 lg:h-48 sm:mt-32 h-48">
          <TokenSlider className="slider-left -left-16" />
          <div className="absolute 2xl:bottom-8 2xl:w-96 lg:w-72 lg:bottom-6 left-2/4 bottom-0 transform -translate-x-1/2 h-full sm:w-60 w-48 z-20">
            <picture className="flex flex-col justify-center items-center relative w-full">
              <img src={MetamaskFox} alt="MetaMask" />
            </picture>
          </div>
          <TokenSlider className="slider-right -right-16" />
        </div>
        <img
          className="city-top absolute sm:top-2/4 left-0 w-full transition-all duration-500 pointer-events-none"
          src={CityTopDark}
        />
      </section>
      <div className="large-spacer pt-12 pointer-events-none relative z-10">
        <img
          className="w-full"
          src={CityTop}
        />
      </div>
    </>
  );
};

export default WalletAnimation;
