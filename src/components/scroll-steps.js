import React, { useEffect, useState } from "react";
import { Controller, Scene } from "react-scrollmagic";
import { Tween, Timeline } from "react-gsap";

// Image assets
import marketTile from "/static/img/home-page/steps/market-01.svg";
import sideTile from "/static/img/home-page/steps/side-02.svg";
import leverageTile from "/static/img/home-page/steps/leverage-03.svg";
import amountTile from "/static/img/home-page/steps/amount-04.svg";
import stepOne from "/static/img/home-page/steps/step-one.mp4";

const ScrollSteps = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const updateActiveSlide = () => {
    // const scrollTop = document.scrollTop;
    const slides = document.querySelectorAll(".panel");
    slides.forEach((e, index) => {
      const xPos = e.getBoundingClientRect().x;
      const prevElement = slides[index - 1];
      if(xPos <= 0){
        e.classList.add("active");
        if(!!prevElement){
          prevElement.classList.remove("active");
        }
      }
      else {
        e.classList.remove("active");
      }
    })
  };

  useEffect(() => {
    // const pinContainer = document.getElementById("pinContainer");
    window.addEventListener("scroll", function(){
      updateActiveSlide();
    });
  });
  return (
    <Controller>
      <Scene
        triggerHook="onLeave"
        duration="400%"
        pin
      >
        <Timeline wrapper={<div id="pinContainer" />} progress>
          <section className="panel active">
            <div className="d-flex container-xl">
              <div className="col-6 step-info">
                <small>Perpetual Pools</small>
                <h1>Leveraged exposure in four steps</h1>
                <div className="step-info__text d-flex col-6">
                  <span className="step-info__number">01</span>
                  <p><b>Select side</b></p>
                  <p>BTC/DAI, LINK/DAI, or ETH/DAI</p>
                </div>
                <div className="step-progress">
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
              <div className="col-6 step-animation">
              {/* loop="loop"  */}
                <picture className="step-animation__tile">
                  <img src={marketTile}/>
                </picture>
                <video muted autoPlay playsInline>
                  <source src={stepOne} type="video/mp4" />
                </video>
              </div>
            </div>
          </section>
          <Tween from={{ x: "100%" }} to={{ x: "0%" }}>
            <section className="panel">
              <div className="d-flex container-xl">
                <div className="col-6 step-info">
                  <small>Perpetual Pools</small>
                  <h1>Leveraged exposure in four steps</h1>
                  <div className="step-info__text d-flex col-6">
                    <span className="step-info__number">02</span>
                    <p><b>Select market</b></p>
                    <p>Long or short</p>
                  </div>
                  <div className="step-progress">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </div>
                <div className="col-6 step-animation">
                  <picture className="step-animation__tile">
                    <img src={sideTile}/>
                  </picture>
                </div>
              </div>
            </section>
          </Tween>
          <Tween from={{ x: "100%" }} to={{ x: "0%" }}>
            <section className="panel">
              <div className="d-flex container-xl">
                <div className="col-6 step-info">
                  <small>Perpetual Pools</small>
                  <h1>Leveraged exposure in four steps</h1>
                  <div className="step-info__text d-flex col-6">
                    <span className="step-info__number">03</span>
                    <p><b>Select leverage</b></p>
                    <p>1x, 2x, 3x, 5x, or 15x</p>
                  </div>
                  <div className="step-progress">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </div>
                <div className="col-6 step-animation">
                  <picture className="step-animation__tile">
                    <img src={leverageTile}/>
                  </picture>
                </div>
              </div>
            </section>
          </Tween>
          <Tween from={{ x: "100%" }} to={{ x: "0%" }}>
            <section className="panel">
              <div className="d-flex container-xl">
                <div className="col-6 step-info">
                  <small>Perpetual Pools</small>
                  <h1>Leveraged exposure in four steps</h1>
                  <div className="step-info__text d-flex col-6">
                    <span className="step-info__number">04</span>
                    <p><b>Enter collateral</b></p>
                    <p>Deposit collateral and press 'buy' to 
                      gain leveraged exposure</p>
                  </div>
                  <div className="step-progress">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </div>
                <div className="col-6 step-animation">
                  <picture className="step-animation__tile">
                    <img src={amountTile}/>
                  </picture>
                </div>
              </div>
            </section>
          </Tween>
          {/* Empty panel to stop scroll immediately after step 4 */}
          <Tween from={{ x: "100%" }} to={{ x: "200%" }}>
            <section className="panel">
            </section>
          </Tween>
        </Timeline>
      </Scene>
    </Controller>
  );
};

export default ScrollSteps;
