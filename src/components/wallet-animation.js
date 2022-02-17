import React from "react";
import TokenMarquee from "../components/token-marquee";
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
        className="panel bg-blue relative z-0 w-full overflow-hidden lg:h-full"
        id="token-trigger"
      >
        <div className="align-center container relative z-10 mx-auto flex h-full w-full flex-col justify-start px-4 pt-60 xl:px-0 xl:pt-80 2xl:pt-96">
          <h1
            id="fade1"
            className="mb-4 text-center text-3xl font-black text-white lg:text-5xl lg:leading-snug lg:opacity-0 2xl:mt-12"
          >
            Long-term leveraged tokens
            <br />
            with no minimum spend
          </h1>
          <p
            id="fade2"
            className="color-grey color-orange text-center text-lg font-normal md:text-2xl lg:opacity-0"
          >
            Mint, stake, trade, or hedge
          </p>
          <Button
            className="mx-auto mt-6 lg:opacity-0"
            href="https://pools.tracer.finance/stakepooltoken/"
            id="fade3"
          >
            Browse Tokens
          </Button>
        </div>
        <div className="relative mt-12 mb-0 h-48 w-full sm:mt-16 sm:mb-12 lg:h-48 2xl:h-60">
          <TokenMarquee className="slider-left -left-16" />
          <div className="absolute left-2/4 bottom-0 z-20 h-full w-48 -translate-x-1/2 transform sm:w-60 lg:bottom-6 lg:w-72 2xl:bottom-8 2xl:w-96">
            <picture className="relative flex w-full flex-col items-center justify-center">
              <img src={MetamaskFox} alt="MetaMask" />
            </picture>
          </div>
          <TokenMarquee className="slider-right -right-16" />
        </div>
        <img
          className="city-top pointer-events-none absolute left-0 w-full transition-all duration-500 sm:top-2/4"
          src={CityTopDark}
          alt="City Background"
          loading="eager"
        />
      </section>
      <div className="large-spacer pointer-events-none relative z-10 overflow-hidden pt-12">
        <img
          className="w-full"
          src={CityTop}
          alt="City Background"
          loading="lazy"
        />
      </div>
    </>
  );
};

export default WalletAnimation;
