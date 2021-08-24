import React, { useEffect } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

// Assets
import token_left from "/static/img/slider/token-left.svg";
import token_right from "/static/img/slider/token-right.svg";
import token_road_left from "/static/img/slider/token-road-left.png";
import token_road_right from "/static/img/slider/token-road-right.png";

const TokenSlider = ({ className }) => {
  const createSlides = () => {
    const slides = [];
    const totalSlides = 8;
    for (var i = 0; i < totalSlides; i++) {
      slides.push(
        <div className="item" key={i}>
          <img
            src={className.includes("slider-left") ? token_left : token_right}
          />
        </div>
      );
    }
    return slides;
  };
  // const syncSliders = () => {
  //   this.slider1.slickGoTo(1);
  //   //   const sliders = document.querySelectorAll(".slick-slider");
  //   // sliders.forEach(slider => {
  //   //   // slider.slick(getSliderSettings());
  //   // })
  // };
  // useEffect(() => {
  //   syncSliders();
  // });
  const settings = {
    speed: 5000,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: "linear",
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: true,
    arrows: false,
    swipeToSlide: true,
    centerMode: true,
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
          {createSlides()}
        </Slider>
        <picture
          className={
            "slick-slider__rail d-block position-absolute " +
            (className.includes("slider-left") ? "start-0" : "end-0")
          }
          // className={"slick-slider__rail d-block position-absolute"}
        >
          <img
            src={
              className.includes("slider-left")
                ? token_road_left
                : token_road_right
            }
          />
        </picture>
      </div>
    </>
  );
};

export default TokenSlider;
