import React, { useEffect } from "react";
import TokenSlider from "../components/slider";
import Button from "../components/button";

// Images
import metamask_fox from "/static/img/slider/metamask-fox.svg";

const WalletAnimation = () => {
  const isMobile = () => {
    const width = window.innerWidth;
    if (width < 1024) {
      return true;
    } else {
      return false;
    }
  };
  const toggleActiveStyles = () => {
    const firstPanel = document.querySelector(".wallet-one");
    if (isMobile()) {
      firstPanel.classList.add("active");
    }
    else {
      firstPanel.classList.remove("active");
    }
  };
  useEffect(() => {
    toggleActiveStyles();
    window.addEventListener("resize", function () {
      toggleActiveStyles();
    });
  });
  return (
    <div id="pinMasterWallet" className="pin-master lg:z-0 z-20">
      <div id="pinContainerWallet" className="pin-container lg:pt-0 pt-32">
        <section className="panel absolute top-0 left-0 w-full relative wallet-one lg:h-full h-screen">
          <div className="container xl flex flex-col align-center justify-start h-full w-full mx-auto 2xl:pt-48 lg:pt-36 xl:px-24 lg:px-12 px-4">
            <h1 className="gradient-lightblue fade-anim opacity-0 mb-4 text-center">
              <span className="block lg:text-6xl text-4xl font-black">Fungible ERC20</span>
              <span className="block lg:text-6xl text-4xl  font-black">
                Tokenised Positions
              </span>
            </h1>
            <p className="lg:opacity-0 text-2xl color-grey text-center font-light">
              That live in your wallet
            </p>
            <Button className="mt-6 lg:opacity-0 lg:text-xl" outlineButton linkTo="#">
              Browse Tokens
            </Button>
          </div>
          <div className="w-full absolute 2xl:bottom-0 2xl:h-60 lg:h-48 lg:bottom-12 h-48 bottom-48">
            <TokenSlider className="slider-left w-8/12 overflow-hidden bottom-0 h-full absolute lg:-left-96 -left-20 z-0" />
            <div className="metamask-fox absolute 2xl:bottom-8 lg:w-96 lg:bottom-0 left-2/4 transform -translate-x-1/2 h-full w-48 z-10">
              <div className="undershadow absolute top-2/4 transform -translate-y-1/2 h-3/5 w-full rounded-full" />
              <picture className="flex flex-col justify-center items-center relative h-full bg-white">
                <img
                  className="2xl:h-96 xl:h-64 lg:h-40"
                  src={metamask_fox}
                  alt="MetaMask"
                />
              </picture>
            </div>
            <TokenSlider className="slider-right w-8/12 overflow-hidden bottom-0 h-full absolute lg:-right-96 -right-20 z-0" />
          </div>
        </section>
        <section className="panel absolute top-0 left-0 w-full h-full wallet-two">
          <div className="container xl flex flex-col align-center justify-start h-full w-full mx-auto 2xl:pt-48 lg:pt-36 xl:px-24 lg:px-12 px-4">
            <h1 className="gradient-lightblue mb-4 text-center">
              <span className="block text-6xl font-black">Fungible ERC20</span>
              <span className="block text-6xl font-black">
                Tokenised Positions
              </span>
            </h1>
            <p className="fade-anim opacity-0 text-2xl color-grey text-center">
              That live in your wallet
            </p>
            <Button className="mt-6 opacity-0" outlineButton linkTo="#">
              Browse Tokens
            </Button>
          </div>
        </section>
        <section className="panel absolute top-0 left-0 w-full h-full wallet-three">
          <div className="container xl flex flex-col align-center justify-start h-full w-full mx-auto 2xl:pt-48 lg:pt-36 xl:px-24 lg:px-12 px-4">
            <h1 className="gradient-lightblue mb-4 text-center">
              <span className="block text-6xl font-black">Fungible ERC20</span>
              <span className="block text-6xl font-black">
                Tokenised Positions
              </span>
            </h1>
            <p className="fade-anim opacity-0 text-2xl color-grey text-center">
              That live in your wallet
            </p>
            <Button className="mt-6 fade-anim opacity-0" outlineButton linkTo="#">
              Browse Tokens
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default WalletAnimation;
