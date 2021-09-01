import React from "react";
import { Link } from "gatsby";
import BackgroundParallax from "../components/parallax";
import ArrowDown from "../components/arrow-down";
import Button from "../components/button";
// Assets
import TracerLaptop from "/static/img/home-page/laptop.svg";
const Hero = () => {
  return (
    <>
      <section role="main">
        <BackgroundParallax />
        <div className="container xl w-full h-screen relative flex justify-center items-center z-20 pb-36 2xl:pt-0 xl:px-24 lg:pt-36 lg:px-12 sm:pt-18 pt-16 px-4 mx-auto">
          <header className="text-center">
            <h1 className="2xl:text-9xl sm:text-7xl text-5xl text-white font-black mb-4">
              Perpetual Pools
            </h1>
            <p className="text-white text-xl lg:block hidden">
              Leveraged exposure. No margins.
              <br />
              No liquidations. A new derivative primitive.
            </p>
            <p className="text-white text-2xl lg:hidden block">
              Leveraged exposure.
              <br />
              No margins. No liquidations.
              <br />A new derivative primitive.
            </p>
            <Button
              className="mt-6 h-12 w-48 border border-white mx-auto text-xl rounded-2xl"
              linkTo="/"
            >
              Launch Pools
            </Button>
            <Link to="/">
              <div className="mx-auto mt-6 w-48 h-12 flex justify-center items-center text-xl text-white hover:bg-blue-400 rounded-2xl">Documentation</div>
            </Link>
          </header>
          <div className="max-w-screen-lg absolute 2xl:-bottom-96 xl:-bottom-96 lg:-bottom-60 sm:w-3/5 w-4/5 -bottom-10 z-20">
            <img src={TracerLaptop} alt="Tracer Laptop View" />
          </div>
        </div>
        <ArrowDown
          className="absolute 2xl:right-48 xl:right-30 lg:right-24 sm:w-16 sm:bottom-32 sm:right-16 bottom-12 right-10 w-14 z-20"
          linkTo="#steps"
        />
      </section>
      <div className="2xl:h-96 lg:h-80 h-40 background-blue" id="steps" />
    </>
  );
};

export default Hero;
