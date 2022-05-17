import Button from "@components/Shared/Buttons/Button";
import AnimateIn from "@components/Shared/AnimateIn";

const Header: React.FC<{}> = () => {
  return (
    <header className="relative z-20 mx-auto h-[900px] text-center 3xl:h-[1000px]">
      <AnimateIn delay={0.2}>
        <img
          src="/img/logos/tracer-perpetual-pools.svg"
          className="mx-auto mb-4 h-[26px] w-[264px]"
        />
      </AnimateIn>
      <AnimateIn delay={0.5}>
        <h1 className="mb-4 text-[48px] font-light leading-[58px] sm:text-[70px] sm:leading-[90px] xl:text-[120px] xl:leading-[132px]">
          Leveraged Tokens.
          <br />
          Less Overhead.
        </h1>
      </AnimateIn>
      <AnimateIn delay={0.8}>
        <p className="text-2xl leading-[120%] text-action-active">
          With a new derivative primitive.
        </p>
      </AnimateIn>
      <AnimateIn delay={1.1} className="mx-auto w-max">
        <div className="mt-4 flex flex-col items-center sm:flex-row">
          <Button darkBlueGradient>Launch Pools</Button>
          <Button blueTransparent className="mt-4 sm:ml-4 sm:mt-0">
            Documentation
          </Button>
        </div>
      </AnimateIn>
    </header>
  );
};

export default Header;
