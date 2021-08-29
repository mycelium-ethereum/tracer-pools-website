import React, { useEffect } from "react";
import isMobile from "../components/navbar";

// Image assets
import MobileSteps from "/static/img/home-page/steps/mobile-steps.png";
import ClearTile from "/static/img/home-page/steps/tile.svg";
import BaseTile from "/static/img/home-page/steps/base.svg";
import LayerTwo from "/static/img/home-page/steps/layer-2.svg";
import LayerThree from "/static/img/home-page/steps/layer-3.svg";
import LayerFour from "/static/img/home-page/steps/layer-4.svg";

const LeverageSteps = () => {
  return (
    <>
      <section id="pinMaster" className="pin-master">
        <div id="pinContainer" className="pin-container bg-white lg:overflow-hidden">
          <section className="panel absolute top-0 left-0 w-full h-full step-one flex flex-col justify-center absolute w-full h-full lg:pointer-events-none pointer-events-auto">
            <div className="flex container xl mx-auto flex lg:flex-row flex-col items-center h-full lg:pt-48 xl:px-24 lg:px-12 px-4">
              <div className="lg:w-2/4 w-full step-info lg:text-left text-center">
                <small className="2xl:text-3xl lg:text-2xl text-3xl font-extrabold">
                  Perpetual Pools
                </small>
                <h1 className="2xl:text-6xl lg:text-5xl text-4xl font-black lg:mt-4 mt-2 lg:mb-8 mb-6">
                  Leveraged exposure in four steps
                </h1>
                <div className="step-info__text flex items-center lg:flex hidden">
                  <span className="step-info__number 2xl:text-8xl lg:text-6xl font-semibold">
                    01
                  </span>
                  <p className="ml-4 2xl:text-2xl xl:text-xl">
                    Select side
                    <br />
                    BTC/DAI, LINK/DAI, or ETH/DAI
                  </p>
                </div>
                <div className="step-progress absolute 2xl:bottom-32 lg:bottom-48 left-0 flex justify-between mt-4 h-4 opacity-0 z-0 transition-opacity duration-500 ease-in-out">
                  <span className="active"></span>
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
              <div className="lg:hidden grid grid-cols-4 w-80 mx-auto">
                <span className="font-normal text-6xl color-lightgrey col-span-1">
                  01
                </span>
                <p className="font-normal text-normal col-span-3 mb-8">
                  Select side
                  <br />
                  BTC/DAI, LINK/DAI, or ETH/DAI
                </p>
                <span className="font-normal text-6xl color-lightgrey col-span-1">
                  02
                </span>
                <p className="font-normal text-normal col-span-3 mb-8">
                  Select market
                  <br />
                  Long or short
                </p>
                <span className="font-normal text-6xl color-lightgrey col-span-1">
                  03
                </span>
                <p className="font-normal text-normal col-span-3 mb-8">
                  Select leverage
                  <br />
                  1x, 2x, 3x, 5x, or 15x
                </p>
                <span className="font-normal text-6xl color-lightgrey col-span-1">
                  04
                </span>
                <p className="font-normal text-normal col-span-3 mb-8">
                  Enter collateral
                  <br />
                  Deposit collateral and press ‘buy’ to gain leveraged exposure.
                </p>
                <img className="absolute -bottom-20 left-0 min-w-full max-w-none" src={MobileSteps}/>
              </div>
              <div className="w-2/4 step-animation xl:-top-24 transform xl:scale-75 xl:right-0 lg:scale-50 lg:-right-12 lg:-top-32 scale-50 lg:opacity-100 opacity-0 lg:block hidden">
                <img
                  className="step-animation__tile lg:opacity-0"
                  src={ClearTile}
                />
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
              <div className="w-2/4 step-info">
                <small className="2xl:text-3xl lg:text-2xl font-extrabold">
                  Perpetual Pools
                </small>
                <h1 className="2xl:text-6xl lg:text-5xl font-black mt-4 mb-8">
                  Leveraged exposure in four steps
                </h1>
                <div className="step-info__text flex items-center">
                  <span className="step-info__number 2xl:text-8xl lg:text-6xl font-semibold">
                    02
                  </span>
                  <p className="ml-4 2xl:text-2xl xl:text-xl">
                    Select market
                    <br />
                    Long or short
                  </p>
                </div>
                <div className="step-progress absolute 2xl:bottom-32 lg:bottom-48 left-0 flex justify-between mt-4 h-4 opacity-0 z-0 transition-opacity duration-500 ease-in-out">
                  <span></span>
                  <span className="active"></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
            </div>
          </section>
          <section className="panel absolute top-0 left-0 w-full h-full step-three flex flex-col justify-center absolute w-full h-full lg:pointer-events-none pointer-events-auto lg:block hidden">
            <div className="flex container xl mx-auto px-4 flex items-center h-full lg:pt-48 xl:px-24 lg:px-12 px-4">
              <div className="w-2/4 step-info">
                <small className="2xl:text-3xl lg:text-2xl font-extrabold">
                  Perpetual Pools
                </small>
                <h1 className="2xl:text-6xl lg:text-5xl font-black mt-4 mb-8">
                  Leveraged exposure in four steps
                </h1>
                <div className="step-info__text flex items-center">
                  <span className="step-info__number 2xl:text-8xl lg:text-6xl font-semibold">
                    03
                  </span>
                  <p className="ml-4 2xl:text-2xl xl:text-xl">
                    Select leverage
                    <br />
                    1x, 2x, 3x, 5x, or 15x
                  </p>
                </div>
                <div className="step-progress absolute 2xl:bottom-32 lg:bottom-48 left-0 flex justify-between mt-4 h-4 opacity-0 z-0 transition-opacity duration-500 ease-in-out">
                  <span></span>
                  <span></span>
                  <span className="active"></span>
                  <span></span>
                </div>
              </div>
              {/* <div className="col-span-2 step-animation">
                <picture className="step-animation__tile">
                  <img src={leverageTile} />
                </picture>
              </div> */}
            </div>
          </section>
          <section className="panel absolute top-0 left-0 w-full h-full step-four flex flex-col justify-center absolute w-full h-full lg:pointer-events-none pointer-events-auto lg:block hidden">
            <div className="flex container xl mx-auto px-4 flex items-center h-full lg:pt-48 xl:px-24 lg:px-12 px-4">
              <div className="w-2/4 step-info">
                <small className="2xl:text-3xl lg:text-2xl font-extrabold">
                  Perpetual Pools
                </small>
                <h1 className="2xl:text-6xl lg:text-5xl font-black mt-4 mb-8">
                  Leveraged exposure in four steps
                </h1>
                <div className="step-info__text flex items-center w-3/4">
                  <span className="step-info__number 2xl:text-8xl lg:text-6xl font-semibold">
                    04
                  </span>
                  <p className="ml-4 2xl:text-2xl xl:text-xl">
                    Enter collateral Deposit collateral and press 'buy' to gain
                    leveraged exposure
                  </p>
                </div>
                <div className="step-progress absolute 2xl:bottom-32 lg:bottom-48 left-0 flex justify-between mt-4 h-4 opacity-0 z-0 transition-opacity duration-500 ease-in-out">
                  <span></span>
                  <span></span>
                  <span></span>
                  <span className="active"></span>
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
