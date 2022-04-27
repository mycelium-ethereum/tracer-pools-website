import Download from "@/components/Brand/Download";

const BrandElement3DTile: React.FC<{
  item: {
    description: string;
    image: string;
    download: string;
    alt: string;
    className: string;
  };
}> = ({ item }) => {
  return (
    <div className="w-full">
      <div
        className={`mb-2 flex h-[363px] w-full items-center justify-center rounded-xl bg-tracer-navy [box-shadow:0px_4px_15px_rgb(0_0_0_/_15%)]`}
      >
        <picture>
          <img src={item.image} alt={item.alt} className={item.className} />
        </picture>
      </div>
      <div className="flex w-full items-center justify-between text-sm">
        <span className="text-tertiary">{item.description}</span>
        <div className="font-semibold text-[#1C64F2]">
          <Download url={item.download}>PNG</Download>
        </div>
      </div>
    </div>
  );
};

export default BrandElement3DTile;
