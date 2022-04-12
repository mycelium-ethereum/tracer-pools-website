import PageLink from "./PageLink";

const Logo: React.FC<{ onClickAction: () => void }> = ({ onClickAction }) => {
  return (
    <PageLink href="/">
      <button onClick={onClickAction}>
        <img src="/img/logo.svg" className="h-[23px] w-[98px]" />
      </button>
    </PageLink>
  );
};

export default Logo;
