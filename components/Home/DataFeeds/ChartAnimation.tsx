const ChartAnimation: React.FC<{}> = () => {
  return (
    <div className="absolute top-0 right-0 h-full w-full">
      <div className="absolute right-0 top-0 h-full w-1/2">
        <div className="btc-chart-section relative z-0 h-[600px] w-[600px] rotate-90 transform" />
      </div>
      <img
        className="absolute top-0 right-0 z-10 h-full w-full object-cover object-right"
        src="/img/home/mesh.svg"
      />
    </div>
  );
};

export default ChartAnimation;
