const H2: React.FC<{
  className?: string;
  children: string | React.ReactNode;
}> = ({ className, children }) => {
  return (
    <h2
      className={`mb-4 text-2xl leading-[28px] 3xl:text-[40px] 3xl:leading-[44px] ${
        className ? className : ""
      }`}
    >
      {children}
    </h2>
  );
};

export default H2;
