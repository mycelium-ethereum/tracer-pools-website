const GridContainer: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <div className="mt-20 grid max-w-[814px] gap-12 sm:grid-cols-2 lg:gap-x-14 lg:gap-y-20 3xl:max-w-[50vw] 4xl:max-w-[70vw] 4xl:grid-cols-4">
      {children}
    </div>
  );
};

export default GridContainer;
