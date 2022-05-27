import IntegrationLottieAnim from "@components/Pools/Integration/IntegrationLottieAnim";
import UnderlinedHeading from "@components/Shared/Heading/UnderlinedHeading";

const Integration: React.FC<{
  title: string;
  text: React.ReactNode;
}> = ({ title, text }) => {
  return (
    <div className="text-action-active">
      <IntegrationLottieAnim/>
      <UnderlinedHeading lineColor="blue" className="max-w-[294px]">
        {title}
      </UnderlinedHeading>
      {text}
    </div>
  );
};

export default Integration;
