const ThreeColumnLayout: React.FC<{
  items: any;
  Component: React.FC<{
    item?: any;
  }>;
}> = ({ items, Component }) => {
  return (
    <>
      <div>
        {items.map((item: any, i: number) => {
          if (i % 3 === 0 || i === 0) {
            return <Component key={i} item={item} />;
          }
        })}
      </div>
      <div>
        {items.map((item: any, i: number) => {
          if (i % 3 === 1 || i === 1) {
            return <Component key={i} item={item} />;
          }
        })}
      </div>
      <div>
        {items.map((item: any, i: number) => {
          if (i % 3 !== 1 && i !== 1 && i % 3 !== 0 && i !== 0) {
            return <Component key={i} item={item} />;
          }
        })}
      </div>
    </>
  );
};

export default ThreeColumnLayout;
