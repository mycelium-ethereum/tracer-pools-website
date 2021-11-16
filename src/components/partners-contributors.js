import React, { useRef } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

// Images
import FrameworkLogo from "/static/img/home-page/partners-contributors/partners/framework.svg";
import KojiLogo from "/static/img/home-page/partners-contributors/partners/koji.svg";
import DACMLogo from "/static/img/home-page/partners-contributors/partners/dacm.svg";
import DistributedGlobalLogo from "/static/img/home-page/partners-contributors/partners/distributed-global.svg";
import GSRLogo from "/static/img/home-page/partners-contributors/partners/gsr.svg";
import MavenLogo from "/static/img/home-page/partners-contributors/partners/maven.svg";
import LAOLogo from "/static/img/home-page/partners-contributors/partners/lao.svg";
import EfficientFrontier from "/static/img/home-page/partners-contributors/partners/efficient-frontier.svg";
import BLogo from "/static/img/home-page/partners-contributors/partners/b.svg";
import ApolloLogo from "/static/img/home-page/partners-contributors/partners/apollo.svg";
import MyceliumLogo from "/static/img/home-page/partners-contributors/contributors/mycelium.svg";
import ChainlinkLogo from "/static/img/home-page/partners-contributors/contributors/chainlink.svg";
import SigmaPrimeLogo from "/static/img/home-page/partners-contributors/contributors/sigma-prime.svg";
import RMITLogo from "/static/img/home-page/partners-contributors/contributors/rmit.svg";
import EPNSLogo from "/static/img/home-page/partners-contributors/contributors/epns.svg";
import AFRLogo from "/static/img/home-page/partners-contributors/media/financial-review.png";
import CoinTelegraphLogo from "/static/img/home-page/partners-contributors/media/coin-telegraph.png";

const PartnersContributors = () => {
  const slider = useRef(0);
  const goToSlide = (e) => {
    const slideNo = e.target.dataset.slide;
    slider.current.slickGoTo(slideNo);
  };
  const settings = {
    speed: 300,
    // autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "linear",
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    arrows: false,
    touchMove: true,
    swipeToSlide: false,
    pauseOnFocus: true,
    pauseOnHover: true,
    waitForAnimate: false,
    fade: true,
  };
  return (
    <>
      <section className="h-full w-screen lg:pt-12 md:pt-24 md:pb-0 pb-12 pt-48">
        <Slider {...settings} ref={slider}>
          <section className="panel relative w-screen">
            <div className="container mx-auto flex flex-col items-center justify-start lg:px-0 px-4">
              <div className="sm:justify-evenly flex sm:flex-nowrap mx-auto justify-center flex-wrap">
                <button
                  data-slide="0"
                  onClick={(e) => goToSlide(e)}
                  className="block 2xl:text-4xl lg:text-3xl cursor-pointer pb-1 md:mx-8 sm:mx-6 mr-4 font-bold text-white sm:text-2xl whitespace-nowrap text-lg lg:mb-0 lg:border-b-8 sm:border-b-4 mb-2 border-b-2 border-blue "
                >
                  Partners
                </button>
                <button
                  data-slide="1"
                  onClick={(e) => goToSlide(e)}
                  className="block 2xl:text-4xl lg:text-3xl cursor-pointer pb-1 md:mx-8 sm:mx-6 mr-4 color-bluegrey font-normal sm:text-2xl whitespace-nowrap text-lg lg:mb-0 lg:border-b-8 sm:border-b-4 mb-2 border-b-2 border-transparent"
                >
                  Ecosystem Contributors
                </button>
                <button
                  data-slide="2"
                  onClick={(e) => goToSlide(e)}
                  className="block 2xl:text-4xl lg:text-3xl cursor-pointer pb-1 md:mx-8 sm:mx-6 mr-4 color-bluegrey font-normal sm:text-2xl whitespace-nowrap text-lg lg:mb-0 lg:border-b-8 sm:border-b-4 mb-2 border-b-2 border-transparent"
                >
                  In the Media
                </button>
              </div>
              <div className="w-full flex flex-col justify-center lg:mt-20 mt-12">
                <div className="flex w-full justify-center items-center">
                  <img
                    className="2xl:w-60 lg:w-48 lg:mr-12 sm:mr-8 sm:w-32 w-20 mr-5"
                    src={FrameworkLogo}
                    alt="Framework Logo"
                  />
                  <img
                    className="2xl:w-44 lg:w-36 sm:w-24 w-14"
                    src={KojiLogo}
                    alt="Koji Logo"
                  />
                </div>
                <div className="flex w-full mt-10 justify-center items-center">
                  <img
                    className="2xl:w-60 lg:w-48 lg:mr-12 sm:mr-8 sm:w-36 mr-3 w-20"
                    src={DACMLogo}
                    alt="DACM Logo"
                  />
                  <img
                    className="2xl:w-60 lg:w-48 lg:mr-12 sm:mr-8 sm:w-44 mr-3 w-32"
                    src={DistributedGlobalLogo}
                    alt="DistributedGlobal Logo"
                  />
                  <img
                    className="2xl:w-44 lg:w-44 lg:mr-12 sm:mr-8 sm:mt-0 sm:w-36 w-16"
                    src={GSRLogo}
                    alt="GSR Logo"
                  />
                </div>
                <div className="flex w-full mt-10 flex-wrap justify-center items-center">
                  <img
                    className="lg:w-32 lg:mr-12 sm:w-24 sm:mr-8 w-12 mr-3"
                    src={MavenLogo}
                    alt="Maven Logo"
                  />
                  <img
                    className="lg:w-24 lg:mr-12 sm:w-20 sm:mr-8 w-10 mr-3"
                    src={LAOLogo}
                    alt="The LAO Logo"
                  />
                  <img
                    className="lg:w-32 lg:mr-12 sm:w-24 sm:mr-8 w-12 mr-3"
                    src={EfficientFrontier}
                    alt="EfficientFrontier Logo"
                  />
                  <img
                    className="lg:w-20 lg:mr-12 sm:w-12 w-7 mr-3"
                    src={BLogo}
                    alt="B Logo"
                  />
                  <img
                    className="lg:w-40 sm:w-24 w-12"
                    src={ApolloLogo}
                    alt="Apollo Logo"
                  />
                </div>
              </div>
            </div>
          </section>
          <section className="panel relative w-screen">
            <div className="container mx-auto flex flex-col items-center justify-start lg:px-0 px-4">
              <div className="sm:justify-evenly flex sm:flex-nowrap mx-auto justify-center flex-wrap sm:text-left text-center">
                <button
                  data-slide="0"
                  onClick={(e) => goToSlide(e)}
                  className="block 2xl:text-4xl lg:text-3xl cursor-pointer pb-1 md:mx-8 sm:mx-6 mr-4 color-bluegrey font-normal sm:text-2xl whitespace-nowrap text-lg lg:mb-0 lg:border-b-8 sm:border-b-4 mb-2 border-b-2 border-transparent"
                >
                  Partners
                </button>
                <button
                  data-slide="1"
                  onClick={(e) => goToSlide(e)}
                  className="block 2xl:text-4xl lg:text-3xl cursor-pointer pb-1 md:mx-8 sm:mx-6 mr-4 font-bold text-white sm:text-2xl whitespace-nowrap text-lg lg:mb-0 lg:border-b-8 sm:border-b-4 mb-2 border-b-2 border-blue "
                >
                  Ecosystem Contributors
                </button>
                <button
                  data-slide="2"
                  onClick={(e) => goToSlide(e)}
                  className="block 2xl:text-4xl lg:text-3xl cursor-pointer pb-1 md:mx-8 sm:mx-6 mr-4 color-bluegrey font-normal sm:text-2xl whitespace-nowrap text-lg lg:mb-0 lg:border-b-8 sm:border-b-4 mb-2 border-b-2 border-transparent"
                >
                  In the Media
                </button>
              </div>
              <div className="w-full flex flex-col justify-center lg:mt-20 sm:pb-24 xl:px-0 mt-12 px-4 pb-12">
                <div className="flex w-full 2xl:h-32 lg:h-24 justify-center items-center">
                  <img
                    className="2xl:w-60 lg:w-48 sm:mr-10 sm:w-48 w-24 mr-5"
                    src={MyceliumLogo}
                    alt="Mycelium Logo"
                  />
                  <img
                    className="2xl:w-60 lg:w-48 sm:w-48 w-24"
                    src={ChainlinkLogo}
                    alt="Chainlink Logo"
                  />
                </div>
                <div className="flex w-full 2xl:h-32 lg:h-24 justify-center items-center sm:mt-8 mt-6">
                  <img
                    className="2xl:w-60 lg:w-48 sm:w-48 w-24 sm:mr-10 mr-5"
                    src={SigmaPrimeLogo}
                    alt="SigmaPrime Logo"
                  />
                  <img
                    className="lg:w-32 sm:w-20 sm:mr-10 w-12  mr-5"
                    src={RMITLogo}
                    alt="RMIT Logo"
                  />
                  <img
                    className="2xl:w-60 lg:w-48 sm:w-32 w-20 sm:mr-10 mr-5"
                    src={EPNSLogo}
                    alt="EPNS Logo"
                  />
                </div>
              </div>
            </div>
          </section>
          <section className="panel relative w-screen">
            <div className="container mx-auto flex flex-col items-center justify-start lg:px-0 px-4">
              <div className="sm:justify-evenly flex sm:flex-nowrap mx-auto justify-center flex-wrap sm:text-left text-center">
                <button
                  data-slide="0"
                  onClick={(e) => goToSlide(e)}
                  className="block 2xl:text-4xl lg:text-3xl cursor-pointer pb-1 md:mx-8 sm:mx-6 mr-4 color-bluegrey font-normal sm:text-2xl whitespace-nowrap text-lg lg:mb-0 lg:border-b-8 sm:border-b-4 mb-2 border-b-2 border-transparent"
                >
                  Partners
                </button>
                <button
                  data-slide="1"
                  onClick={(e) => goToSlide(e)}
                  className="block 2xl:text-4xl lg:text-3xl cursor-pointer pb-1 md:mx-8 sm:mx-6 mr-4 color-bluegrey font-normal sm:text-2xl whitespace-nowrap text-lg lg:mb-0 lg:border-b-8 sm:border-b-4 mb-2 border-b-2 border-transparent"
                >
                  Ecosystem Contributors
                </button>
                <button
                  data-slide="2"
                  onClick={(e) => goToSlide(e)}
                  className="block 2xl:text-4xl lg:text-3xl cursor-pointer pb-1 md:mx-8 sm:mx-6 mr-4 font-bold text-white sm:text-2xl whitespace-nowrap text-lg lg:mb-0 lg:border-b-8 sm:border-b-4 mb-2 border-b-2 border-blue"
                >
                  In the Media
                </button>
              </div>
              <div className="w-full flex flex-col justify-center lg:mt-20 mt-12">
                <div className="flex justify-center items-start">
                  <a
                    href="https://www.afr.com/companies/financial-services/meet-the-defi-developers-who-ve-raised-funds-for-a-derivatives-system-20210628-p5850t"
                    target="_blank"
                    rel="noreferrer"
                    className="flex flex-col justify-start items-center text-center w-96 sm:mr-5 mr-3 text-white"
                  >
                    <img
                      placeholder="blurred"
                      className="2xl:w-full xl:w-28 lg:w-52 sm:w-full w-32 rounded-2xl"
                      src={AFRLogo}
                      alt="AFR Logo"
                    />
                    <p className="mb-4 mt-6 sm:text-xl text-lg">
                      <b className="text-semibold">
                        Australian Financial Review
                      </b>
                    </p>
                    <p className="lg:text-xl text-lg sm:block hidden">
                      A new system for trading derivatives has raised $US4.5
                      million from leading investors in the booming area of
                      decentralised finance and its local developer is creating
                      jobs in Australia to build it out.
                    </p>
                  </a>
                  <a
                    href="https://www.cointelegraph.com/news/tracer-dao-raises-4-5m-to-launch-derivatives-for-anything-with-an-oracle-feed"
                    target="_blank"
                    rel="noreferrer"
                    className="flex flex-col justify-start items-center text-center w-96 sm:ml-5 ml-3 text-white"
                  >
                    <img
                      className="2xl:w-full xl:w-28 lg:w-52 sm:w-full w-32 rounded-2xl"
                      src={CoinTelegraphLogo}
                      alt="Coin Telegraph Logo"
                    />
                    <p className="mb-4 mt-6 sm:text-xl text-lg">
                      <b className="text-semibold">Coin Telegraph</b>
                    </p>
                    <p className="lg:text-xl text-lg sm:block hidden">
                      Decentralised derivatives platform, Tracer DAO, has
                      announced a successful $4.5 million fundraising round to
                      expand its team and product suite.
                    </p>
                  </a>
                </div>
              </div>
            </div>
          </section>
        </Slider>
      </section>
    </>
  );
};

export default PartnersContributors;
