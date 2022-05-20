import { useRef } from "react";
import ProductItem from "@components/Shared/Navbar/ProductsDropdown/ProductItem";
import { productContent } from "@components/Shared/Navbar/ProductsDropdown/presets";

const ProductsDropdown: React.FC<{
  desktopProductsDropdownOpen: boolean;
  handleDesktopProductsDropdownClose: () => void;
}> = ({ desktopProductsDropdownOpen, handleDesktopProductsDropdownClose }) => {
  const activeStyles = "active pointer-events-auto ";
  const inactiveStyles = "pointer-events-none";

  const firstClass = "border rounded-tr-md rounded-tl-md";
  const secondClass = "border-l border-r";
  const thirdClass = "border rounded-br-md rounded-bl-md";

  const getClass = (index: number): string => {
    switch (index) {
      case 0:
        return firstClass;
      case 1:
        return secondClass;
      case 2:
        return thirdClass;
      default:
        return firstClass;
    }
  };

  return (
    <div
      className={`products-dropdown absolute top-10 left-1/2 w-[257px] -translate-x-1/2 rounded-md ${
        desktopProductsDropdownOpen ? activeStyles : inactiveStyles
      }`}
      onMouseLeave={handleDesktopProductsDropdownClose}
    >
      {productContent.map((product, i) => (
        <ProductItem
          key={i}
          {...product}
          handleClose={handleDesktopProductsDropdownClose}
          className={getClass(i)}
        />
      ))}
    </div>
  );
};

export default ProductsDropdown;
