const ParagraphBlock: React.FC<{
  title: string;
  text: string;
  className?: string;
}> = ({ title, text, className }) => {
  return (
    <div className={`mr-9 max-w-[386px] ${className ? className : ""}`}>
      <div className="flex items-center border-b pt-1.5 pb-[14px] text-sm uppercase [border-color:inherit]">
        <img
          src="/img/icons/bullet.svg"
          alt="Bullet"
          className="mr-2 h-2.5 w-2.5"
        />
        <span className="inline-block tracking-[0.15em]">{title}</span>
      </div>
      <p className="mt-4 leading-[150%]">{text}</p>
    </div>
  );
};

export default ParagraphBlock;
