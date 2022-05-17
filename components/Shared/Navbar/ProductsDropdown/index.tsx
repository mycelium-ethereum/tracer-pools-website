import { useRef } from "react";
import ProductItem from "@components/Shared/Navbar/ProductsDropdown/ProductItem";
import { productContent } from "@components/Shared/Navbar/ProductsDropdown/presets";

const ProductsDropdown: React.FC<{
  desktopProductsDropdownOpen: boolean;
  handleDesktopProductsDropdownClose: () => void;
}> = ({ desktopProductsDropdownOpen, handleDesktopProductsDropdownClose }) => {
  const activeStyles =
    "[transform:scale3d(1,1,1)_perspective(999px)_translate3d(0,0,0)_translateX(calc(calc(50%+12px)*-1))]  pointer-events-auto opacity-100";
  const inactiveStyles =
    "[transform:scale3d(0.98,0.98,1)_perspective(999px)_translate3d(0,0,0)_translateX(calc(calc(50%+12px)*-1))] pointer-events-none opacity-0";

  return (
    <div
      className={`absolute top-10 left-1/2 w-[257px] overflow-hidden rounded-md border border-action-active bg-tracer-midblue bg-opacity-80 transition-all duration-500 ${
        desktopProductsDropdownOpen ? activeStyles : inactiveStyles
      }`}
      onMouseLeave={handleDesktopProductsDropdownClose}
    >
      {productContent.map((product, i) => (
        <ProductItem
          key={i}
          {...product}
          border={i !== productContent.length - 1}
        />
      ))}
    </div>
  );
};

export default ProductsDropdown;
