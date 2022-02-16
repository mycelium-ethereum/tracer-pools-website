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
    return () => {
      window.removeEventListener("resize", toggleActiveStyles);
    };
    // eslint-disable-next-line
  }, []);
  return (
    <section
      className={
        "integrate-section flex h-auto items-start pt-6 sm:items-center md:pt-0 " +
        (isActive ? "active" : "")
      }
    >
      <div className="container relative mx-auto flex h-full w-full flex-col items-center justify-start px-4 lg:flex-row lg:justify-end xl:px-0 2xl:pb-36">
        <div className="force-flex left-4 z-10 mx-auto flex-col justify-center lg:absolute lg:mt-48 lg:flex-row lg:justify-start xl:left-0">
          <div className="integrate-text flex h-auto flex-col justify-center lg:w-96 xl:w-full">
            <h1
              id={"integrate-now"}
              className="mb-4 text-center text-3xl font-bold text-white lg:text-left lg:text-5xl 2xl:text-6xl"
            >
              Integrate Now
            </h1>
            <p className="fade-anim w-60 text-center text-lg font-normal text-white opacity-100 transition-all duration-500 sm:w-auto sm:text-lg lg:text-left lg:text-xl lg:opacity-0 xl:text-2xl">
              Seamlessly integrate into your proprietary trading interface or
              into a user-facing application
            </p>
            <Button
              id="launch-dev-docs"
              className="fade-anim mx-auto mt-6 lg:mx-0 lg:opacity-0"
              href="https://docs.tracer.finance/market-types/perpetual-pools/mechanism-design/upkeep"
            >
              Launch Dev Docs
            </Button>
          </div>
        </div>
        <div className="integrate-animation absolute -right-32 -top-16 w-2/5 transform-gpu sm:-right-14 sm:-top-20 sm:scale-50 md:-top-12 md:-right-10 lg:relative lg:-right-40 lg:top-0 lg:scale-50 xl:top-4 xl:-right-36 2xl:-right-32 2xl:top-0 2xl:scale-75">
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
