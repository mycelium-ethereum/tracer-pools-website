/* eslint-disable */
import React from "react";
import { Link } from "gatsby";

// Components
import Layout from "../components/layout";
import SEO from "../components/seo";
import Socials from "../components/socials";
import Button from "../components/button";
import ArrowDown from "../components/arrowdown";
import ScrollSteps from "../components/scroll-steps";
import WebGLBackground from "../components/webgl";
import ScrollTracerCity from "../components/scroll-city";
import TokenSlider from "../components/slider";

// Assets
import tracer_laptop from "/static/img/home-page/laptop.svg";
import metamask_fox from "/static/img/slider/metamask-fox.svg";

const Index = () => {
  return (
    <>
      <SEO title="Home" />
      <Layout>
        <Socials />
        <section role="main" className="hero-banner">
          <WebGLBackground />
          <div className="hero-banner__container container-xl">
            <header>
              <h1>Perpetual Pools</h1>
              <p>Leveraged exposure.</p>
              <p>
                <b>No margins. No liquidations.</b>
              </p>
              <p>A new derivative primitive.</p>
              <Button linkTo="#">Launch Pools</Button>
              <Link to="#" className="documentation-link">
                Documentation
              </Link>
            </header>
            <div className="hero-banner__laptop">
              <img src={tracer_laptop} />
            </div>
          </div>
          <ArrowDown linkTo="#steps" />
        </section>
        <div className="spacer"></div>
        <ScrollSteps />
        <section className="position-slider">
          <div className="container-xl d-flex flex-column align-items-start justify-content-start">
            <h1>Fungible ERC20 Tokenised Positions</h1>
            <small>That live in your wallet</small>
            <TokenSlider className="slider slider-left position-absolute"/>
            <div className="metamask-fox position-absolute start-50 translate-middle-x">
              <div className="undershadow position-absolute top-50 translate-middle-y">

              </div>
              <picture className="d-flex flex-column justify-content-center position-relative">
                <img src={metamask_fox} />
              </picture>
              {/* <Button linkTo="#" smallButton>Launch Pools</Button> */}
            </div>
            <TokenSlider className="slider slider-right position-absolute d-flex"/>
          </div>
        </section>
        <section className="build-section">
          <ScrollTracerCity />
        </section>
      </Layout>
    </>
  );
};

export default Index;
