const Paragraph: React.FC<{
  className?: string;
  children: string | React.ReactNode;
}> = ({ className, children }) => {
  return (
    <p
      className={`text-base leading-[150%] 3xl:text-xl 3xl:leading-[28px] ${
        className ? className : ""
      }`}
    >
      {children}
    </p>
  );
};

export default Paragraph;
