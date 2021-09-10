import React from "react";
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
  const createSlides = () => {
    const totalSlides = tokenImages.length;
    const generatedSlides = [];
    for (var i = 0; i < totalSlides; i++) {
      generatedSlides.push(
        <div className="item flex items-start" key={i}>
          <div className="relative">
            <img
              className="token mx-auto"
              src={tokenImages[i]}
              alt={Object.keys(tokenImages[i])[0].toString()}
            />
            <img
              className={
                "trend absolute bottom-0 w-8 h-8 " +
                (className.includes("slider-left") ? "lg:left-5 left-9" : "lg:right-5 right-9")
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
  const settings = {
    speed: 2000,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    slidesToShow: 6,
    slidesToScroll: 1,
    infinite: true,
    arrows: false,
    swipeToSlide: false,
    focusOnSelect: false,
    pauseOnFocus: false,
    pauseOnHover: false,
    rtl: className.includes("slider-left") ? true : false,
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
          slidesToShow: 3,
          speed: 1500,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          speed: 1500,
        },
      },
    ],
  };
  return (
    <>
      <div className={className}>
        <Slider {...settings}>{createSlides()}</Slider>
      </div>
    </>
  );
};

export default TokenSlider;
