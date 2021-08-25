import React, { useEffect, useState } from "react";
import gsap from "gsap";
import { TimelineMax, TweenMax, TweenLite } from "gsap/all";
import ScrollMagic from "scrollmagic";
import "scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap";
//all the css animations need gsap as dependency
// import { Controller, Scene } from "react-scrollmagic";
// import { Tween, Timeline } from "react-gsap";

// Image assets
import marketTile from "/static/img/home-page/steps/market-01.svg";
import sideTile from "/static/img/home-page/steps/side-02.svg";
import leverageTile from "/static/img/home-page/steps/leverage-03.svg";
import amountTile from "/static/img/home-page/steps/amount-04.svg";
import stepOne from "/static/img/home-page/steps/step-one.mp4";

const ScrollSteps = () => {
  const [scrollPosition, setScrollPosition] = useState("");
  const [currentSlide, setCurrentSlide] = useState(0);
  const [previousSlide, setPreviousSlide] = useState(0);
  const updateActiveSlide = (progress) => {
    const slides = document.querySelectorAll("#pinMaster .panel");
    slides.forEach((e) => e.classList.remove("active"));
    if (progress < 0.2) {
      slides[0].classList.add("active");
    }
    if (progress > 0.2 && progress <= 0.4) {
      slides[1].classList.add("active");
    }
    if (progress > 0.4 && progress <= 0.6) {
      slides[2].classList.add("active");
    }
    if (progress > 0.6 && progress <= 1.0) {
      slides[3].classList.add("active");
    }
  };
  const getScrollDirection = () => {
    const pinContainer = document.querySelector("#pinContainer");
    console.log(currentSlide);
    console.log(previousSlide);
  };

  useEffect(() => {
    if(typeof window !== 'undefined' && window){
      const controller = new ScrollMagic.Controller();
      var tl = gsap.timeline();
      tl.from(".panel.step-two", 1, { xPercent: 0 });
      tl.from(".panel.step-three", 1, { xPercent: 0 });
      tl.from(".panel.step-four", 1, { xPercent: 0 });

      const scene = new ScrollMagic.Scene({
        triggerElement: "#pinMaster",
        triggerHook: "onLeave",
        duration: "200%",
      })
        .setPin("#pinMaster")
        .setTween(tl)
        .addTo(controller);
      
      // getScrollDirection(scene);
      window.addEventListener("scroll", function () {
        updateActiveSlide(scene.progress());
        // getScrollDirection();
      });
    }
  },[]);
  return (
    <>
      <div id="pinMaster">
        <div id="pinContainer">
          <section className="panel step-one">
            <div className="d-flex container-xl">
              <div className="col-6 step-info">
                <small>Perpetual Pools</small>
                <h1>Leveraged exposure in four steps</h1>
                <div className="step-info__text d-flex col-6">
                  <span className="step-info__number">01</span>
                  <p>
                    <b>Select side</b>
                  </p>
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
                  <img src={marketTile} />
                </picture>
                <video muted autoPlay playsInline>
                  <source src={stepOne} type="video/mp4" />
                </video>
              </div>
            </div>
          </section>
          <section className="panel step-two">
            <div className="d-flex container-xl">
              <div className="col-6 step-info">
                <small className="opacity-0">Perpetual Pools</small>
                <h1 className="opacity-0">Leveraged exposure in four steps</h1>
                <div className="step-info__text d-flex col-6">
                  <span className="step-info__number">02</span>
                  <p>
                    <b>Select market</b>
                  </p>
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
                  <img src={sideTile} />
                </picture>
              </div>
            </div>
          </section>
          <section className="panel step-three">
            <div className="d-flex container-xl">
              <div className="col-6 step-info">
                <small className="opacity-0">Perpetual Pools</small>
                <h1 className="opacity-0">Leveraged exposure in four steps</h1>
                <div className="step-info__text d-flex col-6">
                  <span className="step-info__number">03</span>
                  <p>
                    <b>Select leverage</b>
                  </p>
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
                  <img src={leverageTile} />
                </picture>
              </div>
            </div>
          </section>
          <section className="panel step-four">
            <div className="d-flex container-xl">
              <div className="col-6 step-info">
                <small className="opacity-0">Perpetual Pools</small>
                <h1 className="opacity-0">Leveraged exposure in four steps</h1>
                <div className="step-info__text d-flex col-6">
                  <span className="step-info__number">04</span>
                  <p>
                    <b>Enter collateral</b>
                  </p>
                  <p>
                    Deposit collateral and press 'buy' to gain leveraged
                    exposure
                  </p>
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
                  <img src={amountTile} />
                </picture>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default ScrollSteps;
