import React, { useEffect } from "react";
// import ScrollReveal from "scrollreveal";

// Image assets
import MobileSteps from "/static/img/home-page/steps/mobile-steps.png";
import ClearTile from "/static/img/home-page/steps/tile.svg";
import BaseTile from "/static/img/home-page/steps/base.png";
import LayerTwo from "/static/img/home-page/steps/layer-2.svg";
import LayerThree from "/static/img/home-page/steps/layer-3.svg";
import LayerFour from "/static/img/home-page/steps/layer-4.svg";

const LeverageSteps = (direction) => {
  var slideUp = {
    duration: 500,
    // origin: "bottom",
    // distance: "100px",
    // viewFactor: 0,
    // viewOffset: {
    //   top: 100,
    // },
  };
  // useEffect(() => {
  //   ScrollReveal().reveal("#mobile-steps div[data-step]", slideUp);
  //   ScrollReveal().reveal("#mobile-steps div[data-step='1']", {`
  //     delay: 200,
  //   });
  //   ScrollReveal().reveal("#mobile-steps div[data-step='2']", {
  //     delay: 400,
  //   });
  //   ScrollReveal().reveal("#mobile-steps div[data-step='3']", {
  //     delay: 600,
  //   });
  //   ScrollReveal().reveal("#mobile-steps div[data-step='4']", {
  //     delay: 800,
  //   });
  // });
  return (
    <>
      <section id="pinMaster" className="pin-master">
        <div
          id="pinContainer"
          className={
            "pin-container lg:overflow-hidden background-blue z-10 " +
            direction.direction
          }
        >
          <section className="panel absolute top-0 left-0 w-full h-full step-one flex flex-col justify-center absolute w-full h-full lg:pointer-events-none pointer-events-auto">
            <div className="flex container xl mx-auto lg:flex-row flex-col items-center h-auto lg:pt-48 xl:px-24 lg:px-12 sm:pb-0 pb-48 px-4">
              <div className="step-info xl:pb-0 lg:pb-32 lg:w-2/4 w-full lg:text-left text-center relative">
                <small className="2xl:text-3xl lg:text-2xl color-blue text-3xl font-bold background-blue ">
                  Perpetual Pools
                </small>
                <h1 className="2xl:text-6xl text-white lg:text-5xl text-4xl font-bold background-blue  lg:mt-4 mt-2 lg:mb-10 mb-6">
                  Leveraged exposure in four steps
                </h1>
                <div className="step-info__text flex items-center lg:flex hidden">
                  <span className="step-info__number text-white 2xl:text-6xl lg:text-5xl font-bold background-blue ">
                    01
                  </span>
                  <p className="ml-8 2xl:text-2xl xl:text-xl text-white background-blue">
                    Select side
                    <br />
                    BTC/DAI, LINK/DAI, or ETH/DAI
                  </p>
                </div>
                <div className="step-progress absolute 2xl:bottom-40 xl:bottom-48 lg:bottom-20 left-0 justify-between mt-4 h-4 opacity-0 z-0 transition-opacity duration-500 ease-in-out lg:flex hidden">
                  <span className="active w-1/4 mr-1 h-2.5 transition-background duration-500 ease-in-out"></span>
                  <span className="w-1/4 mr-1 h-2.5 transition-background duration-500 ease-in-out bg-grey"></span>
                  <span className="w-1/4 mr-1 h-2.5 transition-background duration-500 ease-in-out bg-grey"></span>
                  <span className="w-1/4 h-2.5 transition-background duration-500 ease-in-out bg-grey"></span>
                </div>
              </div>
              <div id="mobile-steps" className="lg:hidden w-80 mx-auto">
                <div data-step="1" className="grid grid-cols-4 w-full">
                  <span className="font-normal text-6xl text-white col-span-1">
                    01
                  </span>
                  <p className="font-normal text-normal text-white col-span-3 mb-8">
                    Select side
                    <br />
                    BTC/DAI, LINK/DAI, or ETH/DAI
                  </p>
                </div>
                <div data-step="2" className="grid grid-cols-4 w-full">
                  <span className="font-normal text-6xl text-white col-span-1">
                    02
                  </span>
                  <p className="font-normal text-normal text-white col-span-3 mb-8">
                    Select market
                    <br />
                    Long or short
                  </p>
                </div>
                <div data-step="3" className="grid grid-cols-4 w-full">
                  <span className="font-normal text-6xl text-white col-span-1">
                    03
                  </span>
                  <p className="font-normal text-normal text-white col-span-3 mb-8">
                    Select leverage
                    <br />
                    1x, 2x, 3x, 5x, or 15x
                  </p>
                </div>
                <div data-step="41" className="grid grid-cols-4 w-full">
                  <span className="font-normal text-6xl text-white col-span-1">
                    04
                  </span>
                  <p className="font-normal text-normal text-white col-span-3">
                    Enter collateral
                    <br />
                    Deposit collateral and press ‘buy’ to gain leveraged
                    exposure.
                  </p>
                </div>
                <img
                  className="absolute -bottom-24 left-0 min-w-full max-w-none"
                  src={MobileSteps}
                />
              </div>
              <div className="w-2/4 step-animation relative 2xl:-top-24 lg:-top-32 xl:scale-75 xl:right-0 lg:scale-50 lg:-right-12 lg:opacity-100 opacity-0 lg:block transform scale-50  hidden">
                {/* <img
                  className="step-animation__tile lg:opacity-0"
                  src={ClearTile}
                /> */}
                <div className="step-animation__tile lg:opacity-0">
                  <img
                    className="absolute top-0 left-0 w-full h-auto"
                    src={BaseTile}
                  />
                </div>
                <img
                  className="step-animation__base lg:opacity-0"
                  src={BaseTile}
                />
                <img
                  className="step-animation__layertwo lg:opacity-0"
                  src={LayerTwo}
                />
                <img
                  className="step-animation__layerthree lg:opacity-0"
                  src={LayerThree}
                />
                <img
                  className="step-animation__layerfour lg:opacity-0"
                  src={LayerFour}
                />
              </div>
            </div>
          </section>
          <section className="panel absolute top-0 left-0 w-full h-full step-two flex flex-col justify-center absolute w-full h-full lg:pointer-events-none pointer-events-auto lg:block hidden">
            <div className="flex container xl mx-auto px-4 flex items-center h-full lg:pt-48 xl:px-24 lg:px-12 px-4">
              <div className="w-2/4 step-info xl:pb-0 lg:pb-32 relative">
                <small className="2xl:text-3xl lg:text-2xl color-blue font-bold background-blue ">
                  Perpetual Pools
                </small>
                <h1 className="2xl:text-6xl text-white lg:text-5xl font-bold background-blue  mt-4 mb-10">
                  Leveraged exposure in four steps
                </h1>
                <div className="step-info__text flex items-center">
                  <span className="step-info__number text-white 2xl:text-6xl lg:text-5xl font-bold background-blue ">
                    02
                  </span>
                  <p className="ml-8 2xl:text-2xl xl:text-xl text-white background-blue">
                    Select market
                    <br />
                    Long or short
                  </p>
                </div>
                <div className="step-progress absolute 2xl:bottom-40 xl:bottom-48 lg:bottom-20 left-0 flex justify-between mt-4 h-4 opacity-0 z-0 transition-opacity duration-500 ease-in-out">
                  <span className="w-1/4 mr-1 h-2.5 transition-background duration-500 ease-in-out bg-grey"></span>
                  <span className="active w-1/4 mr-1 h-2.5 transition-background duration-500 ease-in-out"></span>
                  <span className="w-1/4 mr-1 h-2.5 transition-background duration-500 ease-in-out bg-grey"></span>
                  <span className="w-1/4 h-2.5 transition-background duration-500 ease-in-out bg-grey"></span>
                </div>
              </div>
            </div>
          </section>
          <section className="panel absolute top-0 left-0 w-full h-full step-three flex flex-col justify-center absolute w-full h-full lg:pointer-events-none pointer-events-auto lg:block hidden">
            <div className="flex container xl mx-auto px-4 flex items-center h-full lg:pt-48 xl:px-24 lg:px-12 px-4">
              <div className="w-2/4 step-info xl:pb-0 lg:pb-32 relative">
                <small className="2xl:text-3xl lg:text-2xl color-blue font-bold background-blue ">
                  Perpetual Pools
                </small>
                <h1 className="2xl:text-6xl text-white lg:text-5xl font-bold background-blue  mt-4 mb-10">
                  Leveraged exposure in four steps
                </h1>
                <div className="step-info__text flex items-center">
                  <span className="step-info__number text-white 2xl:text-6xl lg:text-5xl font-bold background-blue ">
                    03
                  </span>
                  <p className="ml-8 2xl:text-2xl xl:text-xl text-white background-blue">
                    Select leverage
                    <br />
                    1x, 2x, 3x, 5x, or 15x
                  </p>
                </div>
                <div className="step-progress absolute 2xl:bottom-40 xl:bottom-48 lg:bottom-20 left-0 flex justify-between mt-4 h-4 opacity-0 z-0 transition-opacity duration-500 ease-in-out">
                  <span className="w-1/4 mr-1 h-2.5 transition-background duration-500 ease-in-out bg-grey"></span>
                  <span className="w-1/4 mr-1 h-2.5 transition-background duration-500 ease-in-out bg-grey"></span>
                  <span className="active w-1/4 mr-1 h-2.5 transition-background duration-500 ease-in-out"></span>
                  <span className="w-1/4 h-2.5 transition-background duration-500 ease-in-out bg-grey"></span>
                </div>
              </div>
            </div>
          </section>
          <section className="panel absolute top-0 left-0 w-full h-full step-four flex flex-col justify-center absolute w-full h-full lg:pointer-events-none pointer-events-auto lg:block hidden">
            <div className="flex container xl mx-auto px-4 flex items-center h-full lg:pt-48 xl:px-24 lg:px-12 px-4">
              <div className="w-2/4 step-info xl:pb-0 lg:pb-32 relative">
                <small className="2xl:text-3xl lg:text-2xl color-blue font-bold background-blue ">
                  Perpetual Pools
                </small>
                <h1 className="2xl:text-6xl text-white lg:text-5xl font-bold background-blue  mt-4 mb-10">
                  Leveraged exposure in four steps
                </h1>
                <div className="step-info__text flex items-center w-3/4">
                  <span className="step-info__number text-white 2xl:text-6xl lg:text-5xl font-bold background-blue ">
                    04
                  </span>
                  <p className="ml-8 2xl:text-2xl xl:text-xl text-white background-blue">
                    Enter collateral Deposit collateral and press 'buy' to gain
                    leveraged exposure
                  </p>
                </div>
                <div className="step-progress absolute 2xl:bottom-40 xl:bottom-48 lg:bottom-20 left-0 flex justify-between mt-4 h-4 opacity-0 z-0 transition-opacity duration-500 ease-in-out">
                  <span className="w-1/4 mr-1 h-2.5 transition-background duration-500 ease-in-out bg-grey"></span>
                  <span className="w-1/4 mr-1 h-2.5 transition-background duration-500 ease-in-out bg-grey"></span>
                  <span className="w-1/4 mr-1 h-2.5 transition-background duration-500 ease-in-out bg-grey"></span>
                  <span className="active w-1/4 h-2.5 transition-background duration-500 ease-in-out"></span>
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>
    </>
  );
};

export default LeverageSteps;
