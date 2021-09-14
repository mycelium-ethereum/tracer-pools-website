import React, { useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

// Assets
import CardanoToken from "/static/img/slider/cardano.svg";
import ChainlinkToken from "/static/img/slider/chainlink.svg";
import Bitcoin from "/static/img/slider/bitcoin.svg";
import EthereumToken from "/static/img/slider/ethereum.svg";
import BalancerToken from "/static/img/slider/balancer.svg";
import CompoundToken from "/static/img/slider/compound.svg";
import CurveDAOToken from "/static/img/slider/curve-dao.png";
import YearnToken from "/static/img/slider/yearn.svg";
import SushiswapToken from "/static/img/slider/sushiswap.svg";
import ShortPosition from "/static/img/slider/short-position.svg";
import LongPosition from "/static/img/slider/long-position.svg";

const TokenSlider = ({ className }) => {
  const tokenImages = [
    CardanoToken,
    ChainlinkToken,
    Bitcoin,
    EthereumToken,
    BalancerToken,
    CompoundToken,
    CurveDAOToken,
    YearnToken,
    SushiswapToken,
  ];
  const tokenShortPosTitles = [
    "2DOWN-ADA/DAI",
    "5DOWN-LINK/DAI",
    "3DOWN-BTC/DAI",
    "2DOWN-ETH/DAI",
    "5DOWN-BAL/DAI",
    "3DOWN-COMP/DAI",
    "2DOWN-ETH/DAI",
    "5DOWN-YFI/DAI",
    "3DOWN-SUSHI/DAI",
  ];
  const tokenLongPosTitles = [
    "2UP-ADA/DAI",
    "5UP-LINK/DAI",
    "3UP-BTC/DAI",
    "2UP-ETH/DAI",
    "5UP-BAL/DAI",
    "3UP-COMP/DAI",
    "2UP-ETH/DAI",
    "5UP-YFI/DAI",
    "3UP-SUSHI/DAI",
  ];
  const totalSlides = 5;
  const createSlides = () => {
    const generatedSlides = [];
    for (var i = 0; i < totalSlides; i++) {
      generatedSlides.push(
        <div className="item flex items-start" key={i}>
          <div className="relative mx-auto w-min">
            <img
              className="token"
              src={tokenImages[i]}
              alt={Object.keys(tokenImages[i])[0].toString()}
            />
            <img
              className={
                "trend absolute bottom-0 w-8 h-8 " +
                (className.includes("slider-left") ? "left-0" : "right-0")
              }
              src={
                className.includes("slider-left") ? ShortPosition : LongPosition
              }
              alt={
                className.includes("slider-left")
                  ? "Short position"
                  : "Long position"
              }
            />
          </div>
          <span className="block text-white text-center mt-2">
            {className.includes("slider-left")
              ? tokenShortPosTitles[i]
              : tokenLongPosTitles[i]}
          </span>
        </div>
      );
    }
    return generatedSlides;
  };
  const [autoplay, setAutoplay] = useState(true);
  const settings = {
    speed: 2000,
    autoplay: autoplay,
    autoplaySpeed: 2000,
    cssEase: "linear",
    slidesToShow: 6,
    slidesToScroll: 1,
    infinite: true,
    arrows: false,
    touchMove: false,
    swipeToSlide: false,
    focusOnSelect: false,
    pauseOnFocus: false,
    pauseOnHover: false,
    fade: false,
    rtl: className.includes("slider-left") ? true : false,
    afterChange: (index) => {
      if (totalSlides - 1 >= index) {
        setAutoplay(false);
        setAutoplay(true);
      }
    },
    responsive: [
      {
        breakpoint: 991,
        settings: {
          speed: 1750,
        },
      },
      {
        breakpoint: 750,
        settings: {
          speed: 1000,
          // slidesToShow: 5,
        },
      },
      {
        breakpoint: 480,
        settings: {
          // slidesToShow: 4,
          speed: 1000,
        },
      },
    ],
  };
  return (
    <>
      <div
        className={
          className +
          " token-slider w-2/4 overflow-hidden lg:bottom-0 sm:bottom-4 bottom-10 lg:h-36 h-28 absolute z-10 pointer-events-none"
        }
      >
        <Slider {...settings}>{createSlides()}</Slider>
      </div>
    </>
  );
};

export default TokenSlider;
