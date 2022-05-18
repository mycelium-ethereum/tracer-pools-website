import Button from "@components/Shared/Buttons/Button";
import AnimateIn from "@components/Shared/AnimateIn";

const Header: React.FC<{}> = () => {
  return (
    <header className="relative z-20 mx-auto text-center">
      <AnimateIn delay={0.2}>
        <img
          src="/img/logos/tracer-factories.svg"
          className="mx-auto mb-8 h-[26px] w-[204px] sm:mb-4"
        />
      </AnimateIn>
      <AnimateIn delay={0.5}>
        <h1 className="mb-4 text-[40px] font-light leading-[44px] sm:text-[48px] sm:leading-[90px] md:text-[70px] md:leading-[80px] xl:text-[120px] xl:leading-[132px]">
          Diversify and
          <br />
          Experiment
        </h1>
      </AnimateIn>
      <AnimateIn delay={0.8}>
        <p className="mx-auto max-w-[600px] text-xl leading-[30px] text-action-active sm:text-2xl sm:leading-[28px]">
          Pick and choose up to 10 price feeds to create weighted index oracles
          which can be taken anywhere in DeFi.
        </p>
      </AnimateIn>
      <AnimateIn delay={1.1} className="mx-auto w-max">
        <div className="mt-4 flex flex-col items-center sm:flex-row">
          <Button darkBlueGradient>Launch Data Feeds</Button>
          <Button blueTransparent className="mt-4 sm:ml-4 sm:mt-0">
            Documentation
          </Button>
        </div>
      </AnimateIn>
    </header>
  );
};

export default Header;
