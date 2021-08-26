import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
// Assets
import eth_left from "/static/img/slider/eth-left.svg";
import link_left from "/static/img/slider/link-left.svg";
import btc_left from "/static/img/slider/btc-left.svg";
import eth_right from "/static/img/slider/eth-right.svg";
import link_right from "/static/img/slider/link-right.svg";
import btc_right from "/static/img/slider/btc-right.svg";

const TokenSlider = ({ className }) => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline({
      paused: true,
      scrollTrigger: {
        trigger: ".position-slider",
        endTrigger: ".build-section",
        scrub: true,
        markers: true,
        start: "top",
        end: "bottom"
      },
    });
    const t2 = gsap.timeline({
      paused: true,
      scrollTrigger: {
        trigger: ".position-slider",
        endTrigger: ".build-section",
        scrub: true,
        markers: true,
        start: "top",
        end: "bottom"
      },
    });

    tl.to(".slider-right .token-anim", { xPercent: -50, yPercent: 0 });
    tl.to(".slider-right .token-anim", { xPercent: -25, yPercent: 0 });
    tl.to(".slider-right .token-anim", { xPercent: 0, yPercent: 0 });

    t2.to(".slider-left .token-anim", { xPercent: 50, yPercent: 0 });
    t2.to(".slider-left .token-anim", { xPercent: 25, yPercent: 0 });
    t2.to(".slider-left .token-anim", { xPercent: 0, yPercent: 0 });
  });
  return (
    <>
      <div className={className}>
        <div className="token-anim flex">
          <div className="item">
            <img
              src={className.includes("slider-left") ? eth_left : eth_right}
              alt="Eth"
            />
          </div>
          <div className="item">
            <img
              src={className.includes("slider-left") ? link_left : link_right}
              alt="Link"
            />
          </div>
          <div className="item">
            <img
              src={className.includes("slider-left") ? btc_left : btc_right}
              alt="BTC"
            />
          </div>
          <div className="item">
            <img
              src={className.includes("slider-left") ? eth_left : eth_right}
              alt="Eth"
            />
          </div>
          <div className="item">
            <img
              src={className.includes("slider-left") ? link_left : link_right}
              alt="Link"
            />
          </div>
          <div className="item">
            <img
              src={className.includes("slider-left") ? btc_left : btc_right}
              alt="BTC"
            />
          </div>
          <div className="item">
            <img
              src={className.includes("slider-left") ? eth_left : eth_right}
              alt="Eth"
            />
          </div>
          <div className="item">
            <img
              src={className.includes("slider-left") ? link_left : link_right}
              alt="Link"
            />
          </div>
          <div className="item">
            <img
              src={className.includes("slider-left") ? btc_left : btc_right}
              alt="BTC"
            />
          </div>
          <div className="item">
            <img
              src={className.includes("slider-left") ? eth_left : eth_right}
              alt="Eth"
            />
          </div>
          <div className="item">
            <img
              src={className.includes("slider-left") ? link_left : link_right}
              alt="Link"
            />
          </div>
          <div className="item">
            <img
              src={className.includes("slider-left") ? btc_left : btc_right}
              alt="BTC"
            />
          </div>
          <div className="item">
            <img
              src={className.includes("slider-left") ? eth_left : eth_right}
              alt="Eth"
            />
          </div>
          <div className="item">
            <img
              src={className.includes("slider-left") ? link_left : link_right}
              alt="Link"
            />
          </div>
          <div className="item">
            <img
              src={className.includes("slider-left") ? btc_left : btc_right}
              alt="BTC"
            />
          </div>
          <div className="item">
            <img
              src={className.includes("slider-left") ? eth_left : eth_right}
              alt="Eth"
            />
          </div>
          <div className="item">
            <img
              src={className.includes("slider-left") ? link_left : link_right}
              alt="Link"
            />
          </div>
          <div className="item">
            <img
              src={className.includes("slider-left") ? btc_left : btc_right}
              alt="BTC"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default TokenSlider;
