import TracerLogoSVG from "../SVG/TracerLogoSVG";
import PageLink from "./PageLink";

const Logo: React.FC<{
  type: "primary" | "pools" | "indices";
  onClickAction: () => void;
}> = ({ type, onClickAction }) => {
  return (
    <PageLink href="/" className="flex items-center">
      <button onClick={onClickAction}>
        {
          {
            primary: <TracerLogoSVG className="h-[23px] w-[98px]" />,
            pools: <TracerLogoSVG className="h-[23px] w-[98px]" />,
            indicies: <TracerLogoSVG className="h-[23px] w-[98px]" />,
          }[type]
        }
      </button>
    </PageLink>
  );
};

export default Logo;
