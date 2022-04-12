const Container: React.FC<{
  className?: string;
  children: React.ReactNode;
}> = ({ className, children }) => {
  return (
    <div
      className={`transition-width container mx-auto w-full px-[18px] duration-500 md:px-[50px] ${
        className ? className : ""
      }`}
    >
      {children}
    </div>
  );
};

export default Container;
