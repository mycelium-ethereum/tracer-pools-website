const Container: React.FC<{
  className?: string;
  children: React.ReactNode;
}> = ({ className, children }) => {
  return (
    <div
      className={`container mx-auto px-[18px] transition-[width] duration-500 md:px-[50px] ${
        className ? className : ""
      }`}
    >
      {children}
    </div>
  );
};

export default Container;
