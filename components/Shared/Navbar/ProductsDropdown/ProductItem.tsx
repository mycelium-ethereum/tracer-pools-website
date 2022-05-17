import { SVGProps } from "types";
import PageLink from "@components/Shared/PageLink";

const ProductItem: React.FC<{
  logo: string;
  link: string;
  border: boolean;
  handleClose: () => void;
}> = ({ logo, link, border, handleClose }) => {
  return (
    <PageLink href={link}>
      <button
        onClick={handleClose}
        className={`flex w-full items-center justify-center py-4 transition-colors duration-500 hover:bg-tracer-midblue ${
          border ? "border-b border-action-active" : ""
        }`}
      >
        <img src={logo} className="h-[18px]" />
      </button>
    </PageLink>
  );
};

export default ProductItem;
