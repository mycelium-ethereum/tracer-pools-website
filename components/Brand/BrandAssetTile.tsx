import Download from "@/components/Brand/Download";

const BrandAssetTile: React.FC<{
  item: any;
  noPadding: boolean;
  grey: boolean;
  blue: boolean;
}> = ({ item, noPadding, grey, blue }) => {
  return (
    <div className="w-full">
      <div
        className={`mb-2 flex h-[150px] w-full items-center justify-center overflow-hidden rounded-lg px-8 [box-shadow:0px_2px_4px_rgba(0,0,0,0.1)]
        ${grey ? "bg-footnote" : ""}
        ${blue ? "bg-tracer-primaryblue px-4" : ""}
        ${!blue && !grey ? "bg-white" : ""}
        ${noPadding ? "px-0" : ""}
        `}
      >
        <picture>
          <img
            src={item.svg}
            alt={item.alt}
            className={item.className ? item.className : ""}
          />
        </picture>
      </div>
      <div className="flex w-full items-center justify-between text-sm">
        <span className="text-[#828790]">{item.description}</span>
        <div>
          <Download url={item.svg}>SVG</Download>
          <Download url={item.png}>PNG</Download>
        </div>
      </div>
    </div>
  );
};

export default BrandAssetTile;
