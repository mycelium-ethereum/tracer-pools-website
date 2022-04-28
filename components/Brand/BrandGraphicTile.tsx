import Download from "@/components/Brand/Download";

const BrandGraphicTile: React.FC<{
  item: {
    description: string;
    image: string;
    download: string;
    alt: string;
  };
}> = ({ item }) => {
  return (
    <div className="w-full">
      <div className="mb-2 h-[254px] overflow-hidden rounded-lg bg-tracer-navy [filter:drop-shadow(0px_2px_4px_rgba(0,0,0,0.1))]">
        <picture>
          <img
            src={item.image}
            className="h-full scale-105 transform object-cover object-right"
            alt={item.alt}
          />
        </picture>
      </div>
      <div className="flex w-full items-center justify-between text-sm">
        <span className="text-tertiary">{item.description}</span>
        <Download url={item.download}>PNG</Download>
      </div>
    </div>
  );
};

export default BrandGraphicTile;