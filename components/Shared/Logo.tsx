import TracerFactoriesSVG from "@components/SVG/TracerFactoriesSVG";
import TracerIndicesSVG from "@components/SVG/TracerIndicesSVG";
import TracerPoolsLogoSVG from "@components/SVG/TracerPoolsSVG";
import TracerLogoSVG from "../SVG/TracerSVG";
import PageLink from "./PageLink";

const Logo: React.FC<{
  type: "primary" | "pools" | "factories" | "indices";
  onClickAction: () => void;
}> = ({ type, onClickAction }) => {
  const activeStyles = "opacity-100 pointer-events-none";
  const inactiveStyles = "opacity-0 pointer-events-none delay-100";
  const logoStyles =
    "absolute top-0 left-0 h-[23px] transition-opacity duration-500";

  return (
    <PageLink href="/" className="flex items-center">
      <button className="relative h-[23px] w-[232px]" onClick={onClickAction}>
        {/* {
          {
            primary: <TracerLogoSVG className="h-[23px] w-[98px]" />,
            pools: (
              <img
                className="h-[23px] w-[232px]"
                src="/img/logos/tracer-perpetual-pools.svg"
              />
            ),
            factories: (
              <img
                className="h-[23px] w-[179px]"
                src="/img/logos/tracer-factories.svg"
              />
            ),
            indices: (
              <img
                className="h-[23px] w-[161px]"
                src="/img/logos/tracer-indices.svg"
              />
            ),
          }[type]
        } */}
        <TracerLogoSVG
          className={`${logoStyles} w-[98px] ${
            type === "primary" ? activeStyles : inactiveStyles
          }`}
        />
        <TracerPoolsLogoSVG
          className={`${logoStyles} w-[232px] ${
            type === "pools" ? activeStyles : inactiveStyles
          }`}
        />
        <TracerFactoriesSVG
          className={`${logoStyles} w-[179px] ${
            type === "factories" ? activeStyles : inactiveStyles
          }`}
        />
        <TracerIndicesSVG
          className={`${logoStyles} w-[161px] ${
            type === "indices" ? activeStyles : inactiveStyles
          }`}
        />
      </button>
    </PageLink>
  );
};

export default Logo;
