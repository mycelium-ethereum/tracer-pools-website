import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

// Assets
import eth_left from "/static/img/slider/eth-left.svg";
import link_left from "/static/img/slider/link-left.svg";
import btc_left from "/static/img/slider/btc-left.svg";
import eth_right from "/static/img/slider/eth-right.svg";
import link_right from "/static/img/slider/link-right.svg";
import btc_right from "/static/img/slider/btc-right.svg";
import TrendDown from "/static/img/slider/trend-down.svg";
import TrendUp from "/static/img/slider/trend-up.svg";

const TokenSlider = ({ className }) => {
  const settings = {
    speed: 2000,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: "linear",
    slidesToShow: 6,
    slidesToScroll: 1,
    infinite: true,
    arrows: false,
    swipeToSlide: true,
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
        <Slider {...settings}>
          <div className="item relative">
            <img
              src={className.includes("slider-left") ? btc_left : btc_right}
              alt="BTC"
            />
            <span className="text-base absolute 2xl:bottom-0 sm:bottom-4 bottom-12 text-center xl:ml-16 ml-0 text-white font-bold">
              <img
                className="trend absolute -left-4 top-1"
                src={className.includes("slider-left") ? TrendDown : TrendUp}
                alt={
                  className.includes("slider-left")
                    ? "trending-down"
                    : "trending-up"
                }
              />

              {className.includes("slider-left")
                ? "3DOWN-BTC/DAI"
                : "3UP-BTC/DAI"}
            </span>
          </div>
          <div className="item relative">
            <img
              src={className.includes("slider-left") ? eth_left : eth_right}
              alt="Eth"
            />
            <span className="text-base absolute 2xl:bottom-0 sm:bottom-4 bottom-12 text-center xl:ml-16 ml-0 text-white font-bold">
              <img
                className="trend absolute -left-4 top-1"
                src={className.includes("slider-left") ? TrendDown : TrendUp}
                alt={
                  className.includes("slider-left")
                    ? "trending-down"
                    : "trending-up"
                }
              />
              {className.includes("slider-left")
                ? "2DOWN-BTC/DAI"
                : "2UP-ETH/DAI"}
            </span>
          </div>
          <div className="item relative">
            <img
              src={className.includes("slider-left") ? link_left : link_right}
              alt="Link"
            />
            <span className="text-base absolute 2xl:bottom-0 sm:bottom-4 bottom-12 text-center xl:ml-16 ml-0 text-white font-bold">
              <img
                className="trend absolute -left-4 top-1"
                src={className.includes("slider-left") ? TrendDown : TrendUp}
                alt={
                  className.includes("slider-left")
                    ? "trending-down"
                    : "trending-up"
                }
              />
                            {className.includes("slider-left") ? "5DOWN-LINK/DAI" : "5UP-LINK/DAI"}

            </span>
          </div>
          <div className="item relative">
            <img
              src={className.includes("slider-left") ? btc_left : btc_right}
              alt="BTC"
            />
            <span className="text-base absolute 2xl:bottom-0 sm:bottom-4 bottom-12 text-center xl:ml-16 ml-0 text-white font-bold">
              <img
                className="trend absolute -left-4 top-1"
                src={className.includes("slider-left") ? TrendDown : TrendUp}
                alt={
                  className.includes("slider-left")
                    ? "trending-down"
                    : "trending-up"
                }
              />
              {className.includes("slider-left")
                ? "3DOWN-BTC/DAI"
                : "3UP-BTC/DAI"}
            </span>
          </div>
          <div className="item relative">
            <img
              src={className.includes("slider-left") ? eth_left : eth_right}
              alt="Eth"
            />
            <span className="text-base absolute 2xl:bottom-0 sm:bottom-4 bottom-12 text-center xl:ml-16 ml-0 text-white font-bold">
              <img
                className="trend absolute -left-4 top-1"
                src={className.includes("slider-left") ? TrendDown : TrendUp}
                alt={
                  className.includes("slider-left")
                    ? "trending-down"
                    : "trending-up"
                }
              />
              {className.includes("slider-left")
                ? "2DOWN-BTC/DAI"
                : "2UP-ETH/DAI"}
            </span>
          </div>
          <div className="item relative">
            <img
              src={className.includes("slider-left") ? link_left : link_right}
              alt="Link"
            />
            <span className="text-base absolute 2xl:bottom-0 sm:bottom-4 bottom-12 text-center xl:ml-16 ml-0 text-white font-bold">
              <img
                className="trend absolute -left-4 top-1"
                src={className.includes("slider-left") ? TrendDown : TrendUp}
                alt={
                  className.includes("slider-left")
                    ? "trending-down"
                    : "trending-up"
                }
              />
                            {className.includes("slider-left") ? "5DOWN-LINK/DAI" : "5UP-LINK/DAI"}

            </span>
          </div>
          <div className="item relative">
            <img
              src={className.includes("slider-left") ? btc_left : btc_right}
              alt="BTC"
            />
            <span className="text-base absolute 2xl:bottom-0 sm:bottom-4 bottom-12 text-center xl:ml-16 ml-0 text-white font-bold">
              <img
                className="trend absolute -left-4 top-1"
                src={className.includes("slider-left") ? TrendDown : TrendUp}
                alt={
                  className.includes("slider-left")
                    ? "trending-down"
                    : "trending-up"
                }
              />
              {className.includes("slider-left")
                ? "3DOWN-BTC/DAI"
                : "3UP-BTC/DAI"}
            </span>
          </div>
          <div className="item relative">
            <img
              src={className.includes("slider-left") ? eth_left : eth_right}
              alt="Eth"
            />
            <span className="text-base absolute 2xl:bottom-0 sm:bottom-4 bottom-12 text-center xl:ml-16 ml-0 text-white font-bold">
              <img
                className="trend absolute -left-4 top-1"
                src={className.includes("slider-left") ? TrendDown : TrendUp}
                alt={
                  className.includes("slider-left")
                    ? "trending-down"
                    : "trending-up"
                }
              />
              {className.includes("slider-left")
                ? "2DOWN-BTC/DAI"
                : "2UP-ETH/DAI"}
            </span>
          </div>
          <div className="item relative">
            <img
              src={className.includes("slider-left") ? link_left : link_right}
              alt="Link"
            />
            <span className="text-base absolute 2xl:bottom-0 sm:bottom-4 bottom-12 text-center xl:ml-16 ml-0 text-white font-bold">
              <img
                className="trend absolute -left-4 top-1"
                src={className.includes("slider-left") ? TrendDown : TrendUp}
                alt={
                  className.includes("slider-left")
                    ? "trending-down"
                    : "trending-up"
                }
              />
                            {className.includes("slider-left") ? "5DOWN-LINK/DAI" : "5UP-LINK/DAI"}

            </span>
          </div>
        </Slider>
      </div>
    </>
  );
};

export default TokenSlider;
