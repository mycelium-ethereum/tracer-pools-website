/* eslint-disable */
import React from "react";

// Components
import Layout from "../components/layout";
import SEO from "../components/seo";
import Hero from "../components/hero";
import Socials from "../components/socials";
import ScrollSteps from "../components/scroll-steps";
import ScrollTracerCity from "../components/scroll-city";
import WalletAnimation from "../components/wallet-animation";
import IntegrateAnimation from "../components/integrate-animation";

const Index = () => {
  return (
    <>
      <SEO title="Home" />
      <Layout>
        <Hero />
        <ScrollSteps />
        <WalletAnimation />
        <ScrollTracerCity />
        <IntegrateAnimation />
        <Socials />
      </Layout>
    </>
  );
};

export default Index;
