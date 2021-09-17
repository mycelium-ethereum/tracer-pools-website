import React, { useEffect, useState } from "react";
import Button from "../components/button";

// Image assets
import Base from "/static/img/home-page/integrate/base.png";
import LayerOne from "/static/img/home-page/integrate/layer-1.svg";
import LayerTwo from "/static/img/home-page/integrate/layer-2.svg";
import LayerThree from "/static/img/home-page/integrate/layer-3-square.svg";
import LayerFour from "/static/img/home-page/integrate/layer-4-arrow.svg";

const IntegrateAnimation = () => {
  const [isActive, setIsActive] = useState(false);
  const isMobile = () => {
    return window.innerWidth < 1024;
  };
  const toggleActiveStyles = () => {
    setIsActive(isMobile());
  };
  useEffect(() => {
    toggleActiveStyles();
    window.addEventListener("resize", toggleActiveStyles());
    return function () {
      window.removeEventListener("resize", toggleActiveStyles);
    };
    // eslint-disable-next-line
  }, []);
  return (
    <section
      className={
        "integrate-section flex sm:items-center items-start h-auto md:pt-0 pt-6 " +
        (isActive ? "active" : "")
      }
    >
      <div className="flex h-full w-full container mx-auto relative items-center 2xl:pb-36 lg:flex-row lg:justify-end justify-start xl:px-0 flex-col px-4">
        <div
          className="force-flex lg:absolute xl:left-0 left-4 lg:mt-48 lg:justify-start lg:flex-row justify-center flex-col mx-auto z-10"
          data-stellar-ratio="1.2"
        >
          <div className="integrate-text xl:w-full lg:w-96 h-auto flex flex-col justify-center">
            <h1 className="2xl:text-6xl lg:text-5xl lg:text-left text-center text-3xl font-bold text-white mb-4">
              Integrate Now
            </h1>
            <p className="fade-anim transition-all duration-500 text-center xl:text-2xl lg:opacity-0 lg:text-xl lg:text-left sm:text-lg sm:w-auto w-60 text-lg text-white font-normal opacity-100">
              Seamlessly integrate into your proprietary trading interface or
              into a user-facing application
            </p>
            <Button
              className="fade-anim mt-6 lg:opacity-0 lg:mx-0 mx-auto"
              href="https://docs.tracer.finance/market-types/perpetual-pools/mechanism-design/upkeep"
            >
              Launch Dev Docs
            </Button>
          </div>
        </div>
        <div className="w-2/5 integrate-animation 2xl:scale-75 2xl:-right-32 transform-gpu 2xl:top-0 xl:top-4 xl:-right-36 lg:scale-50 lg:-right-40 lg:top-0 lg:relative md:-top-12 md:-right-10 sm:scale-50 sm:-right-14 sm:-top-20 absolute -right-32 -top-16">
          <img
            className="integrate-animation__tile lg:opacity-0"
            src={Base}
            alt=""
          />
          <img
            className="integrate-animation__layerone lg:opacity-0"
            src={LayerOne}
            alt=""
          />
          <img
            className="integrate-animation__layertwo lg:opacity-0"
            src={LayerTwo}
            alt=""
          />
          <img
            className="integrate-animation__layerthree lg:opacity-0"
            src={LayerThree}
            alt=""
          />
          <img
            className="integrate-animation__layerfour lg:opacity-0"
            src={LayerFour}
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

export default IntegrateAnimation;
