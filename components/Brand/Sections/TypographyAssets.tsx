import AssetHeading from "@components/Brand/Sections/AssetHeading";
import Button from "@components/Shared/Buttons/Button";

const TypographyAssets: React.FC<{
  heading: string;
  subheading: string | React.ReactNode;
}> = ({ heading, subheading }) => {
  return (
    <div className="md:mb-20">
      <div className="mb-8 flex flex-col justify-between sm:mb-0 sm:flex-row">
        <AssetHeading heading={heading} subheading={subheading} />
        <div className="flex flex-col sm:flex-row">
          <Button
            lightBlueGradient
            className="mb-2 sm:mb-0 sm:mr-2"
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
        <span className="font-aileron absolute left-1/2 block w-[1000px] -translate-x-1/2 transform text-center text-[80px] leading-none text-action-active sm:w-[950px] md:w-[2200px] md:text-[120px]">
          Leveraged exposure. No margins. No liquidations. A new derivative
          primitive.
        </span>
      </div>
    </div>
  );
};

export default TypographyAssets;
