/* eslint-disable */
import React, {useState} from "react";
import ReactScrollWheelHandler from "react-scroll-wheel-handler";

// Components
import Layout from "../components/layout";
import SEO from "../components/seo";
import Hero from "../components/hero";
import Socials from "../components/socials";
import TracerCity from "../components/tracer-city";
import LeverageSteps from "../components/leverage-steps";
import WalletAnimation from "../components/wallet-animation";
import IntegrateAnimation from "../components/integrate-animation";
import PartnersContributors from "../components/partners-contributors";

const Index = () => {
  const [direction, setDirection] = useState("");
  return (
    <>
      <SEO title="Home" />
      <Layout>
        <ReactScrollWheelHandler
          upHandler={(e) => setDirection("up")}
          downHandler={(e) => setDirection("down")}
        >
          <Hero />
          <LeverageSteps direction={direction} />
          <WalletAnimation/>
          <TracerCity />
          <IntegrateAnimation />
          <PartnersContributors />
          <Socials />
        </ReactScrollWheelHandler>
      </Layout>
    </>
  );
};

export default Index;
