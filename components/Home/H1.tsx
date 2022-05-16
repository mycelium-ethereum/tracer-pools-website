const H1: React.FC<{
  className?: string;
  children: string | React.ReactNode;
}> = ({ className, children }) => {
  return (
    <h1
      className={`text-[40px] font-light leading-[44px] 3xl:text-6xl 3xl:leading-[66px] ${
        className ? className : ""
      }`}
    >
      {children}
    </h1>
  );
};

export default H1;
