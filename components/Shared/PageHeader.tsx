import OptimisedImage from "./OptimisedImage";

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
      <OptimisedImage
        src="/img/general/mesh-top-right.png"
        alt=""
        absolute
        className="pointer-events-none top-0 right-0 w-full"
      />
    </header>
  );
};

export default PageHeader;
