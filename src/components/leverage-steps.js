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
          <section className="panel step-one pointer-events-auto top-0 left-0 flex h-full w-full flex-col justify-start lg:pointer-events-none lg:absolute lg:justify-center">
            <div className="container mx-auto flex h-auto w-full flex-col items-center px-4 pt-6 md:pt-0 lg:flex-row lg:pt-48 xl:px-0">
              <div className="step-info relative w-full text-center lg:w-2/4 lg:pb-32 lg:text-left xl:pb-0">
                <small
                  id="steps"
                  className="color-blue bg-blue text-base font-bold lg:text-2xl 2xl:text-3xl"
                >
                  Perpetual Pools
                </small>
                <h1 className="bg-blue mt-0 mb-6 text-3xl font-bold text-white lg:mt-4 lg:mb-10 lg:text-5xl 2xl:text-6xl">
                  Leveraged exposure in four steps
                </h1>
                <div className="step-info__text hidden items-center lg:flex">
                  <span className="step-info__number bg-blue font-bold text-white lg:text-5xl 2xl:text-6xl">
                    01
                  </span>
                  <p className="ml-8 text-white lg:text-xl 2xl:text-2xl">
                    Select market
                    <br />
                    BTC/USDC or ETH/USDC
                  </p>
                </div>
                <div className="step-progress absolute left-0 z-0 mt-4 hidden h-4 justify-between opacity-0 transition-opacity duration-500 ease-in-out lg:bottom-52 lg:flex 2xl:bottom-40">
                  <span className="active transition-background mr-1 h-2.5 w-1/4 duration-500 ease-in-out" />
                  <span className="transition-background bg-grey mr-1 h-2.5 w-1/4 duration-500 ease-in-out" />
                  <span className="transition-background bg-grey mr-1 h-2.5 w-1/4 duration-500 ease-in-out" />
                  <span className="transition-background bg-grey h-2.5 w-1/4 duration-500 ease-in-out" />
                </div>
              </div>
              <div
                id="mobile-steps"
                className="z-20 mx-auto w-full pl-4 sm:w-80 sm:pl-0 lg:hidden"
              >
                <div data-step="1" className="grid w-full grid-cols-4 sm:gap-0">
                  <span className="col-span-1 flex justify-end pr-4 text-4xl font-bold text-white md:pr-2 md:text-5xl">
                    01
                  </span>
                  <p className="col-span-3 mb-8 text-sm font-normal text-white">
                    Select market
                    <br />
                    BTC/USDC or ETH/USDC
                  </p>
                </div>
                <div data-step="2" className="grid w-full grid-cols-4 sm:gap-0">
                  <span className="col-span-1 flex justify-end pr-4 text-4xl font-bold text-white md:pr-2 md:text-5xl">
                    02
                  </span>
                  <p className="col-span-3 mb-8 text-sm font-normal text-white">
                    Select side
                    <br />
                    Long or short
                  </p>
                </div>
                <div data-step="3" className="grid w-full grid-cols-4 sm:gap-0">
                  <span className="col-span-1 flex justify-end pr-4 text-4xl font-bold text-white md:pr-2 md:text-5xl">
                    03
                  </span>
                  <p className="col-span-3 mb-8 text-sm font-normal text-white">
                    Choose Power Leverage
                    <br />
                    1, 2, 3, 5, or 15
                  </p>
                </div>
                <div data-step="4" className="grid w-full grid-cols-4 sm:gap-0">
                  <span className="col-span-1 flex justify-end pr-4 text-4xl font-bold text-white md:pr-2 md:text-5xl">
                    04
                  </span>
                  <p className="col-span-3 text-sm font-normal text-white">
                    Enter collateral
                    <br />
                    Enter collateral and select 'Buy' to gain leveraged exposure
                  </p>
                </div>
                <img
                  loading="lazy"
                  className="relative -bottom-8 left-0 min-w-full max-w-none sm:bottom-0 sm:-left-1/4"
                  src={MobileSteps}
                  alt="Leverage Steps"
                />
              </div>
              <div className="step-animation relative z-10 hidden w-2/4 scale-50 transform-gpu opacity-0 lg:-top-32 lg:-right-12 lg:block lg:scale-50 lg:opacity-100 xl:right-11 xl:scale-75 2xl:-top-24">
                <div className="step-animation__tile absolute">
                  <img
                    loading="lazy"
                    className="step-animation__empty relative top-0 right-0 w-full opacity-0"
                    src={EmptyTile}
                    alt=""
                  />
                  <img
                    loading="lazy"
                    className="step-animation__market absolute top-0 right-0 w-full opacity-0"
                    src={MarketTile}
                    alt=""
                  />
                  <img
                    loading="lazy"
                    className="step-animation__side absolute top-0 right-0 w-full opacity-0"
                    src={SideTile}
                    alt=""
                  />
                  <img
                    loading="lazy"
                    className="step-animation__leverage absolute top-0 right-0 w-full opacity-0"
                    src={LeverageTile}
                    alt=""
                  />
                  <img
                    loading="lazy"
                    className="step-animation__amount absolute top-0 right-0 w-full opacity-0"
                    src={AmountTile}
                    alt=""
                  />
                </div>
                <img
                  loading="lazy"
                  className="step-animation__base opacity-0"
                  src={BaseTile}
                  alt=""
                />
                <img
                  loading="lazy"
                  className="step-animation__lightblue-rectangle opacity-0"
                  src={LightBlueRectangle}
                  alt=""
                />
                <img
                  loading="lazy"
                  className="step-animation__pink-rectangle opacity-0"
                  src={PinkRectangle}
                  alt=""
                />
                <img
                  loading="lazy"
                  className="step-animation__blue-arrow opacity-0"
                  src={BlueArrow}
                  alt=""
                />
                <img
                  loading="lazy"
                  className="step-animation__blue-square opacity-0"
                  src={BlueSquare}
                  alt=""
                />
              </div>
            </div>
          </section>
          <section className="panel step-two pointer-events-auto absolute top-0 left-0 hidden h-full w-full flex-col justify-center lg:pointer-events-none lg:block">
            <div className="container mx-auto flex h-full items-center px-4 lg:pt-48 xl:px-0">
              <div className="step-info relative w-2/4 lg:pb-32 xl:pb-0">
                <small className="color-blue bg-blue font-bold lg:text-2xl 2xl:text-3xl">
                  Perpetual Pools
                </small>
                <h1 className="bg-blue mt-4 mb-10 font-bold text-white lg:text-5xl 2xl:text-6xl">
                  Leveraged exposure in four steps
                </h1>
                <div className="step-info__text flex items-center">
                  <span className="step-info__number bg-blue font-bold text-white lg:text-5xl 2xl:text-6xl">
                    02
                  </span>
                  <p className="ml-8 text-white lg:text-xl 2xl:text-2xl">
                    Select side
                    <br />
                    Long or short
                  </p>
                </div>
                <div className="step-progress absolute left-0 z-0 mt-4 flex h-4 justify-between opacity-0 transition-opacity duration-500 ease-in-out lg:bottom-52 2xl:bottom-40">
                  <span className="transition-background bg-grey mr-1 h-2.5 w-1/4 duration-500 ease-in-out" />
                  <span className="active transition-background mr-1 h-2.5 w-1/4 duration-500 ease-in-out" />
                  <span className="transition-background bg-grey mr-1 h-2.5 w-1/4 duration-500 ease-in-out" />
                  <span className="transition-background bg-grey h-2.5 w-1/4 duration-500 ease-in-out" />
                </div>
              </div>
            </div>
          </section>
          <section className="panel step-three pointer-events-auto absolute top-0 left-0 hidden h-full w-full flex-col justify-center lg:pointer-events-none lg:block">
            <div className="container mx-auto flex h-full items-center px-4 lg:pt-48 xl:px-0">
              <div className="step-info relative w-2/4 lg:pb-32 xl:pb-0">
                <small className="color-blue bg-blue font-bold lg:text-2xl 2xl:text-3xl">
                  Perpetual Pools
                </small>
                <h1 className="bg-blue mt-4 mb-10 font-bold text-white lg:text-5xl 2xl:text-6xl">
                  Leveraged exposure in four steps
                </h1>
                <div className="step-info__text flex items-center">
                  <span className="step-info__number bg-blue font-bold text-white lg:text-5xl 2xl:text-6xl">
                    03
                  </span>
                  <p className="ml-8 text-white lg:text-xl 2xl:text-2xl">
                    Choose Power Leverage
                    <br />
                    1, 2, 3, 5, or 15
                  </p>
                </div>
                <div className="step-progress absolute left-0 z-0 mt-4 flex h-4 justify-between opacity-0 transition-opacity duration-500 ease-in-out lg:bottom-52 2xl:bottom-40">
                  <span className="transition-background bg-grey mr-1 h-2.5 w-1/4 duration-500 ease-in-out" />
                  <span className="transition-background bg-grey mr-1 h-2.5 w-1/4 duration-500 ease-in-out" />
                  <span className="active transition-background mr-1 h-2.5 w-1/4 duration-500 ease-in-out" />
                  <span className="transition-background bg-grey h-2.5 w-1/4 duration-500 ease-in-out" />
                </div>
              </div>
            </div>
          </section>
          <section className="panel step-four pointer-events-auto absolute top-0 left-0 hidden h-full w-full flex-col justify-center lg:pointer-events-none lg:block">
            <div className="container mx-auto flex h-full items-center px-4 lg:pt-48 xl:px-0">
              <div className="step-info relative w-2/4 lg:pb-32 xl:pb-0">
                <small className="color-blue bg-blue font-bold lg:text-2xl 2xl:text-3xl">
                  Perpetual Pools
                </small>
                <h1 className="bg-blue mt-4 mb-10 font-bold text-white lg:text-5xl 2xl:text-6xl">
                  Leveraged exposure in four steps
                </h1>
                <div className="step-info__text flex w-4/5 items-center">
                  <span className="step-info__number bg-blue font-bold text-white lg:text-5xl 2xl:text-6xl">
                    04
                  </span>
                  <p className="ml-8 text-white lg:text-xl 2xl:text-2xl">
                    Enter collateral and select 'Buy' to gain leveraged exposure
                  </p>
                </div>
                <div className="step-progress absolute left-0 z-0 mt-4 flex h-4 justify-between opacity-0 transition-opacity duration-500 ease-in-out lg:bottom-52 2xl:bottom-40">
                  <span className="transition-background bg-grey mr-1 h-2.5 w-1/4 duration-500 ease-in-out" />
                  <span className="transition-background bg-grey mr-1 h-2.5 w-1/4 duration-500 ease-in-out" />
                  <span className="transition-background bg-grey mr-1 h-2.5 w-1/4 duration-500 ease-in-out" />
                  <span className="active transition-background h-2.5 w-1/4 duration-500 ease-in-out" />
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
