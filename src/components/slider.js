import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

// Assets
import eth_logo from "/static/img/slider/eth.svg";
import btc_logo from "/static/img/slider/btc.svg";
import link_logo from "/static/img/slider/link.svg";
import trend_down from "/static/img/slider/trending-down.svg";
import trend_up from "/static/img/slider/trending-up.svg";

const ProfileSlider = ({className}) => {
  const trendArrow = (className == "slider-left") ? trend_down : trend_up;
  const settings = {
    speed: 5000,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: "linear",
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: true,
    swipeToSlide: true,
    centerMode: true,
    focusOnSelect: false,
    pauseOnFocus: false,
    pauseOnHover: false,
    className: {className},
    rtl: (className == "slider-left") ? false : true,
    
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
    <Slider {...settings}>
      <div className="item">
        <img src={trendArrow}/>
        <img src={eth_logo} alt="Ethererum Logo" />
      </div>
      <div className="item">
        <img src={trendArrow}/>
        <img src={btc_logo} alt="Bitcoin Logo" />
      </div>
      <div className="item">
        <img src={trendArrow}/>
        <img src={link_logo} alt="Bitcoin Logo" />
      </div>
    </Slider>
  );
};

export default ProfileSlider;
