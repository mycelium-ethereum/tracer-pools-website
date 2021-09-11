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
        className="panel relative lg:h-screen h-auto w-full z-0 bg-blue"
        id="token-trigger"
      >
        <div className="container flex flex-col align-center justify-start h-full w-full relative z-10 mx-auto 2xl:pt-96 xl:pt-72 xl:px-0 pt-60 px-4">
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
            className="mt-6 h-12 w-48 text-center transition-all duration-500 mx-auto border border-white lg:opacity-0"
            linkTo="#"
            id="fade3"
          >
            Browse Tokens
          </Button>
        </div>
        <div className="w-full 2xl:h-60 xl:-bottom-48 lg:h-48 lg:-bottom-12 lg:absolute sm:mt-48 relative h-48">
          <TokenSlider className="token-slider slider-left w-2/4 overflow-hidden lg:bottom-0 sm:bottom-4 bottom-10 lg:h-36 h-28 absolute -left-16 z-10" />
          <div className="absolute 2xl:bottom-8 2xl:w-96 lg:w-72 lg:bottom-6 left-2/4 bottom-0 transform -translate-x-1/2 h-full sm:w-60 w-48 z-20">
            <picture className="flex flex-col justify-center items-center relative w-full">
              <img src={MetamaskFox} alt="MetaMask" />
            </picture>
          </div>
          <TokenSlider className="token-slider slider-right w-2/4 overflow-hidden lg:bottom-0 lg:h-36 sm:bottom-4 bottom-10 h-28 absolute -right-16 z-10" />
        </div>
        <img
          className="city-top absolute sm:top-2/4 left-0 w-full transition-all duration-500"
          src={CityTopDark}
        />
      </section>
      <div className="large-spacer pointer-events-none relative z-10">
        <img
          className="absolute w-full -bottom-0.5 left-2/4 transform -translate-x-1/2 z-0"
          src={CityTop}
        />
      </div>
    </>
  );
};

export default WalletAnimation;
