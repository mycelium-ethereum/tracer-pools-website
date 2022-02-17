import React, { useRef } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Container from "../components/container";

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
      <section className="h-full w-screen pt-48 md:pt-24 lg:py-12">
        <Slider {...settings} ref={slider}>
          <section className="panel relative w-screen">
            <Container className="flex flex-col items-center justify-start">
              <div className="mx-auto flex flex-wrap justify-center sm:flex-nowrap sm:justify-evenly">
                <button
                  data-slide="0"
                  onClick={(e) => goToSlide(e)}
                  className="border-blue mr-4 mb-2 block cursor-pointer whitespace-nowrap border-b-2 pb-1 text-lg font-bold text-white sm:mx-6 sm:border-b-4 sm:text-2xl md:mx-8 lg:mb-0 lg:border-b-8 lg:text-3xl 2xl:text-4xl "
                >
                  Partners
                </button>
                <button
                  data-slide="1"
                  onClick={(e) => goToSlide(e)}
                  className="color-bluegrey mr-4 mb-2 block cursor-pointer whitespace-nowrap border-b-2 border-transparent pb-1 text-lg font-normal sm:mx-6 sm:border-b-4 sm:text-2xl md:mx-8 lg:mb-0 lg:border-b-8 lg:text-3xl 2xl:text-4xl"
                >
                  Ecosystem Contributors
                </button>
                <button
                  data-slide="2"
                  onClick={(e) => goToSlide(e)}
                  className="color-bluegrey mr-4 mb-2 block cursor-pointer whitespace-nowrap border-b-2 border-transparent pb-1 text-lg font-normal sm:mx-6 sm:border-b-4 sm:text-2xl md:mx-8 lg:mb-0 lg:border-b-8 lg:text-3xl 2xl:text-4xl"
                >
                  In the Media
                </button>
              </div>
              <div className="mt-12 flex w-full flex-col justify-center lg:mt-20">
                <div className="flex w-full items-center justify-center">
                  <img
                    className="mr-5 w-20 sm:mr-8 sm:w-32 lg:mr-12 lg:w-48 2xl:w-60"
                    src={FrameworkLogo}
                    alt="Framework Logo"
                  />
                  <img
                    className="w-14 sm:w-24 lg:w-36 2xl:w-44"
                    src={KojiLogo}
                    alt="Koji Logo"
                  />
                </div>
                <div className="mt-10 flex w-full items-center justify-center">
                  <img
                    className="mr-3 w-20 sm:mr-8 sm:w-36 lg:mr-12 lg:w-48 2xl:w-60"
                    src={DACMLogo}
                    alt="DACM Logo"
                  />
                  <img
                    className="mr-3 w-32 sm:mr-8 sm:w-44 lg:mr-12 lg:w-48 2xl:w-60"
                    src={DistributedGlobalLogo}
                    alt="DistributedGlobal Logo"
                  />
                  <img
                    className="w-16 sm:mr-8 sm:mt-0 sm:w-36 lg:mr-12 lg:w-44 2xl:w-44"
                    src={GSRLogo}
                    alt="GSR Logo"
                  />
                </div>
                <div className="mt-10 flex w-full flex-wrap items-center justify-center">
                  <img
                    className="mr-3 w-12 sm:mr-8 sm:w-24 lg:mr-12 lg:w-32"
                    src={MavenLogo}
                    alt="Maven Logo"
                  />
                  <img
                    className="mr-3 w-10 sm:mr-8 sm:w-20 lg:mr-12 lg:w-24"
                    src={LAOLogo}
                    alt="The LAO Logo"
                  />
                  <img
                    className="mr-3 w-12 sm:mr-8 sm:w-24 lg:mr-12 lg:w-32"
                    src={EfficientFrontier}
                    alt="EfficientFrontier Logo"
                  />
                  <img
                    className="mr-3 w-7 sm:w-12 lg:mr-12 lg:w-20"
                    src={BLogo}
                    alt="B Logo"
                  />
                  <img
                    className="w-12 sm:w-24 lg:w-40"
                    src={ApolloLogo}
                    alt="Apollo Logo"
                  />
                </div>
              </div>
            </Container>
          </section>
          <section className="panel relative w-screen">
            <Container className="flex flex-col items-center justify-start">
              <div className="mx-auto flex flex-wrap justify-center text-center sm:flex-nowrap sm:justify-evenly sm:text-left">
                <button
                  data-slide="0"
                  onClick={(e) => goToSlide(e)}
                  className="color-bluegrey mr-4 mb-2 block cursor-pointer whitespace-nowrap border-b-2 border-transparent pb-1 text-lg font-normal sm:mx-6 sm:border-b-4 sm:text-2xl md:mx-8 lg:mb-0 lg:border-b-8 lg:text-3xl 2xl:text-4xl"
                >
                  Partners
                </button>
                <button
                  data-slide="1"
                  onClick={(e) => goToSlide(e)}
                  className="border-blue mr-4 mb-2 block cursor-pointer whitespace-nowrap border-b-2 pb-1 text-lg font-bold text-white sm:mx-6 sm:border-b-4 sm:text-2xl md:mx-8 lg:mb-0 lg:border-b-8 lg:text-3xl 2xl:text-4xl "
                >
                  Ecosystem Contributors
                </button>
                <button
                  data-slide="2"
                  onClick={(e) => goToSlide(e)}
                  className="color-bluegrey mr-4 mb-2 block cursor-pointer whitespace-nowrap border-b-2 border-transparent pb-1 text-lg font-normal sm:mx-6 sm:border-b-4 sm:text-2xl md:mx-8 lg:mb-0 lg:border-b-8 lg:text-3xl 2xl:text-4xl"
                >
                  In the Media
                </button>
              </div>
              <div className="mt-12 flex w-full flex-col justify-center px-4 pb-12 sm:pb-24 lg:mt-20 xl:px-0">
                <div className="flex w-full items-center justify-center lg:h-24 2xl:h-32">
                  <img
                    className="mr-5 w-24 sm:mr-10 sm:w-48 lg:w-48 2xl:w-60"
                    src={MyceliumLogo}
                    alt="Mycelium Logo"
                  />
                  <img
                    className="w-24 sm:w-48 lg:w-48 2xl:w-60"
                    src={ChainlinkLogo}
                    alt="Chainlink Logo"
                  />
                </div>
                <div className="mt-6 flex w-full items-center justify-center sm:mt-8 lg:h-24 2xl:h-32">
                  <img
                    className="mr-5 w-24 sm:mr-10 sm:w-48 lg:w-48 2xl:w-60"
                    src={SigmaPrimeLogo}
                    alt="SigmaPrime Logo"
                  />
                  <img
                    className="mr-5 w-12 sm:mr-10 sm:w-20  lg:w-32"
                    src={RMITLogo}
                    alt="RMIT Logo"
                  />
                  <img
                    className="mr-5 w-20 sm:mr-10 sm:w-32 lg:w-48 2xl:w-60"
                    src={EPNSLogo}
                    alt="EPNS Logo"
                  />
                </div>
              </div>
            </Container>
          </section>
          <section className="panel relative w-screen">
            <Container className="flex flex-col items-center justify-start">
              <div className="mx-auto flex flex-wrap justify-center text-center sm:flex-nowrap sm:justify-evenly sm:text-left">
                <button
                  data-slide="0"
                  onClick={(e) => goToSlide(e)}
                  className="color-bluegrey mr-4 mb-2 block cursor-pointer whitespace-nowrap border-b-2 border-transparent pb-1 text-lg font-normal sm:mx-6 sm:border-b-4 sm:text-2xl md:mx-8 lg:mb-0 lg:border-b-8 lg:text-3xl 2xl:text-4xl"
                >
                  Partners
                </button>
                <button
                  data-slide="1"
                  onClick={(e) => goToSlide(e)}
                  className="color-bluegrey mr-4 mb-2 block cursor-pointer whitespace-nowrap border-b-2 border-transparent pb-1 text-lg font-normal sm:mx-6 sm:border-b-4 sm:text-2xl md:mx-8 lg:mb-0 lg:border-b-8 lg:text-3xl 2xl:text-4xl"
                >
                  Ecosystem Contributors
                </button>
                <button
                  data-slide="2"
                  onClick={(e) => goToSlide(e)}
                  className="border-blue mr-4 mb-2 block cursor-pointer whitespace-nowrap border-b-2 pb-1 text-lg font-bold text-white sm:mx-6 sm:border-b-4 sm:text-2xl md:mx-8 lg:mb-0 lg:border-b-8 lg:text-3xl 2xl:text-4xl"
                >
                  In the Media
                </button>
              </div>
              <div className="mt-12 flex w-full flex-col justify-center lg:mt-20">
                <div className="flex items-start justify-center">
                  <a
                    href="https://www.afr.com/companies/financial-services/meet-the-defi-developers-who-ve-raised-funds-for-a-derivatives-system-20210628-p5850t"
                    target="_blank"
                    className="mr-3 flex w-96 flex-col items-center justify-start text-center text-white sm:mr-5"
                  >
                    <img
                      placeholder="blurred"
                      className="w-32 rounded-2xl sm:w-full lg:w-52 xl:w-28 2xl:w-full"
                      src={AFRLogo}
                      alt="AFR Logo"
                    />
                    <p className="mb-4 mt-6 text-lg sm:text-xl">
                      <b className="text-semibold">
                        Australian Financial Review
                      </b>
                    </p>
                    <p className="hidden text-lg sm:block lg:text-xl">
                      A new system for trading derivatives has raised $US4.5
                      million from leading investors in the booming area of
                      decentralised finance and its local developer is creating
                      jobs in Australia to build it out.
                    </p>
                  </a>
                  <a
                    href="https://www.cointelegraph.com/news/tracer-dao-raises-4-5m-to-launch-derivatives-for-anything-with-an-oracle-feed"
                    target="_blank"
                    className="ml-3 flex w-96 flex-col items-center justify-start text-center text-white sm:ml-5"
                  >
                    <img
                      className="w-32 rounded-2xl sm:w-full lg:w-52 xl:w-28 2xl:w-full"
                      src={CoinTelegraphLogo}
                      alt="Coin Telegraph Logo"
                    />
                    <p className="mb-4 mt-6 text-lg sm:text-xl">
                      <b className="text-semibold">Coin Telegraph</b>
                    </p>
                    <p className="hidden text-lg sm:block lg:text-xl">
                      Decentralised derivatives platform, Tracer DAO, has
                      announced a successful $4.5 million fundraising round to
                      expand its team and product suite.
                    </p>
                  </a>
                </div>
              </div>
            </Container>
          </section>
        </Slider>
      </section>
    </>
  );
};

export default PartnersContributors;
