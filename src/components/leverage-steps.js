import React from "react";

// Image assets
import MobileSteps from "/static/img/home-page/steps/mobile-steps.png";
import EmptyTile from "/static/img/home-page/steps/empty-tile.png";
import MarketTile from "/static/img/home-page/steps/market-tile.png";
import SideTile from "/static/img/home-page/steps/side-tile.png";
import LeverageTile from "/static/img/home-page/steps/leverage-tile.png";
import AmountTile from "/static/img/home-page/steps/amount-tile.png";
import BaseTile from "/static/img/home-page/steps/base.png";
import LightBlueRectangle from "/static/img/home-page/steps/lightblue-rectangle.svg";
import PinkRectangle from "/static/img/home-page/steps/pink-rectangle.svg";
import BlueArrow from "/static/img/home-page/steps/blue-arrow.svg";
import BlueSquare from "/static/img/home-page/steps/blue-square.png";

const LeverageSteps = (direction) => {
  return (
    <>
      <section id="pinMaster" className="pin-master z-10">
        <div
          id="pinContainer"
          className={"pin-container bg-blue z-10 " + direction.direction}
        >
          <section className="panel lg:absolute top-0 left-0 step-one flex flex-col lg:justify-center justify-start w-full h-full lg:pointer-events-none pointer-events-auto">
            <div className="flex container mx-auto w-full lg:flex-row flex-col items-center h-auto lg:pt-48 xl:px-0 px-4">
              <div className="step-info xl:pb-0 lg:pb-32 lg:w-2/4 w-full lg:text-left text-center relative">
                <small
                  id="steps"
                  className="2xl:text-3xl lg:text-2xl color-blue text-3xl font-bold bg-blue"
                >
                  Perpetual Pools
                </small>
                <h1 className="2xl:text-6xl text-white lg:text-5xl text-4xl font-bold bg-blue lg:mt-4 mt-2 lg:mb-10 mb-6">
                  Leveraged exposure in four steps
                </h1>
                <div className="step-info__text items-center lg:flex hidden">
                  <span className="step-info__number text-white 2xl:text-6xl lg:text-5xl font-bold bg-blue">
                    01
                  </span>
                  <p className="ml-8 2xl:text-2xl xl:text-xl text-white">
                    Select market
                    <br />
                    BTC/USDC or ETH/USDC
                  </p>
                </div>
                <div className="step-progress absolute 2xl:bottom-40 lg:bottom-52 left-0 justify-between mt-4 h-4 opacity-0 z-0 transition-opacity duration-500 ease-in-out lg:flex hidden">
                  <span className="active w-1/4 mr-1 h-2.5 transition-background duration-500 ease-in-out"></span>
                  <span className="w-1/4 mr-1 h-2.5 transition-background duration-500 ease-in-out bg-grey"></span>
                  <span className="w-1/4 mr-1 h-2.5 transition-background duration-500 ease-in-out bg-grey"></span>
                  <span className="w-1/4 h-2.5 transition-background duration-500 ease-in-out bg-grey"></span>
                </div>
              </div>
              <div
                id="mobile-steps"
                className="lg:hidden sm:w-80 w-full mx-auto z-20 sm:pl-0 pl-4"
              >
                <div data-step="1" className="grid grid-cols-4 w-full sm:gap-4 gap-8">
                  <span className="font-normal text-6xl text-white col-span-1">
                    01
                  </span>
                  <p className="font-normal text-normal text-white col-span-3 mb-8">
                    Select market
                    <br />
                    BTC/USDC or ETH/USDC
                  </p>
                </div>
                <div data-step="2" className="grid grid-cols-4 w-full sm:gap-4 gap-8">
                  <span className="font-normal text-6xl text-white col-span-1">
                    02
                  </span>
                  <p className="font-normal text-normal text-white col-span-3 mb-8">
                    Select side
                    <br />
                    Long or short
                  </p>
                </div>
                <div data-step="3" className="grid grid-cols-4 w-full sm:gap-4 gap-8">
                  <span className="font-normal text-6xl text-white col-span-1">
                    03
                  </span>
                  <p className="font-normal text-normal text-white col-span-3 mb-8">
                    Choose power leverage
                    <br />
                    1, 2, 3, 5, or 15
                  </p>
                </div>
                <div data-step="4" className="grid grid-cols-4 w-full sm:gap-4 gap-8">
                  <span className="font-normal text-6xl text-white col-span-1">
                    04
                  </span>
                  <p className="font-normal text-normal text-white col-span-3">
                    Enter collateral
                    <br />
                    Enter collateral and select 'Buy' to gain leveraged exposure
                  </p>
                </div>
                <img
                  className="relative sm:bottom-0 -bottom-8 sm:-left-1/4 left-0 min-w-full max-w-none"
                  src={MobileSteps}
                  alt="Leverage Steps"
                />
              </div>
              <div className="w-2/4 step-animation relative 2xl:-top-24 lg:-top-32 xl:scale-75 xl:right-11 lg:scale-50 lg:-right-12 lg:opacity-100 opacity-0 lg:block transform-gpu scale-50 hidden z-10">
                <div className="absolute step-animation__tile">
                  <img
                    className="step-animation__empty relative top-0 right-0 w-full opacity-0"
                    src={EmptyTile}
                    alt=""
                  />
                  <img
                    className="step-animation__market absolute top-0 right-0 w-full opacity-0"
                    src={MarketTile}
                    alt=""
                  />
                  <img
                    className="step-animation__side absolute top-0 right-0 w-full opacity-0"
                    src={SideTile}
                    alt=""
                  />
                  <img
                    className="step-animation__leverage absolute top-0 right-0 w-full opacity-0"
                    src={LeverageTile}
                    alt=""
                  />
                  <img
                    className="step-animation__amount absolute top-0 right-0 w-full opacity-0"
                    src={AmountTile}
                    alt=""
                  />
                </div>
                <img
                  className="step-animation__base opacity-0"
                  src={BaseTile}
                  alt=""
                />
                <img
                  className="step-animation__lightblue-rectangle opacity-0"
                  src={LightBlueRectangle}
                  alt=""
                />
                <img
                  className="step-animation__pink-rectangle opacity-0"
                  src={PinkRectangle}
                  alt=""
                />
                <img
                  className="step-animation__blue-arrow opacity-0"
                  src={BlueArrow}
                  alt=""
                />
                <img
                  className="step-animation__blue-square opacity-0"
                  src={BlueSquare}
                  alt=""
                />
              </div>
            </div>
          </section>
          <section className="panel absolute top-0 left-0 w-full h-full step-two flex-col justify-center lg:pointer-events-none pointer-events-auto lg:block hidden">
            <div className="flex container mx-auto items-center h-full lg:pt-48 xl:px-0 px-4">
              <div className="w-2/4 step-info xl:pb-0 lg:pb-32 relative">
                <small className="2xl:text-3xl lg:text-2xl color-blue font-bold bg-blue">
                  Perpetual Pools
                </small>
                <h1 className="2xl:text-6xl text-white lg:text-5xl font-bold bg-blue mt-4 mb-10">
                  Leveraged exposure in four steps
                </h1>
                <div className="step-info__text flex items-center">
                  <span className="step-info__number text-white 2xl:text-6xl lg:text-5xl font-bold bg-blue">
                    02
                  </span>
                  <p className="ml-8 2xl:text-2xl xl:text-xl text-white">
                    Select side
                    <br />
                    Long or short
                  </p>
                </div>
                <div className="step-progress absolute 2xl:bottom-40 lg:bottom-52 left-0 flex justify-between mt-4 h-4 opacity-0 z-0 transition-opacity duration-500 ease-in-out">
                  <span className="w-1/4 mr-1 h-2.5 transition-background duration-500 ease-in-out bg-grey"></span>
                  <span className="active w-1/4 mr-1 h-2.5 transition-background duration-500 ease-in-out"></span>
                  <span className="w-1/4 mr-1 h-2.5 transition-background duration-500 ease-in-out bg-grey"></span>
                  <span className="w-1/4 h-2.5 transition-background duration-500 ease-in-out bg-grey"></span>
                </div>
              </div>
            </div>
          </section>
          <section className="panel absolute top-0 left-0 w-full h-full step-three flex-col justify-center lg:pointer-events-none pointer-events-auto lg:block hidden">
            <div className="flex container mx-auto items-center h-full lg:pt-48 xl:px-0 px-4">
              <div className="w-2/4 step-info xl:pb-0 lg:pb-32 relative">
                <small className="2xl:text-3xl lg:text-2xl color-blue font-bold bg-blue">
                  Perpetual Pools
                </small>
                <h1 className="2xl:text-6xl text-white lg:text-5xl font-bold bg-blue mt-4 mb-10">
                  Leveraged exposure in four steps
                </h1>
                <div className="step-info__text flex items-center">
                  <span className="step-info__number text-white 2xl:text-6xl lg:text-5xl font-bold bg-blue">
                    03
                  </span>
                  <p className="ml-8 2xl:text-2xl xl:text-xl text-white">
                    Choose power leverage
                    <br />
                    1, 2, 3, 5, or 15
                  </p>
                </div>
                <div className="step-progress absolute 2xl:bottom-40 lg:bottom-52 left-0 flex justify-between mt-4 h-4 opacity-0 z-0 transition-opacity duration-500 ease-in-out">
                  <span className="w-1/4 mr-1 h-2.5 transition-background duration-500 ease-in-out bg-grey"></span>
                  <span className="w-1/4 mr-1 h-2.5 transition-background duration-500 ease-in-out bg-grey"></span>
                  <span className="active w-1/4 mr-1 h-2.5 transition-background duration-500 ease-in-out"></span>
                  <span className="w-1/4 h-2.5 transition-background duration-500 ease-in-out bg-grey"></span>
                </div>
              </div>
            </div>
          </section>
          <section className="panel absolute top-0 left-0 w-full h-full step-four flex-col justify-center lg:pointer-events-none pointer-events-auto lg:block hidden">
            <div className="flex container mx-auto items-center h-full lg:pt-48 xl:px-0 px-4">
              <div className="w-2/4 step-info xl:pb-0 lg:pb-32 relative">
                <small className="2xl:text-3xl lg:text-2xl color-blue font-bold bg-blue">
                  Perpetual Pools
                </small>
                <h1 className="2xl:text-6xl text-white lg:text-5xl font-bold bg-blue mt-4 mb-10">
                  Leveraged exposure in four steps
                </h1>
                <div className="step-info__text flex items-center w-4/5">
                  <span className="step-info__number text-white 2xl:text-6xl lg:text-5xl font-bold bg-blue">
                    04
                  </span>
                  <p className="ml-8 2xl:text-2xl xl:text-xl text-white">
                    Enter collateral and select 'Buy' to gain leveraged exposure
                  </p>
                </div>
                <div className="step-progress absolute 2xl:bottom-40 lg:bottom-52 left-0 flex justify-between mt-4 h-4 opacity-0 z-0 transition-opacity duration-500 ease-in-out">
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
