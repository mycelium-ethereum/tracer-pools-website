import AssetHeading from "@components/Brand/Sections/AssetHeading";
import Button from "@components/Shared/Buttons/Button";

const TypographyAssets: React.FC<{
  heading: string;
  subheading: string | React.ReactNode;
}> = ({ heading, subheading }) => {
  return (
    <div className="mb-20">
      <div className="flex justify-between">
        <AssetHeading heading={heading} subheading={subheading} />
        <div className="flex">
          <Button
            lightBlueGradient
            className="mr-2"
            outgoingLink="https://www.fontsquirrel.com/fonts/aileron"
          >
            Aileron on Font Squirrel
          </Button>
          <Button
            lightBlueGradient
            outgoingLink="https://fonts.adobe.com/fonts/aileron"
          >
            Download Aileron
          </Button>
        </div>
      </div>
      <div className="relative h-80 w-full sm:h-[270px] xl:h-60">
        <span className="font-aileron absolute left-1/2 block w-[1000px] -translate-x-1/2 transform text-[80px] leading-none text-action-active sm:w-[950px] md:w-[2200px] md:text-[120px]">
          Leveraged exposure. No margins. No liquidations. A new derivative
          primitive.
        </span>
      </div>
    </div>
  );
};

export default TypographyAssets;
