import Button from "@components/Shared/Buttons/Button";

export const integrationItems = [
  {
    title: "SECURITY FIRST",
    text: (
      <>
        <p className="text-xl leading-[28px]">
          Tracer has a long term commitment to security. Our contracts have been
          audited by top tier security firms.
        </p>
        <div className="mt-4 flex max-w-[290px] flex-wrap items-center">
          <img
            src="/img/logos/runtime-verification.svg"
            alt="Runtime Verification logo"
            className="mb-6 mr-6 h-6 w-[126px]"
          />
          <img
            src="/img/logos/sigma-prime.png"
            alt="Sigma Prime logo"
            className="mb-6 mr-6 h-[29px] w-[107px]"
          />
          <img
            src="/img/logos/spearbit.svg"
            alt="Spearbit logo"
            className="mb-6 h-[29px] w-[107px] sm:mb-0"
          />
        </div>
      </>
    ),
  },
  {
    title: "INTEGRATION READY",
    text: (
      <>
        <p className="text-xl leading-[28px]">
          Seamlessly integrate Perpetual Pool markets into a your own
          application via the Tracer SDK or add our leveraged tokens to your CEX
          or DEX.
        </p>
        <Button lightBlueGradient className="mt-4">
          Read the guide
        </Button>
      </>
    ),
  },
  {
    title: "{ ANOTHER POINT REQUIRED }",
    text: (
      <>
        <p className="text-xl leading-[28px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Malesuada
          nibh elit vulputate id elit. Qui
        </p>
      </>
    ),
  },
];
