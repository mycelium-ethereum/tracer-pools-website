const TwoColumnLayout: React.FC<{
  items: any;
  Component: React.FC<{
    item?: any;
  }>;
}> = ({ items, Component }) => {
  return (
    <>
      <div className="w-full">
        {items.map((item: any, i: number) => {
          if (i % 2 === 0 || i === 0) {
            return <Component key={i} item={item} />;
          }
        })}
      </div>
      <div className="w-full">
        {items.map((item: any, i: number) => {
          if (i % 2 === 1 || i === 1) {
            return <Component key={i} item={item} />;
          }
        })}
      </div>
    </>
  );
};

export default TwoColumnLayout;
