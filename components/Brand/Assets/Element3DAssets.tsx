import AssetHeading from "@/components/Brand/Assets/AssetHeading";
import Button from "@/components/Shared/Button";
import BrandElement3DTile from "@/components/Brand/BrandElement3DTile";

const Element3DAssets: React.FC<{
  heading: string;
  subheading: string | React.ReactNode;
  elements3D: {
    description: string;
    image: string;
    download: string;
    alt: string;
    className: string;
  }[];
}> = ({ heading, subheading, elements3D }) => {
  return (
    <div className="mb-20">
      <div className="flex justify-between">
        <AssetHeading heading={heading} subheading={subheading} />
        <Button
          lightBlueGradient
          download
          link="/img/brand/Tracer 3D Graphics.zip"
        >
          Download All
        </Button>
      </div>
      <div className="grid grid-cols-2 gap-4">
        {elements3D.map((item, i) => (
          <BrandElement3DTile key={i} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Element3DAssets;
