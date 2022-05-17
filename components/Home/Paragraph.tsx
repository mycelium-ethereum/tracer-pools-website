const Paragraph: React.FC<{
  className?: string;
  children: string | React.ReactNode;
}> = ({ className, children }) => {
  return (
    <p
      className={`text-base leading-[150%] 4xl:text-xl 4xl:leading-[28px] ${
        className ? className : ""
      }`}
    >
      {children}
    </p>
  );
};

export default Paragraph;
