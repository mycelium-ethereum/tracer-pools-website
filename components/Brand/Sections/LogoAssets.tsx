import AssetHeading from "@components/Brand/Sections/AssetHeading";
import Button from "@components/Shared/Buttons/Button";
import BrandAssetTile from "@components/Brand/Tiles/LogoTile";

const LogoAssets: React.FC<{
  heading: string;
  subheading: string | React.ReactNode;
  logos: {
    description: string;
    svg: string;
    png: string;
    grey?: boolean;
    blue?: boolean;
    noPadding?: boolean;
    className?: string;
  }[];
}> = ({ heading, subheading, logos }) => {
  return (
    <>
      <div className="mb-20">
        <div className="mb-8 flex flex-col justify-between sm:mb-0 sm:flex-row">
          <AssetHeading heading={heading} subheading={subheading} />
          <Button lightBlueGradient download link="/img/brand/Tracer Logos.zip">
            Download All
          </Button>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {logos.map((item, i) => (
            <BrandAssetTile
              key={i}
              item={item}
              noPadding={item.noPadding}
              grey={item.grey}
              blue={item.blue}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default LogoAssets;
