const Header: React.FC<{}> = () => {
  return (
    <header className="mx-auto max-w-[579px] text-center 4xl:max-w-[830px]">
      <h1 className="mb-2 text-2xl font-bold leading-[30px] text-action-active sm:mb-4 sm:text-[40px] sm:leading-[48px] 4xl:text-[80px] 4xl:leading-[88px]">
        Unlock market
        <br className="block sm:hidden" /> access
      </h1>
      <p className="mx-auto max-w-[473px] text-tertiary">
        Bring new data on-chain and create a derivative
        <br /> market in minutes via the Tracer Factory
      </p>
    </header>
  );
};

export default Header;
