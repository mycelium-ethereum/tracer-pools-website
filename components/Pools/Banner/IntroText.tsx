import AnimateIn from "@components/Shared/AnimateIn";
import GradientLine from "@components/Shared/GradientLine";

const IntroText: React.FC<{}> = () => {
  return (
    <div className="pb-12 sm:w-max sm:pb-0 xl:translate-y-0 xl:pt-40 2xl:pt-56">
      <div className="mb-2">
        <span className="mb-2 block text-xl leading-[28px] text-tracer-lightblue">
          Bullish? Bearish? Bring it.
        </span>
        <GradientLine color="lightblue" />
      </div>
      <div className="mb-4 text-[40px] font-light leading-[44px] sm:mb-11 sm:text-[60px] sm:leading-[66px] xl:text-[80px] xl:leading-[88px]">
        <AnimateIn delayLevel={1}>No Margins.</AnimateIn>
        <AnimateIn delayLevel={2}>No Liquidations.</AnimateIn>
        <AnimateIn delayLevel={3}>No Minimum Spend.</AnimateIn>
      </div>
      <AnimateIn delayLevel={4}>
        <img
          src="/img/logos/powered-by-arbitrum.svg"
          className="h-[29px] w-[156px] sm:h-[41px] sm:w-[357px]"
        />
      </AnimateIn>
    </div>
  );
};

export default IntroText;
