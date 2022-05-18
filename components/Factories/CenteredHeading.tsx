const CenteredHeading: React.FC<{
  children: string;
  className?: string;
}> = ({ children, className }) => {
  return (
    <div
      className={`${
        className ? className : ""
      } mb-4 w-full text-sm uppercase text-action-active`}
    >
      <span className="mb-2 block text-center tracking-[0.15em]">
        {children}
      </span>
      <span className="blue-gradient-center block h-[1px] w-full" />
    </div>
  );
};

export default CenteredHeading;
