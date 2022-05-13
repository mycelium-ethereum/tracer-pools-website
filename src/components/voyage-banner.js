import React from "react";
import VoyageBannerGIF from "/static/img/home-page/banner/voyage-banner.gif";
import VoyageClipping from "/static/img/home-page/banner/clipping.png";
import Button from "../components/button";
import { Link } from "gatsby";

const VoyageBanner = () => {
  return (
    <Link to="/radar/the-tracer-voyage/">
      <div className="group fixed top-[64px] left-0 z-40 h-[123px] w-full transition-all duration-700 sm:top-[101px] sm:h-[162px] sm:w-[376px] sm:-translate-x-[245px] sm:hover:-translate-x-[70px]">
        <img
          src={VoyageBannerGIF}
          className="absolute bottom-0 left-0 h-full w-full"
        />
        <img
          src={VoyageClipping}
          className="absolute -top-[40px] left-1/2 min-w-[250px] -translate-x-[calc(50%+10px)] transition-all duration-700 sm:-top-[30px] sm:left-auto sm:-right-[70px] sm:min-w-[unset] sm:max-w-[200px] sm:translate-x-0 sm:group-hover:rotate-[6deg]"
        />
        <Button className="relative z-10 ml-[91px] mt-[45px] hidden w-[142px] sm:flex">
          Learn More
        </Button>
      </div>
    </Link>
  );
};

export default VoyageBanner;
