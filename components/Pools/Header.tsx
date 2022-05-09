import Button from "@/components/Shared/Button";
import AnimateIn from "@/components/Shared/AnimateIn";

const Header: React.FC<{}> = () => {
  return (
    <header className="relative z-20 mx-auto h-[800px] text-center">
      <AnimateIn delay={0.2}>
        <img
          src="/img/logos/tracer-perpetual-pools.svg"
          className="mx-auto mb-4 h-[26px] w-[264px]"
        />
      </AnimateIn>
      <AnimateIn delay={0.5}>
        <h1 className="mb-4 text-[120px] font-light leading-[132px]">
          Leveraged Tokens.
          <br />
          Less Overhead.
        </h1>
      </AnimateIn>
      <AnimateIn delay={0.8}>
        <p className="text-xl text-action-active">
          With a new derivative primitive.
        </p>
      </AnimateIn>
      <AnimateIn delay={1.1} className="mx-auto w-max">
        <div className="flex">
          <Button lightBlueGradient className="mt-4">
            Launch Pools
          </Button>
          <Button blueTransparent className="ml-4 mt-4">
            Documentation
          </Button>
        </div>
      </AnimateIn>
    </header>
  );
};

export default Header;
