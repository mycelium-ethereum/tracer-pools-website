import React from "react";

// Components
import Layout from "../components/layout";
import SEO from "../components/seo";
import ETHDenverBanner from "../components/eth-denver-banner";
import Hero from "../components/hero";
import TracerCity from "../components/tracer-city";
import LeverageSteps from "../components/leverage-steps";
import WalletAnimation from "../components/wallet-animation";
import IntegrateAnimation from "../components/integrate-animation";
import PartnersContributors from "../components/partners-contributors";

const Index = () => {
  return (
    <>
      <SEO title="Home" />
      <Layout>
        <ETHDenverBanner />
        <Hero />
        <LeverageSteps />
        <WalletAnimation />
        <TracerCity />
        <IntegrateAnimation />
        <PartnersContributors />
      </Layout>
    </>
  );
};

export default Index;
