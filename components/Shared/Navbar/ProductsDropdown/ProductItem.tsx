import PageLink from "@components/Shared/PageLink";

const ProductItem: React.FC<{
  logo: string;
  link: string;
  handleClose: () => void;
  className: string;
}> = ({ logo, link, handleClose, className }) => {
  return (
    <PageLink href={link} className={`block border-action-active ${className}`}>
      <button
        onClick={handleClose}
        className={`flex w-full items-center justify-center py-4 transition-all duration-500 hover:bg-tracer-midblue`}
      >
        <img src={logo} className="h-[18px]" />
      </button>
    </PageLink>
  );
};

export default ProductItem;
