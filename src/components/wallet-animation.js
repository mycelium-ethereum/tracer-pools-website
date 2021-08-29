import React from "react";
import { Link } from "gatsby";
import TokenSlider from "../components/slider";
import Button from "../components/button";

// Images
import metamask_fox from "/static/img/slider/metamask-fox.svg";

const WalletAnimation = () => {
  return (
    <div id="pinMasterWallet" className="pin-master">
      <div id="pinContainerWallet" className="pin-container">
        <section className="panel relative wallet-one">
          <div className="container xl flex flex-col align-center justify-start h-full w-full mx-auto 2xl:pt-48 lg:pt-36">
            <h1 className="gradient-lightblue fade-anim mb-4 text-center">
              <span className="block text-6xl font-black">Fungible ERC20</span>
              <span className="block text-6xl font-black">
                Tokenised Positions
              </span>
            </h1>
            <p className="opacity-0 text-2xl color-grey text-center">
              That live in your wallet
            </p>
            <Button className="mt-6 z-11 opacity-0" outlineButton linkTo="#">
              Browse Tokens
            </Button>
          </div>
          <div className="w-full absolute 2xl:bottom-0 2xl:h-60 lg:h-48 lg:bottom-12">
            <TokenSlider className="w-8/12 overflow-hidden bottom-0 h-full slider-left absolute" />
            <div className="metamask-fox 2xl:w-96 2xl:-bottom-4 h-full lg:-bottom-6 absolute z-10 left-2/4 transform -translate-x-1/2">
              <div className="undershadow absolute top-2/4 transform -translate-y-1/2 h-3/5 w-full rounded-full" />
              <picture className="flex flex-col justify-center items-center relative h-full z-10 bg-white">
                <img
                  className="2xl:h-64 lg:h-40"
                  src={metamask_fox}
                  alt="MetaMask"
                />
              </picture>
            </div>
            <TokenSlider className="w-8/12 overflow-hidden bottom-0 h-full slider-right absolute" />
          </div>
        </section>
        <section className="panel wallet-two">
          <div className="container xl flex flex-col align-center justify-start h-full w-full mx-auto 2xl:pt-48 lg:pt-36">
            <h1 className="gradient-lightblue mb-4 text-center">
              <span className="block text-6xl font-black">Fungible ERC20</span>
              <span className="block text-6xl font-black">
                Tokenised Positions
              </span>
            </h1>
            <p className="fade-anim text-2xl color-grey text-center">
              That live in your wallet
            </p>
            <Button className="mt-6 z-11 opacity-0" outlineButton linkTo="#">
              Browse Tokens
            </Button>
          </div>
        </section>
        <section className="panel wallet-three">
          <div className="container xl flex flex-col align-center justify-start h-full w-full mx-auto 2xl:pt-48 lg:pt-36">
            <h1 className="gradient-lightblue mb-4 text-center">
              <span className="block text-6xl font-black">Fungible ERC20</span>
              <span className="block text-6xl font-black">
                Tokenised Positions
              </span>
            </h1>
            <p className="text-2xl color-grey text-center">
              That live in your wallet
            </p>
            <Button className="mt-6 z-11 fade-anim" outlineButton linkTo="#">
              Browse Tokens
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default WalletAnimation;
