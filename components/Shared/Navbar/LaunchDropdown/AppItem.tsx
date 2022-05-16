const AppItem: React.FC<{
  image: string;
  logo: string;
  logoClassName: string;
}> = ({ image, logo, logoClassName }) => {
  return (
    <div className="flex flex-col items-center justify-center rounded-md py-2 transition-colors duration-500 hover:bg-tracer-midblue">
      <img src={image} className="h-[60px] w-[60px]" />
      <img src={logo} className={`mt-2 ${logoClassName}`} />
    </div>
  );
};

export default AppItem;
