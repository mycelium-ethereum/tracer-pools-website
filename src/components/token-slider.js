import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

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
  const totalSlides = shortTokenImages.length;
  const createSlides = () => {
    const generatedSlides = [];
    for (var i = 0; i < totalSlides; i++) {
      generatedSlides.push(
        <div className="item flex items-start" key={i}>
          <div className="relative mx-auto w-min">
            <img
              className="token"
              src={
                className.includes("slider-left")
                  ? longTokenImages[i]
                  : shortTokenImages[i]
              }
              alt=""
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
    // Temporary hacky fix
    for (var j = 0; j < totalSlides; j++) {
      generatedSlides.push(generatedSlides[j]);
    }
    // for (var k = 0; k < totalSlides; k++) {
    //   generatedSlides.push(generatedSlides[k]);
    // }
    return generatedSlides;
  };
  const settings = {
    speed: 2000,
    // autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    slidesToShow: 9,
    slidesToScroll: 1,
    infinite: true,
    arrows: false,
    touchMove: false,
    swipeToSlide: false,
    focusOnSelect: false,
    pauseOnFocus: false,
    pauseOnHover: false,
    variableWidth: true,
    fade: false,
    rtl: className.includes("slider-left") ? true : false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          speed: 1750,
          autoplay: false,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
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
