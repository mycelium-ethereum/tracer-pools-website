import Button from "@components/Shared/Buttons/Button";
import AnimateIn from "@components/Shared/AnimateIn";

const Header: React.FC<{}> = () => {
  return (
    <header className="relative z-20 mx-auto h-[900px] text-center 3xl:h-[1000px]">
      <AnimateIn delay={0.2}>
        <img
          src="/img/logos/tracer-perpetual-pools.svg"
          className="mx-auto mb-8 h-[26px] w-[264px] sm:mb-4"
        />
      </AnimateIn>
      <AnimateIn delay={0.5}>
        <h1 className="mb-4 text-2xl font-light leading-[30px] sm:text-[48px] sm:leading-[90px] md:text-[70px] md:leading-[80px] xl:text-[120px] xl:leading-[132px]">
          Leveraged Tokens.
          <br />
          Less Overhead.
        </h1>
      </AnimateIn>
      <AnimateIn delay={0.8}>
        <p className="text-xl leading-[30px] text-action-active sm:text-2xl sm:leading-[120%]">
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
