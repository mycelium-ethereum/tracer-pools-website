import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Marquee from "react-fast-marquee";

// Assets
import EthereumShort from "/static/img/home-page/slider/eth-s.svg";
import BitcoinShort from "/static/img/home-page/slider/btc-s.svg";
import EthereumLong from "/static/img/home-page/slider/eth-l.svg";
import BitcoinLong from "/static/img/home-page/slider/btc-l.svg";

const TokenMarquee = ({ className }) => {
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
  const createSlideGroup = (totalSlides, generatedSlides, key) => {
    for (var i = 0; i < totalSlides; i++) {
      generatedSlides.push(
        <div
          className="flex flex-col justify-start items-center md:w-28 mx-6"
          // Generate key for unique elements
          key={key + i * 3}
        >
          <img
            className="md:w-full w-20 mx-auto"
            src={
              className.includes("slider-left")
                ? longTokenImages[i]
                : shortTokenImages[i]
            }
            loading="lazy"
            alt=""
          />
          <span className="block text-white text-center mt-2 font-bold">
            {className.includes("slider-left")
              ? tokenShortPosTitles[i]
              : tokenLongPosTitles[i]}
          </span>
        </div>
      );
    }
  };
  const createSlides = () => {
    const generatedSlides = [];
    const totalSlides = tokenShortPosTitles.length;
    const slideMultiplier = 3;
    for (var j = 0; j < slideMultiplier; j++) {
      createSlideGroup(totalSlides, generatedSlides, j + 1);
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
          " token-slider w-2/4 overflow-hidden lg:bottom-0 sm:bottom-4 bottom-10 absolute z-10"
        }
      >
        <Marquee {...settings}>{createSlides()}</Marquee>
      </div>
    </>
  );
};

export default TokenMarquee;
