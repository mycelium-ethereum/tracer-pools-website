import React, { useEffect } from "react";
import Parallax from "parallax-js";

// Images
import Banner from "/static/img/home-page/banner.png";
import BlueSquare from "/static/img/home-page/background/blue-square.svg";
import GreenArrow from "/static/img/home-page/background/green-arrow.svg";
import BlueArrow from "/static/img/home-page/background/blue-arrow.svg";
import BlueArrowDown from "/static/img/home-page/background/blue-arrow-down.png";
import PinkArrow from "/static/img/home-page/background/pink-arrow-right.png";
import PinkSquare from "/static/img/home-page/background/pink-square.png";
import PinkRectangle from "/static/img/home-page/background/pink-rectangle.png";

const BackgroundParallax = () => {
  useEffect(() => {
    var scene = document.querySelector(".tile-bg");
    var scene2 = document.querySelector(".square-middle");
    new Parallax(scene);
    new Parallax(scene2);
    // var parallaxInstance = new Parallax(scene);
  });
  return (
    <>
      <div className="absolute left-0 w-full h-full z-10 pointer-events-none sm:top-0 -top-32">
        <div className="absolute tile-bg">
          {/* <img className="w-screen" data-depth="0.1" src={Banner} alt="Banner" /> */}
          <div className="absolute square-middle z-30">
            <img
              className="absolute opacity-50 blue-square"
              data-depth="0.2"
              src={BlueSquare}
              alt="Blue square"
            />
          </div>
          <img
            className="absolute opacity-50 blue-arrow"
            data-depth="0.2"
            src={BlueArrow}
            alt="Blue arrow"
          />
          <img
            className="absolute opacity-50 green-arrow z-20"
            data-depth="0.4"
            src={GreenArrow}
            alt="Green arrow"
          />
          <img
            className="absolute opacity-50 pink-arrow"
            data-depth="0.3"
            src={PinkArrow}
            alt="Pink arrow"
          />
          <img
            className="absolute opacity-50 blue-square-medium"
            data-depth="0.1"
            src={BlueSquare}
            alt="Blue square medium"
          />
          <img
            className="absolute opacity-50 blue-arrow-down"
            data-depth="0.2"
            src={BlueArrowDown}
            alt="Blue arrow down"
          />
          <img
            className="absolute opacity-50 pink-square"
            data-depth="0.2"
            src={PinkSquare}
            alt="Pink square"
          />
          <img
            className="absolute opacity-50 pink-rectangle"
            data-depth="0.1"
            src={PinkRectangle}
            alt="Pink rectangle"
          />
        </div>
      </div>
      <div className="absolute top-0 left-0 w-full h-full z-0 overflow-hidden bg-darkblue" />
    </>
  );
};

export default BackgroundParallax;