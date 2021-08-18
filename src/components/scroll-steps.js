import React from "react";
import { Controller, Scene } from 'react-scrollmagic';
import { Tween, Timeline } from 'react-gsap';

const ScrollSteps = () => {
  return (
        <Controller>
            <Scene
                // triggerHook="onLeave"
                duration="300%"
                pin
                offset={484}
            >
                <Timeline
                    wrapper={<div id="pinContainer" />}
                >
                    <section className="panel blue"><span>Panel 1</span></section>
                    <Tween
                        from={{ x: '100%' }}
                        to={{ x: '0%' }}
                    >
                        <section className="panel turqoise"><span>Panel 2</span></section>
                    </Tween>
                    <Tween
                        from={{ x: '100%' }}
                        to={{ x: '0%' }}
                    >
                        <section className="panel green"><span>Panel 3</span></section>
                    </Tween>
                    <Tween
                        from={{ x: '100%' }}
                        to={{ x: '0%' }}
                    >
                        <section className="panel bordeaux"><span>Panel 4</span></section>
                    </Tween>
                </Timeline>
            </Scene>
        </Controller>
  );
};

export default ScrollSteps;
