/* eslint-disable */
import React from "react";

// Components
import Layout from "../components/layout";
import SEO from "../components/seo";
import Hero from "../components/hero";
import Socials from "../components/socials";
import LeverageSteps from "../components/leverage-steps";
import TracerCity from "../components/tracer-city";
import WalletAnimation from "../components/wallet-animation";
import IntegrateAnimation from "../components/integrate-animation";
import PartnersContributors from "../components/partners-contributors";

const Index = () => {
  return (
    <>
      <SEO title="Home" />
      <Layout>
        <Hero />
        <LeverageSteps />
        <WalletAnimation />
        <TracerCity />
        <IntegrateAnimation />
        <PartnersContributors/>
        <Socials />
      </Layout>
    </>
  );
};

export default Index;
