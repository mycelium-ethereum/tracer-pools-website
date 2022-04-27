import AssetHeading from "@/components/Brand/Assets/AssetHeading";
import BrandColourTile from "../BrandColourTile";

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
      <div className="flex flex-wrap justify-center xl:justify-between">
        {colours.slice(0, FIRST_ROW_LIMIT).map((item, i) => (
          <BrandColourTile key={i} item={item} />
        ))}
        {colours.slice(FIRST_ROW_LIMIT, SECOND_ROW_LIMIT).map((item, i) => (
          <BrandColourTile key={i} item={item} small />
        ))}
      </div>
    </div>
  );
};

export default ColourAssets;
