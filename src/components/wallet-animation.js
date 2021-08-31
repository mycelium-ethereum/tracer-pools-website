import React from "react";
import TokenSlider from "../components/slider";
import Button from "../components/button";

// Images
import MetamaskFox from "/static/img/slider/metamask-fox.svg";
import CityBackground from "/static/img/home-page/city-background.png";
import BlueBackground from "/static/img/home-page/blue-background.png";

// CityBackground
const WalletAnimation = () => {
  return (
    <>
      <section className="panel relative h-screen w-full z-0 background-blue">
        <div className="container xl flex flex-col align-center justify-start h-full w-full relative z-10 mx-auto 2xl:pt-96 2xl:pt-36 xl:pt-24 lg:pt-32 xl:px-24 lg:px-12 px-4">
          <h1 className="mb-4 text-center lg:text-6xl text-4xl font-black text-white lg:leading-snug">
            Fungible ERC20
            <br />
            Tokenised Positions
          </h1>
          <p className="text-2xl color-grey text-center font-normal color-orange">
            That live in your wallet
          </p>
          <Button
            className="mt-6 h-12 w-48 text-center lg:text-xl"
            outlineButton
            linkTo="#"
          >
            Browse Tokens
          </Button>
        </div>
        <div className="w-full absolute 2xl:-bottom-48 2xl:h-60 lg:h-48 lg:bottom-12 h-48 bottom-48">
          <TokenSlider className="slider-left w-2/4 overflow-hidden bottom-0 h-full absolute lg:-left-16 -left-20 z-10" />
          <div className="absolute 2xl:bottom-8 2xl:w-96 2xl:w-64 lg:w-48 lg:bottom-0 left-2/4 transform -translate-x-1/2 h-full w-48 z-20">
            <picture className="flex flex-col justify-center items-center relative h-full ">
              <img
                className="2xl:h-96 xl:h-64 lg:h-40"
                src={MetamaskFox}
                alt="MetaMask"
              />
            </picture>
          </div>
          <TokenSlider className="slider-right w-2/4 overflow-hidden bottom-0 h-full absolute lg:-right-16 -right-20 z-10" />
        </div>
        <img
          className="absolute top-12 left-0 w-full"
          src={CityBackground}
        />
        <img
          className="absolute top-2/3 left-0 w-full"
          src={BlueBackground}
        />
      </section>
      <div className="large-spacer" />
    </>
  );
};

export default WalletAnimation;
