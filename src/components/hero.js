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
        <div className="w-full h-full relative flex justify-center items-center z-10 pb-36 2xl:pt-0 lg:pt-36">
          <header>
            <h1 className="2xl:text-9xl text-7xl text-white font-black mb-4">
              Perpetual Pools
            </h1>
            <p className="text-xl text-white">
              Leveraged exposure. No margins.
            </p>
            <div className="text-xl text-white">
              No liquidations. A new derivative primitive.
            </div>
            <Button className="mt-6 z-11 mx-auto" linkTo="#">
              Launch Pools
            </Button>
            <div className="mt-2">
              <Link to="/">
                <div className="text-xl text-white mt-6">Documentation</div>
              </Link>
            </div>
          </header>
          <div className="max-w-screen-lg absolute 2xl:-bottom-96 xl:-bottom-96 lg:-bottom-60 w-3/5 sm:-bottom-32">
            <img src={TracerLaptop} alt="Tracer Laptop View" />
          </div>
        </div>
        <ArrowDown linkTo="#steps" />
      </section>
      <div className="spacer 2xl:h-96 lg:h-80 bg-white" id="steps"/>
    </>
  );
};

export default Hero;
