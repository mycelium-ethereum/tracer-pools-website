const PageHeader: React.FC<{ title: string; subheading: string }> = ({
  title,
  subheading,
}) => {
  return (
    <header className="pt-[139px] pb-[106px]">
      <h1 className="mb-1 text-[40px] font-bold leading-[48px] text-action-active">
        {title}
      </h1>
      <small className="text-lg leading-[30px] text-tertiary">
        {subheading}
      </small>
    </header>
  );
};

export default PageHeader;
