import React, { useEffect, useState } from "react";
import { Controller, Scene } from "react-scrollmagic";
import { Tween, Timeline } from "react-gsap";

// Components
import Button from "../components/button";

// Image assets
import tracer_city from "/static/img/home-page/city/tracer-city.png";
import tracer_city_large from "/static/img/home-page/city/tracer-city-large.png";

const ScrollTracerCity = () => {
  useEffect(() => {
  });
  return (
    <Controller>
      <Scene
        triggerHook="onLeave"
        duration="150%"
        pin
      >
        <Timeline wrapper={<div id="pinContainer" />}>
            <section className="panel">
            </section>
            <Tween from={{ x: "0%" }} to={{ x: "0%" }}>
                <section className="panel city-step staking-section">
                    <div className="container-xl d-flex align-items-center">
                    <div className="staking-section__text col-5">
                        <h1>Built for DeFi...</h1>
                        <small>Stake and farm with the dApps you know and love.</small>
                    </div>
                    <div className="staking-section__video col-7">
                        <picture>
                        <img src={tracer_city}/>
                        </picture>
                    </div>
                    </div>
                </section>
            </Tween>
            {/* Empty panel */}
            <Tween from={{ x: "0%", opacity: 0 }} to={{ x: "0%", opacity: 1 }}>
                <section className="panel">
                </section>
            </Tween>
            <Tween from={{ x: "0%", opacity: 0 }} to={{ x: "0%", opacity: 1 }}>
                <section className="panel blue">
                </section>
            </Tween>
            <Tween from={{ x: "0%", opacity: 0 }} to={{ x: "0%", opacity: 1 }}>
                <section className="panel city-step strategise-section">
                    <div className="container-xl d-flex align-items-center">
                        <div className="strategise-section__text col-5">
                            <h1>…&amp; Strategise Natively</h1>
                            <Button linkTo="#" smallButton><span>Strategise Now</span></Button>
                        </div>
                        <div className="strategise-section__video col-7">
                        <div className="strategise-section__gradient"/>
                        <picture>
                            <img src={tracer_city_large}/>
                        </picture>
                        </div>
                    </div>
                </section>
            </Tween>
            {/* Empty panel */}
            <Tween from={{ x: "0%", opacity: 0 }} to={{ x: "0%", opacity: 1 }}>
                <section className="panel">
                </section>
            </Tween>
        </Timeline>
      </Scene>
    </Controller>
  );
};

export default ScrollTracerCity;
