import AssetHeading from "@/components/Brand/Assets/AssetHeading";
import Button from "@/components/Shared/Button";
import BrandGraphicTile from "@/components/Brand/BrandGraphicTile";

const GraphicAssets: React.FC<{
  heading: string;
  subheading: string | React.ReactNode;
  graphics: {
    description: string;
    image: string;
    download: string;
    alt: string;
  }[];
}> = ({ heading, subheading, graphics }) => {
  return (
    <div className="mb-20">
      <div className="flex justify-between">
        <AssetHeading heading={heading} subheading={subheading} />
        <Button
          lightBlueGradient
          download
          link="/img/brand/Tracer Support Graphics.zip"
        >
          Download Support Graphic Set
        </Button>
      </div>
      <div className="grid grid-cols-2 gap-4">
        {graphics.map((item, i) => (
          <BrandGraphicTile key={i} item={item} />
        ))}
      </div>
    </div>
  );
};

export default GraphicAssets;