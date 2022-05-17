import OptimisedImage from "@components/Shared/OptimisedImage";
import Button from "@components/Shared/Buttons/Button";

const CallToAction: React.FC<{}> = ({}) => {
  return (
    <div className="relative -ml-3 flex h-[204px] w-full min-w-[calc(100%+24px)] items-center justify-center overflow-hidden rounded-lg bg-tracer-navy py-6 px-6 md:ml-0 lg:mb-4 lg:h-[84px] lg:overflow-visible lg:py-7 xl:justify-start 2xl:pl-14 3xl:justify-center">
      <img
        src="/img/radar/cta-bg.png"
        className="absolute top-0 left-0 z-0 hidden h-full w-full object-cover object-right lg:block"
      />
      <img
        src="/img/radar/cta-bg-mobile.png"
        className="absolute top-0 right-0 z-0 block h-full w-[359px] lg:hidden"
      />
      <div className="relative z-10 flex flex-col items-center xl:flex-row 3xl:mr-20">
        <img src="/img/logos/tracer-perpetual-pools.svg" className="mr-4 h-6" />
        <h2 className="mt-2 text-xl leading-[28px] text-white lg:mt-0">
          More Leverage. Less Overhead.
        </h2>
        <Button darkBlueGradient className="mt-4 lg:mt-0 lg:ml-6">
          Learn More
        </Button>
        <Button darkBlueGradient className="mt-2 lg:ml-4 lg:mt-0">
          Launch Perpetual Pools
        </Button>
        <div className="pointer-events-none absolute -right-[200px] top-0 z-10 hidden h-full w-[200px] xl:block">
          <OptimisedImage
            src="/img/shared/link-token.png"
            alt="Link Token"
            className="absolute -top-16 right-[60px] max-w-[131px]"
          />
          <OptimisedImage
            src="/img/shared/btc-token.png"
            alt="BTC Token"
            className="absolute -bottom-[60px] -right-5 max-w-[114px]"
          />
        </div>
      </div>
    </div>
  );
};

export default CallToAction;
