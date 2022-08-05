import React from "react";

// Components
import Layout from "../components/layout";
import SEO from "../components/seo";
import Hero from "../components/hero";
import TracerCity from "../components/tracer-city";
import LeverageSteps from "../components/leverage-steps";
import WalletAnimation from "../components/wallet-animation";
import IntegrateAnimation from "../components/integrate-animation";
import PartnersContributors from "../components/partners-contributors";
import MyceliumPopup from "../components/mycelium-popup";

const Index = () => {
  return (
    <>
      <SEO title="Home" />
      <Layout>
        <MyceliumPopup />
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
