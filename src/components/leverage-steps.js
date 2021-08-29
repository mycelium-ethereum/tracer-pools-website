import React from "react";

// Image assets
import StepOne from "/static/img/home-page/steps/step-one.mp4";
import ClearTile from "/static/img/home-page/steps/tile.svg";
import BaseTile from "/static/img/home-page/steps/base.svg";
import LayerTwo from "/static/img/home-page/steps/layer-2.svg";
import LayerThree from "/static/img/home-page/steps/layer-3.svg";
import LayerFour from "/static/img/home-page/steps/layer-4.svg";

const LeverageSteps = () => {
  return (
    <>
      <section id="pinMaster" className="pin-master">
        <div id="pinContainer" className="pin-container bg-white">
          <section className="panel step-one">
            <div className="flex container xl mx-auto flex items-center h-full lg:pt-48 xl:px-24 px-12">
              <div className="w-2/4 step-info">
                <small className="2xl:text-3xl lg:text-2xl font-extrabold">
                  Perpetual Pools
                </small>
                <h1 className="2xl:text-6xl lg:text-5xl font-black mt-4 mb-8">
                  Leveraged exposure in four steps
                </h1>
                <div className="step-info__text flex items-center">
                  <span className="step-info__number 2xl:text-8xl lg:text-6xl font-semibold">
                    01
                  </span>
                  <p className="ml-4 2xl:text-2xl xl:text-xl">
                    Select side
                    <br />
                    BTC/DAI, LINK/DAI, or ETH/DAI
                  </p>
                </div>
                <div className="step-progress absolute bottom-48 left-0 flex justify-between mt-4 h-4 opacity-0 z-0 transition-opacity duration-500 ease-in-out">
                  <span className="active"></span>
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
              <div className="w-2/4 step-animation -top-24 transform xl:scale-75 lg:scale-50">
                <img className="step-animation__tile" src={ClearTile} />
                <img className="step-animation__base" src={BaseTile} />
                <img className="step-animation__layertwo" src={LayerTwo} />
                <img className="step-animation__layerthree" src={LayerThree} />
                <img className="step-animation__layerfour" src={LayerFour} />
                {/* <video muted autoPlay playsInline>
                  <source src={StepOne} type="video/mp4" />
                </video> */}
              </div>
            </div>
          </section>
          <section className="panel step-two flex flex-col justify-center">
            <div className="flex container xl mx-auto px-4 flex items-center h-full lg:pt-48 xl:px-24 px-12">
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
                <div className="step-progress absolute bottom-48 left-0 flex justify-between mt-4 h-4 opacity-0 z-0 transition-opacity duration-500 ease-in-out">
                  <span></span>
                  <span className="active"></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
            </div>
          </section>
          <section className="panel step-three flex flex-col justify-center">
            <div className="flex container xl mx-auto px-4 flex items-center h-full lg:pt-48 xl:px-24 px-12">
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
                <div className="step-progress absolute bottom-48 left-0 flex justify-between mt-4 h-4 opacity-0 z-0 transition-opacity duration-500 ease-in-out">
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
          <section className="panel step-four flex flex-col justify-center">
            <div className="flex container xl mx-auto px-4 flex items-center h-full lg:pt-48 xl:px-24 px-12">
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
                <div className="step-progress absolute bottom-48 left-0 flex justify-between mt-4 h-4 opacity-0 z-0 transition-opacity duration-500 ease-in-out">
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
