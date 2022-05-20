const H1: React.FC<{
  className?: string;
  children: string | React.ReactNode;
}> = ({ className, children }) => {
  return (
    <h1
      className={`text-2xl font-light leading-[30px] sm:text-[40px] sm:leading-[44px] 4xl:text-[64px] 4xl:leading-[72px] ${
        className ? className : ""
      }`}
    >
      {children}
    </h1>
  );
};

export default H1;
