import React, { useEffect, useState } from "react";
import { Controller, Scene } from "react-scrollmagic";
import { Tween, Timeline } from "react-gsap";

// Image assets
import placeholder from "/static/img/home-page/placeholder.svg";
import stepOne from "/static/img/home-page/steps/step-one.mp4";

const ScrollSteps = () => {
  const [progress, updateProgress] = useState(0);
  useEffect(() => {
    document.addEventListener("scroll", function(){
      console.log(progress);
    });
  });
  return (
    <Controller>
      <Scene
        triggerHook="onLeave"
        duration="300%"
        pin
      >
        <Timeline wrapper={<div id="pinContainer" />}>
          <section className="panel">
            <div className="d-flex container-xl">
              <div className="col-6 step-info">
                <small>Perpetual Pools</small>
                <h1>Leveraged exposure in four steps</h1>
                <div className="step-info__text d-flex col-3">
                  <span className="step-info__number">01</span>
                  <p><b>Select side</b></p>
                  <p>BTC/DAI, LINK/DAI, or ETH/DAI</p>
                </div>
                <div className="step-progress">
                  <span className="active"></span>
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
              <div className="col-6 animation">
              {/* loop="loop"  */}
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
                
                </div>
                <div className="col-6 animation">
                {/* loop="loop"  */}
                  <video muted autoPlay playsInline>
                    <source src={stepOne} type="video/mp4" />
                  </video>
                </div>
              </div>
            </section>
          </Tween>
          <Tween from={{ x: "100%" }} to={{ x: "0%" }}>
            <section className="panel">
              <div className="d-flex container-xl">
                <div className="col-6 step-info">
     
                </div>
                <div className="col-6 animation">
                {/* loop="loop"  */}
                  <video muted autoPlay playsInline>
                    <source src={stepOne} type="video/mp4" />
                  </video>
                </div>
              </div>
            </section>
          </Tween>
          <Tween from={{ x: "100%" }} to={{ x: "0%" }}>
            <section className="panel">
              <div className="d-flex container-xl">
                <div className="col-6 step-info">
                  
                </div>
                <div className="col-6 animation">
                {/* loop="loop"  */}
                  <video muted autoPlay playsInline>
                    <source src={stepOne} type="video/mp4" />
                  </video>
                </div>
              </div>
            </section>
          </Tween>
        </Timeline>
      </Scene>
    </Controller>
  );
};

export default ScrollSteps;
