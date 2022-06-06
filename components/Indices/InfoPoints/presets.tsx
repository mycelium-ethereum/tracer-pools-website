import Button from "@components/Shared/Buttons/Button";

const paragraphStyles = "text-base leading-[24px] lg:text-xl lg:leading-[28px]";

export const integrationItems = [
  {
    title: "AUDITS",
    text: (
      <>
        <p className={paragraphStyles}>
          Security is our top priority at Tracer. All the data index contracts
          have been audited.
        </p>
        <Button lightBlueGradient className="mt-4">
          Documentation
        </Button>
      </>
    ),
    image: "/img/indices/security.svg",
  },
  {
    title: "CREATE MARKETS",
    text: (
      <>
        <p className={paragraphStyles}>
          With the Tracer Factory layer you can take positions on your data feed
          via a Perpetual Pool derivative market.
        </p>
        <Button lightBlueGradient className="mt-4">
          View Perpetual Pools
        </Button>
      </>
    ),
    image: "/img/indices/create-markets.svg",
  },
  {
    title: "TAKE YOUR DATA ANYWHERE",
    text: (
      <>
        <p className={paragraphStyles}>
          Our oracle wrappers can be called by any smart contract that conforms
          to our standard interface. In this way Tracer provides public goods
          infrastructure for the entire DeFi community.
        </p>
        <Button lightBlueGradient className="mt-4">
          Read the guide
        </Button>
      </>
    ),
    image: "/img/indices/oracle.svg",
  },
];
