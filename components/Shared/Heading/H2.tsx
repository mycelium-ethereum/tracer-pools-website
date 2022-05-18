const H2: React.FC<{
  className?: string;
  children: string | React.ReactNode;
}> = ({ className, children }) => {
  return (
    <h2
      className={`text-2xl leading-[28px] sm:text-[40px] sm:leading-[44px] ${
        className ? className : ""
      }`}
    >
      {children}
    </h2>
  );
};

export default H2;
