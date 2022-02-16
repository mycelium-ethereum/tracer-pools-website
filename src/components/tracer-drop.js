import React from "react";
import Container from "../components/container";
import CityBottomDark from "/static/img/learn/city-bottom.png";
import YouTubeIcon from "/static/img/learn/youtube.svg";
import OpenLinkIcon from "/static/img/learn/open-link.svg";

const TracerDrop = () => {
  return (
    <>
      <section className="bg-blue relative z-20 mt-24 h-full w-full md:mt-40">
        <img
          className="absolute top-0 left-0 h-auto w-full min-w-[800px]"
          src={CityBottomDark}
          alt=""
        />
        <Container className="pb-12 lg:max-w-[900px]">
          <header className="mx-auto mb-10 w-max text-center">
            <h1 className="mb-8 text-3xl font-semibold text-white">
              Tracer Drop
            </h1>
            <small className="text-xl font-normal text-white">
              The latest research from Tracer and the RMIT Blockchain
              <br /> Innovation Hub. Every fortnight on Twitter and YouTube.
            </small>
          </header>
          <div className="rounded-bl-xl rounded-br-xl bg-[#00007A] bg-opacity-50">
            <div className="h-[500px]">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/?listType=playlist&list=PLxyjg08ON02UAORUxX82EQsk8W782O2Yl"
                frameborder="0"
                allowfullscreen
              ></iframe>
            </div>
            <div className="p-10 text-center text-white md:text-lg">
              <p>
                Perpetual Pools is a new financial primitive that enables
                anybody to take a short or long position on any underlying
                asset. These positions are non-liquidatable, fully
                collateralised, fully-fungible and can exist perpetually without
                upkeep. Perpetual Pool tokens exist as ERC20 leveraged tokens
                which live inside your wallet and are composable within the DeFi
                economy.
              </p>
            </div>
          </div>
          <a
            href="https://www.youtube.com/channel/UChQFEjLu4vaaS96iCRbasFg"
            target="_blank"
            className="mx-auto mt-14 flex w-max text-white underline"
          >
            <img className="mr-2.5" src={YouTubeIcon} />
            More episodes
            <img className="ml-2.5" src={OpenLinkIcon} />
          </a>
        </Container>
      </section>
    </>
  );
};

export default TracerDrop;
