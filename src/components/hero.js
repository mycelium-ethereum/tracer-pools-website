import React from "react";
import { Link } from "gatsby";
import WebGLBackground from "../components/webgl";
import ArrowDown from "../components/arrow-down";
import Button from "../components/button";
// Assets
import TracerLaptop from "/static/img/home-page/laptop.svg";
const Hero = () => {
  return (
    <>
      <section role="main">
        <WebGLBackground />
        <div className="container xl w-full h-full relative flex justify-center items-center z-20 pb-36 2xl:pt-0 xl:px-24 lg:pt-36 lg:px-12 sm:pt-18 pt-16 px-4 mx-auto">
          <header>
            <h1 className="2xl:text-9xl sm:text-7xl text-4xl text-white font-black mb-4">
              Perpetual Pools
            </h1>
            <p className="text-xl text-white">
              Leveraged exposure. No margins.
            </p>
            <div className="text-xl text-white">
              No liquidations. A new derivative primitive.
            </div>
            <Button className="mt-6 mx-auto text-xl" linkTo="#">
              Launch Pools
            </Button>
            <div className="mt-2">
              <Link to="/">
                <div className="text-xl text-white mt-6">Documentation</div>
              </Link>
            </div>
          </header>
          <div className="max-w-screen-lg absolute 2xl:-bottom-96 xl:-bottom-96 lg:-bottom-60 sm:w-3/5 w-4/5 -bottom-10 z-20">
            <img src={TracerLaptop} alt="Tracer Laptop View" />
          </div>
        </div>
        <ArrowDown className="absolute 2xl:right-48 xl:right-30 lg:right-24 sm:w-16 sm:bottom-32 sm:right-16 bottom-12 right-10 w-14 z-20" linkTo="#steps" />
      </section>
      <div className="spacer 2xl:h-96 lg:h-80 h-40 bg-white" id="steps"/>
    </>
  );
};

export default Hero;
