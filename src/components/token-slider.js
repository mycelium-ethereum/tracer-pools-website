import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Marquee from "react-fast-marquee";

// Assets
import EthereumShort from "/static/img/home-page/slider/eth-s.svg";
import BitcoinShort from "/static/img/home-page/slider/btc-s.svg";
import EthereumLong from "/static/img/home-page/slider/eth-l.svg";
import BitcoinLong from "/static/img/home-page/slider/btc-l.svg";

const TokenSlider = ({ className }) => {
  const shortTokenImages = [
    EthereumShort,
    EthereumShort,
    BitcoinShort,
    BitcoinShort,
  ];
  const longTokenImages = [
    BitcoinLong,
    BitcoinLong,
    EthereumLong,
    EthereumLong,
  ];
  const tokenShortPosTitles = [
    "3L-BTC/USDC",
    "1L-BTC/USDC",
    "3L-ETH/USDC",
    "1L-ETH/USDC",
  ];
  const tokenLongPosTitles = [
    "1S-ETH/USDC",
    "3S-ETH/USDC",
    "1S-BTC/USDC",
    "3S-BTC/USDC",
  ];
  const totalSlides = shortTokenImages.length * 2;
  const createSlides = () => {
    const generatedSlides = [];
    for (var i = 0; i < totalSlides; i++) {
      var item = i;
      if (i >= totalSlides / 2) {
        item -= totalSlides / 2;
      }
      generatedSlides.push(
        <div className="item items-start md:w-60 md:h-60 w-36 h-36 " key={i}>
          <div className="relative mx-auto w-min">
            <img
              className="token"
              src={
                className.includes("slider-left")
                  ? longTokenImages[item]
                  : shortTokenImages[item]
              }
              alt=""
            />
          </div>
          <span className="block text-white text-center mt-2">
            {className.includes("slider-left")
              ? tokenShortPosTitles[item]
              : tokenLongPosTitles[item]}
          </span>
        </div>
      );
    }
    return generatedSlides;
  };
  const settings = {
    gradient: false,
    speed: 60,
    direction: className.includes("slider-left") ? "right" : "left",
  };
  return (
    <>
      <div
        className={
          className +
          " token-slider w-2/4 overflow-hidden lg:bottom-0 sm:bottom-4 bottom-10 lg:h-36 h-28 absolute z-10 pointer-events-none"
        }
      >
        <Marquee {...settings}>{createSlides()}</Marquee>
      </div>
    </>
  );
};

export default TokenSlider;
