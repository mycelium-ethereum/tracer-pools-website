import AssetHeading from "@/components/Brand/Assets/AssetHeading";
import BrandAssetTile from "../BrandAssetTile";

const LogoAssets: React.FC<{
  heading: string;
  subheading: string | React.ReactNode;
  logos: {
    description: string;
    svg: string;
    png: string;
    black?: boolean;
  }[];
}> = ({ heading, subheading, logos }) => {
  return (
    <>
      <div className="mb-20">
        <AssetHeading heading={heading} subheading={subheading} />
        <div className="grid grid-cols-3 gap-4">
          {logos.map((item, i) => (
            <BrandAssetTile key={i} item={item} black={item.black} />
          ))}
        </div>
      </div>
    </>
  );
};

export default LogoAssets;
