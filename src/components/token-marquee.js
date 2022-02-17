import React from "react";
import Marquee from "react-fast-marquee";
import { longPosTokens, shortPosTokens } from "./token-marquee-tokens";
const TokenMarquee = ({ className }) => {
  const createSlideGroup = (totalSlides, generatedSlides, key) => {
    for (var i = 0; i < totalSlides; i++) {
      generatedSlides.push(
        <div
          className="mx-6 flex flex-col items-center justify-start md:w-28"
          // Generate key for unique elements
          key={key + i * 3}
        >
          <img
            className="mx-auto w-20 md:w-full"
            src={
              className.includes("slider-left")
                ? longPosTokens[i].image
                : shortPosTokens[i].image
            }
            loading="lazy"
            alt=""
          />
          <span className="mt-2 block text-center font-bold text-white">
            {className.includes("slider-left")
              ? longPosTokens[i].name
              : shortPosTokens[i].name}
          </span>
        </div>
      );
    }
  };
  const createSlides = () => {
    const generatedSlides = [];
    const totalSlides = longPosTokens.length;
    const slideMultiplier = 3;
    for (let j = 0; j < slideMultiplier; j++) {
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
          " token-slider absolute bottom-10 z-10 w-2/4 overflow-hidden sm:bottom-4 lg:bottom-0"
        }
      >
        <Marquee {...settings}>{createSlides()}</Marquee>
      </div>
    </>
  );
};

export default TokenMarquee;
