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

// Assets
import tracerLaptop from "/static/img/home-page/laptop.svg";

const Index = () => {

  return (
    <>
      <SEO title="Home" />
      <Layout>
        <Socials />
        <section role="main" className="hero-banner">
          <WebGLBackground/>
          <div className="hero-banner__container container-xl">
            <header>
              <h1>Perpetual Pools</h1>
              <p>
                Leveraged exposure. <b>No margins. No liquidations.</b>
              </p>
              <p>A new derivative primitive.</p>
              <Button linkTo="#">Launch Pools</Button>
              <Link to="#" className="documentation-link">
                Documentation
              </Link>
            </header>
            <div className="hero-banner__laptop">
              <img src={tracerLaptop} />
            </div>
          </div>
          <ArrowDown />
        </section>
        <div className="spacer"></div>
        <section className="scrollmagic-slides">
          <ScrollSteps/>
        </section>
      </Layout>
    </>
  );
};

export default Index;
