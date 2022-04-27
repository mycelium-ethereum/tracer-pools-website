import Download from "@/components/Brand/Download";

const BrandAssetTile: React.FC<{
  item: any;
  black: boolean;
}> = ({ item, black }) => {
  return (
    <div className="w-full">
      <div
        className={`mb-2 flex h-[150px] w-full items-center justify-center rounded-lg [box-shadow:0px_2px_4px_rgba(0,0,0,0.1)] ${
          black ? "bg-primary" : "bg-white"
        }`}
      >
        <picture>
          <img src={item.svg} alt={item.alt} />
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
