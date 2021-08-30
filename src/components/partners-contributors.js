import React, { useEffect } from "react";

// Image assets

// Partners
import Framework from "/static/img/home-page/partners-contributors/partners/framework.svg";
import Koji from "/static/img/home-page/partners-contributors/partners/koji.svg";
import DACM from "/static/img/home-page/partners-contributors/partners/dacm.svg";
import DistributedGlobal from "/static/img/home-page/partners-contributors/partners/distributed-global.svg";
import GSR from "/static/img/home-page/partners-contributors/partners/gsr.svg";
import Maven from "/static/img/home-page/partners-contributors/partners/maven.svg";
import LAO from "/static/img/home-page/partners-contributors/partners/lao.svg";
import EfficientFrontier from "/static/img/home-page/partners-contributors/partners/efficient-frontier.svg";
import B from "/static/img/home-page/partners-contributors/partners/b.svg";
import Apollo from "/static/img/home-page/partners-contributors/partners/apollo.svg";

// Contributors
import Mycelium from "/static/img/home-page/partners-contributors/contributors/mycelium.svg";
import Chainlink from "/static/img/home-page/partners-contributors/contributors/chainlink.svg";
import SigmaPrime from "/static/img/home-page/partners-contributors/contributors/sigma-prime.svg";
import RMIT from "/static/img/home-page/partners-contributors/contributors/rmit.svg";
import EPNS from "/static/img/home-page/partners-contributors/contributors/epns.svg";

// Media
import FinancialReview from "/static/img/home-page/partners-contributors/media/financial-review.png";
import CoinTelegraph from "/static/img/home-page/partners-contributors/media/coin-telegraph.png";

const PartnersContributors = () => {
  const isMobile = () => {
    const width = window.innerWidth;
    if (width < 1024) {
      return true;
    } else {
      return false;
    }
  };
  const toggleActiveStyles = () => {
    const slides = document.querySelectorAll("#pinContainerPartners .panel");
    if (isMobile()) {
      slides[0].classList.add("active");
      // slides.forEach((e) => e.classList.add("active"));
    } else {
      // slides.forEach((e) => e.classList.remove("active"));
      slides[0].classList.remove("active");
    }
  };
  useEffect(() => {
    toggleActiveStyles();
    window.addEventListener("resize", function () {
      toggleActiveStyles();
    });
  });
  return (
    <>
      <section id="pinMasterPartners" className="pin-master">
        <div id="pinContainerPartners" className="pin-container">
          <section className="panel lg:absolute relative top-0 left-0 w-full lg:h-full h-auto partners flex flex-col justify-start bg-white opacity-0 z-0 transition-all duration-1000 lg:pb-0 pb-24">
            <div className="flex container xl mx-auto flex flex-col items-center justify-start h-full 2xl:pt-48 lg:pt-32">
              <p className="2xl:text-4xl lg:text-3xl font-bold color-darkgrey 2xl:mb-4 lg:mb-2 text-2xl">
                Partners
              </p>
              <p className="2xl:text-4xl lg:text-3xl color-lightgrey 2xl:mb-4 lg:mb-2 text-2xl">
                Ecosystem Contributors
              </p>
              <p className="2xl:text-4xl lg:text-3xl color-lightgrey 2xl:mb-4 lg:mb-2 text-2xl">
                In the Media
              </p>
              <div className="h-auto w-full flex flex-col justify-center">
                <div className="flex w-full 2xl:h-32 lg:h-24 justify-center items-center 2xl:mt-10 lg:2xl:mt-10 xl:mt-3 lg:mt-8 mt-6">
                  <img
                    className="2xl:w-60 lg:w-48 lg:mr-10 w-32 mr-5"
                    src={Framework}
                  />
                  <img className="2xl:w-60 lg:w-48 w-24" src={Koji} />
                </div>
                <div className="flex w-full 2xl:h-32 lg:h-24 lg:mt-0 mt-6 flex-wrap justify-center items-center">
                  <img className="2xl:w-60 lg:w-48 lg:mr-10" src={DACM} />
                  <img
                    className="2xl:w-60 lg:w-48 lg:mr-10 mr-5"
                    src={DistributedGlobal}
                  />
                  <img
                    className="2xl:w-60 lg:w-48 lg:mr-10 sm:mt-0 mt-6"
                    src={GSR}
                  />
                </div>
                <div className="flex w-full 2xl:h-32 lg:h-24 lg:mt-0 mt-6 flex-wrap justify-center items-center">
                  <img className="lg:w-32 lg:mr-10 w-24 mr-5" src={Maven} />
                  <img className="lg:w-32 lg:mr-10 w-24 mr-5" src={LAO} />
                  <img
                    className="lg:w-32 lg:mr-10 w-24"
                    src={EfficientFrontier}
                  />
                  <img className="lg:w-32 lg:mr-10 w-24 mr-5" src={B} />
                  <img className="lg:w-32 w-24" src={Apollo} />
                </div>
              </div>
            </div>
          </section>
          <section className="panel absolute top-0 left-0 w-full lg:h-full h-auto contributors flex flex-col justify-start bg-white opacity-0 z-0 transition-all duration-1000">
            <div className="flex container xl mx-auto flex flex-col items-center justify-start h-full 2xl:pt-48 lg:pt-32">
              <p className="2xl:text-4xl lg:text-3xl color-lightgrey 2xl:mb-4 lg:mb-2">
                Partners
              </p>
              <p className="2xl:text-4xl lg:text-3xl font-bold color-darkgrey 2xl:mb-4 lg:mb-2">
                Ecosystem Contributors
              </p>
              <p className="2xl:text-4xl lg:text-3xl color-lightgrey 2xl:mb-4 lg:mb-2">
                In the Media
              </p>
              <div className="h-auto w-full flex flex-col justify-center">
                <div className="flex w-full 2xl:h-32 lg:h-24 justify-center items-center 2xl:mt-10 lg:2xl:mt-10 xl:mt-3 lg:mt-8">
                  <img className="2xl:w-60 lg:w-48 mr-10" src={Mycelium} />
                  <img className="2xl:w-60 lg:w-48" src={Chainlink} />
                </div>
                <div className="flex w-full 2xl:h-32 lg:h-24 justify-center items-center">
                  <img className="2xl:w-60 lg:w-48 mr-10" src={SigmaPrime} />
                  <img className="w-32 mr-10" src={RMIT} />
                  <img className="2xl:w-60 lg:w-48 mr-10" src={EPNS} />
                </div>
              </div>
            </div>
          </section>
          <section className="panel absolute top-0 left-0 w-full lg:h-full h-auto media flex flex-col justify-start bg-white opacity-0 z-0 transition-all duration-1000">
            <div className="flex container xl mx-auto flex flex-col items-center justify-start h-full 2xl:pt-48 lg:pt-32">
              <p className="2xl:text-4xl lg:text-3xl color-lightgrey 2xl:mb-4 lg:mb-2">
                Partners
              </p>
              <p className="2xl:text-4xl lg:text-3xl color-lightgrey 2xl:mb-4 lg:mb-2">
                Ecosystem Contributors
              </p>
              <p className="2xl:text-4xl lg:text-3xl font-bold color-darkgrey 2xl:mb-4 lg:mb-2">
                In the Media
              </p>
              <div className="h-auto w-full flex flex-col justify-center">
                <div className="flex justify-center items-start 2xl:mt-10 xl:mt-3 lg:mt-8">
                  <div className="flex flex-col justify-start items-center text-center w-96 mr-5">
                    <img
                      className="2xlw-full xl:w-28 lg:w-80"
                      src={FinancialReview}
                    />
                    <p className="mb-4 mt-6 text-xl">
                      <b className="text-semibold">
                        Australian Financial Review
                      </b>
                    </p>
                    <p className="text-xl">
                      A new system for trading derivatives has raised $US4.5
                      million from leading investors in the booming area of
                      decentralised finance and its local developer is creating
                      jobs in Australia to build it out.
                    </p>
                  </div>
                  <div className="flex flex-col justify-start items-center text-center w-96 ml-5">
                    <img
                      className="2xlw-full xl:w-28 lg:w-80"
                      src={CoinTelegraph}
                    />
                    <p className="mb-4 mt-6 text-xl">
                      <b className="text-semibold">Coin Telegraph</b>
                    </p>
                    <p className="text-xl">
                      Decentralised derivatives platform, Tracer DAO, has
                      announced a successful $4.5 million fundraising round to
                      expand its team and product suite.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>
    </>
  );
};

export default PartnersContributors;
