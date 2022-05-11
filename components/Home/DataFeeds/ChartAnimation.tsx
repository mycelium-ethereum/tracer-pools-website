import MeshUnderlay from "@components/Shared/MeshUnderlay";

const ChartAnimation: React.FC<{}> = () => {
  return (
    <div className="absolute top-0 right-0 h-full w-full">
      <div className="absolute right-0 top-0 h-full w-1/2">
        <div className="btc-chart-section relative z-0 h-[600px] w-[600px] rotate-90 transform" />
      </div>
      <MeshUnderlay fullPage />
    </div>
  );
};

export default ChartAnimation;
