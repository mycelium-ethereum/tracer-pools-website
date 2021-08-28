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
  const createSlides = () => {
    const slides = [];
    const totalSlides = 2;
    for (var i = 0; i < totalSlides; i++) {
      slides.push(
        <>
          <div className="item relative">
            <img
              src={className.includes("slider-left") ? btc_left : btc_right}
              alt="BTC"
            />
            <span className="text-base absolute bottom-0 text-center ml-16 color-grey font-bold">
              <img
                src={className.includes("slider-left") ? TrendDown : TrendUp}
                alt={
                  className.includes("slider-left")
                    ? "trending-down"
                    : "trending-up"
                }
              />
              3DOWN-BTC/DAI
            </span>
          </div>
          <div className="item relative">
            <img
              src={className.includes("slider-left") ? eth_left : eth_right}
              alt="Eth"
            />
            <span className="text-base absolute bottom-0 text-center ml-16 color-grey font-bold">
              <img
                src={className.includes("slider-left") ? TrendDown : TrendUp}
                alt={
                  className.includes("slider-left")
                    ? "trending-down"
                    : "trending-up"
                }
              />
              2DOWN-ETH/DAI
            </span>
          </div>
          <div className="item relative">
            <img
              src={className.includes("slider-left") ? link_left : link_right}
              alt="Link"
            />
            <span className="text-base absolute bottom-0 text-center ml-16 color-grey font-bold">
              <img
                src={className.includes("slider-left") ? TrendDown : TrendUp}
                alt={
                  className.includes("slider-left")
                    ? "trending-down"
                    : "trending-up"
                }
              />
              5DOWN-LINK/DAI
            </span>
          </div>
        </>
      );
    }
    return slides;
  };

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
    // centerMode: true,
    focusOnSelect: false,
    pauseOnFocus: false,
    pauseOnHover: false,
    rtl: className.includes("slider-left") ? true : false,
    // responsive: [
    //   {
    //     breakpoint: 991,
    //     settings: {
    //       slidesToShow: 4,
    //       speed: 3000,
    //     },
    //   },
    //   {
    //     breakpoint: 750,
    //     settings: {
    //       slidesToShow: 3,
    //       speed: 3000,
    //     },
    //   },
    //   {
    //     breakpoint: 480,
    //     settings: {
    //       slidesToShow: 2,
    //       speed: 2000,
    //     },
    //   },
    // ],
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
            <span className="text-base absolute bottom-0 text-center ml-16 color-grey font-bold">
              <img
                className="trend absolute -left-4 top-1"
                src={className.includes("slider-left") ? TrendDown : TrendUp}
                alt={
                  className.includes("slider-left")
                    ? "trending-down"
                    : "trending-up"
                }
              />
              3DOWN-BTC/DAI
            </span>
          </div>
          <div className="item relative">
            <img
              src={className.includes("slider-left") ? eth_left : eth_right}
              alt="Eth"
            />
            <span className="text-base absolute bottom-0 text-center ml-16 color-grey font-bold">
              <img
                className="trend absolute -left-4 top-1"
                src={className.includes("slider-left") ? TrendDown : TrendUp}
                alt={
                  className.includes("slider-left")
                    ? "trending-down"
                    : "trending-up"
                }
              />
              2DOWN-ETH/DAI
            </span>
          </div>
          <div className="item relative">
            <img
              src={className.includes("slider-left") ? link_left : link_right}
              alt="Link"
            />
            <span className="text-base absolute bottom-0 text-center ml-16 color-grey font-bold">
              <img
                className="trend absolute -left-4 top-1"
                src={className.includes("slider-left") ? TrendDown : TrendUp}
                alt={
                  className.includes("slider-left")
                    ? "trending-down"
                    : "trending-up"
                }
              />
              5DOWN-LINK/DAI
            </span>
          </div>
          <div className="item relative">
            <img
              src={className.includes("slider-left") ? btc_left : btc_right}
              alt="BTC"
            />
            <span className="text-base absolute bottom-0 text-center ml-16 color-grey font-bold">
              <img
                className="trend absolute -left-4 top-1"
                src={className.includes("slider-left") ? TrendDown : TrendUp}
                alt={
                  className.includes("slider-left")
                    ? "trending-down"
                    : "trending-up"
                }
              />
              3DOWN-BTC/DAI
            </span>
          </div>
          <div className="item relative">
            <img
              src={className.includes("slider-left") ? eth_left : eth_right}
              alt="Eth"
            />
            <span className="text-base absolute bottom-0 text-center ml-16 color-grey font-bold">
              <img
                className="trend absolute -left-4 top-1"
                src={className.includes("slider-left") ? TrendDown : TrendUp}
                alt={
                  className.includes("slider-left")
                    ? "trending-down"
                    : "trending-up"
                }
              />
              2DOWN-ETH/DAI
            </span>
          </div>
          <div className="item relative">
            <img
              src={className.includes("slider-left") ? link_left : link_right}
              alt="Link"
            />
            <span className="text-base absolute bottom-0 text-center ml-16 color-grey font-bold">
              <img
                className="trend absolute -left-4 top-1"
                src={className.includes("slider-left") ? TrendDown : TrendUp}
                alt={
                  className.includes("slider-left")
                    ? "trending-down"
                    : "trending-up"
                }
              />
              5DOWN-LINK/DAI
            </span>
          </div>
          <div className="item relative">
            <img
              src={className.includes("slider-left") ? btc_left : btc_right}
              alt="BTC"
            />
            <span className="text-base absolute bottom-0 text-center ml-16 color-grey font-bold">
              <img
                className="trend absolute -left-4 top-1"
                src={className.includes("slider-left") ? TrendDown : TrendUp}
                alt={
                  className.includes("slider-left")
                    ? "trending-down"
                    : "trending-up"
                }
              />
              3DOWN-BTC/DAI
            </span>
          </div>
          <div className="item relative">
            <img
              src={className.includes("slider-left") ? eth_left : eth_right}
              alt="Eth"
            />
            <span className="text-base absolute bottom-0 text-center ml-16 color-grey font-bold">
              <img
                className="trend absolute -left-4 top-1"
                src={className.includes("slider-left") ? TrendDown : TrendUp}
                alt={
                  className.includes("slider-left")
                    ? "trending-down"
                    : "trending-up"
                }
              />
              2DOWN-ETH/DAI
            </span>
          </div>
          <div className="item relative">
            <img
              src={className.includes("slider-left") ? link_left : link_right}
              alt="Link"
            />
            <span className="text-base absolute bottom-0 text-center ml-16 color-grey font-bold">
              <img
                className="trend absolute -left-4 top-1"
                src={className.includes("slider-left") ? TrendDown : TrendUp}
                alt={
                  className.includes("slider-left")
                    ? "trending-down"
                    : "trending-up"
                }
              />
              5DOWN-LINK/DAI
            </span>
          </div>
        </Slider>
      </div>
    </>
  );
};

export default TokenSlider;
