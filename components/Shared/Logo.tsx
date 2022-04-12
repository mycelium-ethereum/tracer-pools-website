import TracerLogoSVG from "../SVG/TracerLogoSVG";
import PageLink from "./PageLink";

const Logo: React.FC<{ onClickAction: () => void }> = ({ onClickAction }) => {
  return (
    <PageLink href="/">
      <button onClick={onClickAction}>
        <TracerLogoSVG className="h-[23px] w-[98px]" />
      </button>
    </PageLink>
  );
};

export default Logo;
