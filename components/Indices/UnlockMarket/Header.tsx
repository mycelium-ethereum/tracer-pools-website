const Header: React.FC<{}> = () => {
  return (
    <header className="mx-auto max-w-[579px] text-center 3xl:max-w-[830px]">
      <h1 className="mb-4 text-[40px] font-bold leading-[48px] text-action-active 3xl:text-[80px] 3xl:leading-[88px]">
        Unlock market access
      </h1>
      <p className="mx-auto mb-4 max-w-[473px] text-tertiary">
        Bring new data on-chain and create a derivative market in minutes via
        the Tracer Factory
      </p>
    </header>
  );
};

export default Header;
