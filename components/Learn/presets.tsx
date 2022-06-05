import TracerPoolsSVG from "@components/SVG/TracerPoolsSVG";
import TracerFactoriesSVG from "@components/SVG/TracerFactoriesSVG";
import TracerIndicesSVG from "@components/SVG/TracerIndicesSVG";

export const headerContent = {
  userGuides: {
    title: "USER GUIDES",
    text: "Learn how to use Tracer’s products",
    icon: "/img/learn/user-guides.svg",
  },
  tracerLibrary: {
    title: "TRACER LIBRARY",
    text: (
      <>
        Gain a more in-depth&nbsp;
        <br className="hidden sm:block" />
        understanding of the Tracer&nbsp;
        <br className="hidden sm:block" />
        Protocol and its capabilities.
      </>
    ),
    icon: "/img/learn/library.svg",
  },
  userDocs: {
    title: "ACCESS USER DOCS",
    text: (
      <>
        The home of Tracer’s
        <br /> documentation
      </>
    ),
    icon: "/img/learn/user-guides.svg",
  },
  tracerDrop: {
    title: (
      <>
        <img src="/img/logos/tracer-drop.svg" className="h-5 w-[124px]" />
      </>
    ),
    text: (
      <>
        The latest research from Tracer and the
        <br className="hidden md:block" /> RMIT Blockchain Innovation Hub. Every
        <br className="hidden md:block" /> fortnight on Twitter and YouTube.
      </>
    ),
    icon: "/img/learn/user-guides.svg",
  },
  inTheMedia: {
    title: "IN THE MEDIA",
    text: (
      <>
        Lorem ipsum dolor sit amet, consectetur
        <br className="hidden md:block" /> adipiscing elit. Malesuada nibh elit
      </>
    ),
    icon: "/img/learn/user-guides.svg",
  },
  faq: {
    title: "User Guides",
    text: (
      <>
        The essentials to get started
        <br className="hidden md:block" /> using Perpetual Pools
      </>
    ),
    icon: "/img/learn/user-guides.svg",
  },
};

export const tileData = [
  {
    link: "/radar/tracer-perpetual-pools-eli5/",
    background: "/img/learn/perpetual-pools-guide-bg.png",
    Logo: TracerPoolsSVG,
    tokens: true,
  },
  {
    link: "/radar/minting-burning/",
    background: "/img/learn/factories-guide-bg.png",
    Logo: TracerFactoriesSVG,
  },
  {
    link: "/radar/staking/",
    background: "/img/learn/data-feeds-guide-bg.png",
    Logo: TracerIndicesSVG,
  },
];

export const tags = [
  "Whitepaper",
  "General",
  "DAO",
  // "Press Release",
  "Audit Report",
  "Perpetual Pools",
  "Perpetual Swaps",
  "All",
];

export const articles = [
  {
    title: "Perpetual Pools Litepaper",
    description: "The Perpetual Pools mechanism Litepaper.",
    tags: ["Perpetual Pools", "Whitepaper"],
    link: "/documents/Tracer Perpetual Pools.pdf",
  },
  {
    title: "Tracer DAO Whitepaper",
    description:
      "Introducing Tracer: peer-to-peer financial infrastructure for the decentralised economy.",
    tags: ["Whitepaper"],
    link: "/documents/Tracer Peer-to-Peer Finance.pdf",
  },
  {
    title: "Purchasing Power Stablecoin",
    description: "A stablecoin tied to the value of nominal GDP over time.",
    tags: ["Whitepaper"],
    link: "/documents/Purchasing Power Stablecoin.pdf",
  },
  {
    title: "Perpetual Swaps",
    description: "The Perpetual Swaps mechanism Whitepaper.",
    tags: ["Perpetual Swaps"],
    link: "/documents/Tracer Perpetual Swaps.pdf",
  },
  {
    title: "Perpetual Pools V2 Simulations",
    description:
      "Simulated reductions to volatility decay with Perpetual Pools V2",
    tags: ["Perpetual Pools"],
    link: "/radar/v2-simulations/",
  },
  {
    title: "Tracer Product Suite",
    description:
      "The factory, product and ecosystem levels of the Tracer suite.",
    tags: ["General"],
    link: "/radar/the-tracer-dao-product-suite/",
  },
  {
    title: "Perpetual Pools Explained",
    description: "A full Perpetual Pools explainer.",
    tags: ["Perpetual Pools"],
    link: "/radar/perpetual-pools-explained/",
  },
  {
    title: "Skew Farming Explained",
    description: "Excess Risk-Adjusted Returns with a Delta-Neutral Position.",
    tags: ["Perpetual Pools"],
    link: "/radar/skew-farming-explained/",
  },
  {
    title: "Volatility Decay Explained",
    description: "The impact of Volatility Decay on Tracer Perpetual Pools.",
    tags: ["Perpetual Pools"],
    link: "/radar/volatility-decay/",
  },
  {
    title: "Perpetual Swaps vs Perpetual Pools",
    description: "Compare and contrast of financial instruments.",
    tags: ["Perpetual Pools", "Perpetual Swaps"],
    link: "/radar/leverage-trading-crypto/",
  },
  {
    title: "Tracer Tokenomics",
    description: "The evolutions to Tracer’s token mechanics.",
    tags: ["General"],
    link: "/radar/tracer-tokenomics/",
  },
  {
    title: "Tracer DAO Participation Agreement",
    description: "Tracer DAO taking steps to turn code into law.",
    tags: ["DAO"],
    link: "/radar/tracer-dao-agreement/",
  },
  {
    title: "Sigma Prime Audit",
    description: "A response to the Tracer Perpetual Pools audit.",
    tags: ["Audit Report"],
    link: "/radar/sigma-prime-audit-response/",
  },
  {
    title: "DAO Raise",
    description: "Tracer’s $4.5M USD strategic raise.",
    tags: ["General"],
    link: "/radar/tracer-dao-raise/",
  },
  {
    title: "Perpetual Pools Audits",
    description:
      "The full list of Tracer’s Perpetual Pools audits and C.A.R.E’s",
    tags: ["Perpetual Pools", "Audit Report"],
    link: "/",
  },
  {
    title: "V2 Mechanism",
    description: "Perpetual Pools V2 mechanism explained",
    tags: ["Perpetual Pools"],
    link: "/",
  },
];

export const mediaVideos = [
  "J0nyb7jAsio",
  "FL1zZL1zaSU",
  "2ZfTKryGCRQ",
  "geB8ZYUhT6s",
  "U6scft0dGn8",
  "P2QUN8tvoFc",
];
