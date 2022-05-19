const OneColumnLayout: React.FC<{
  items: any;
  Component: React.FC<{
    item?: any;
  }>;
}> = ({ items, Component }) => {
  return (
    <>
      <div className="w-full">
        {items.map((item: any, i: number) => {
          return <Component key={i} item={item} />;
        })}
      </div>
    </>
  );
};

export default OneColumnLayout;
