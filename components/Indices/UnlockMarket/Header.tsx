import Paragraph from "@components/Home/Paragraph";

const Header: React.FC<{}> = () => {
  return (
    <header className="mx-auto max-w-[579px] text-center">
      <h1 className="mb-4 text-[40px] font-bold leading-[48px] text-action-active">
        Unlock market access
      </h1>
      <Paragraph className="mb-4 text-tertiary">
        Bring new data on-chain and create a derivative market in minutes via
        the Tracer Factory
      </Paragraph>
    </header>
  );
};

export default Header;
