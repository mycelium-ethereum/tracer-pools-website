import GradientLine from "@components/Shared/GradientLine";

const IntroText: React.FC<{}> = () => {
  return (
    <div className="-mt-[200px] w-max xl:translate-y-0 xl:pt-40 2xl:pt-56">
      <div className="mb-2">
        <span className="mb-2 block text-lg leading-[28px] text-tracer-lightblue">
          Bullish? Bearish? Bring it.
        </span>
        <GradientLine color="lightblue" />
      </div>
      <div className="mb-11 text-[60px] font-light leading-[66px] xl:text-[80px] xl:leading-[88px]">
        <span>
          No Margins.
          <br />
          No Liquidations.
          <br />
          No Minimum Spend.
        </span>
      </div>
      <img
        src="/img/logos/powered-by-arbitrum.svg"
        className="h-[41px] w-[357px]"
      />
    </div>
  );
};

export default IntroText;
