import { SVGProps } from "types";
import PageLink from "@components/Shared/PageLink";

const ProductItem: React.FC<{
  logo: string;
  link: string;
  border: boolean;
}> = ({ logo, link, border }) => {
  return (
    <PageLink href={link}>
      <div
        className={`flex items-center justify-center py-4 transition-colors duration-500 hover:bg-tracer-midblue ${
          border ? "border-b border-action-active" : ""
        }`}
      >
        <img src={logo} className="h-[18px]" />
      </div>
    </PageLink>
  );
};

export default ProductItem;
