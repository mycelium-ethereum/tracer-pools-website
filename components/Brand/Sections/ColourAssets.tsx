import AssetHeading from "@/components/Brand/Sections/AssetHeading";
import BrandColourTile from "../Tiles/ColourTile";

const ColourAssets: React.FC<{
  heading: string;
  subheading: string | React.ReactNode;
  colours: {
    description: string;
    hex: string;
  }[];
}> = ({ heading, subheading, colours }) => {
  const FIRST_ROW_LIMIT = 3;
  const SECOND_ROW_LIMIT = 7;

  return (
    <div className="mb-20">
      <AssetHeading heading={heading} subheading={subheading} />
      <div className="mb-4 grid grid-cols-3 gap-x-4">
        {colours.slice(0, FIRST_ROW_LIMIT).map((item, i) => (
          <BrandColourTile key={i} item={item} />
        ))}
      </div>
      <div className="grid grid-cols-4 gap-x-4">
        {colours.slice(FIRST_ROW_LIMIT, SECOND_ROW_LIMIT).map((item, i) => (
          <BrandColourTile key={i} item={item} />
        ))}
      </div>
    </div>
  );
};

export default ColourAssets;
