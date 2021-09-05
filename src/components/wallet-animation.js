import React from "react";
import TokenSlider from "../components/slider";
import Button from "../components/button";

// Images
import MetamaskFox from "/static/img/slider/metamask-fox.svg";
import CityTopDark from "/static/img/home-page/city/city-top-dark.svg";
import BlueBackground from "/static/img/home-page/city/blue-background.png";
import CityTop from "/static/img/home-page/city/city-top.png";

// CityBackground
const WalletAnimation = () => {
  return (
    <>
      <section
        className="panel relative lg:h-screen h-auto w-full z-0 background-blue"
        id="token-trigger"
      >
        <div className="container xl flex flex-col align-center justify-start h-full w-full relative z-10 mx-auto 2xl:pt-36 xl:pt-60 xl:px-24 lg:px-12 lg:pt-52 lg:pb-48 pt-48 px-4">
          <h1
            id="fade1"
            className="mb-4 text-center lg:text-6xl text-4xl font-black text-white lg:leading-snug"
          >
            Fungible ERC20
            <br />
            Tokenised Positions
          </h1>
          <p
            id="fade2"
            className="text-2xl color-grey text-center font-normal color-orange"
          >
            That live in your wallet
          </p>
          <Button
            className="mt-6 h-12 w-48 text-center lg:text-xl transition-all duration-500 sm:opacity-0"
            outlineButton
            linkTo="#"
            id="fade3"
          >
            Browse Tokens
          </Button>
        </div>
        <div className="w-full absolute 2xl:h-60 xl:-bottom-48 lg:h-48 lg:-bottom-12 sm:-bottom-6 h-48 -bottom-60">
          <TokenSlider className="slider-left w-2/4 overflow-hidden bottom-0 h-full absolute lg:-left-16 -left-16 z-10" />
          <div className="absolute 2xl:bottom-8 2xl:w-96 lg:w-72 lg:bottom-6 left-2/4 transform -translate-x-1/2 h-full w-48 z-20">
            <picture className="flex flex-col justify-center items-center relative w-full">
              <img
                src={MetamaskFox}
                alt="MetaMask"
              />
            </picture>
          </div>
          <TokenSlider className="slider-right w-2/4 overflow-hidden bottom-0 h-full absolute lg:-right-16 -right-16 z-10" />
        </div>
        <img
          className="city-top absolute sm:top-2/4 left-0 w-full transition-all duration-500"
          src={CityTopDark}
        />
        <img
          className="city-background absolute lg:top-full top-48 left-0 w-full transition-all duration-500"
          src={BlueBackground}
        />
      </section>
      <div className="large-spacer relative z-10">
        <img
          className="absolute w-full bottom-0 left-2/4 transform -translate-x-1/2 z-0"
          src={CityTop}
        />
      </div>
    </>
  );
};

export default WalletAnimation;
