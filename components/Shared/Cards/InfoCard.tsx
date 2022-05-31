// import IntegrationLottieAnim from "@components/Pools/Integration/IntegrationLottieAnim";
import UnderlinedHeading from "@components/Shared/Heading/UnderlinedHeading";

const Integration: React.FC<{
  image: string;
  title: string;
  text: React.ReactNode;
}> = ({ image, title, text }) => {
  return (
    <div className="text-action-active">
      {/* <IntegrationLottieAnim/> */}
      <img src={image} className="mb-4 h-[120px] w-[120px]" />
      <UnderlinedHeading lineColor="blue" className="max-w-[294px]">
        {title}
      </UnderlinedHeading>
      {text}
    </div>
  );
};

export default Integration;
