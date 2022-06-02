import Button from "@components/Shared/Buttons/Button";

const paragraphStyles = "text-base leading-[24px] lg:text-xl lg:leading-[28px]";

export const integrationItems = [
  {
    image: "/img/factories/points/create-markets.svg",
    title: "CREATE MARKETS",
    text: (
      <>
        <p className={paragraphStyles}>
          With the Tracer Factory layer you can deploy permissionless markets or
          create custom indices.
        </p>
      </>
    ),
  },
  {
    image: "/img/factories/points/integration-ready.svg",
    title: "INTEGRATION READY",
    text: (
      <>
        <p className={paragraphStyles}>
          Deploy your own markets and data feeds for use on your own interface
          by leveraging the Tracer SDK.
        </p>
        <Button lightBlueGradient className="mt-4">
          Read the guide
        </Button>
      </>
    ),
  },
  {
    image: "/img/factories/points/security-first.svg",
    title: "SECURITY FIRST",
    text: (
      <>
        <p className={paragraphStyles}>
          Tracer has a long term commitment to security. Our contracts have been
          audited by top tier security firms.
        </p>
      </>
    ),
  },
];
