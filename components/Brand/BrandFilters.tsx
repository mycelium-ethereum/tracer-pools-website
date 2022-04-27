import React, { useState } from "react";
import { categoryInfo } from "@/components/Brand/presets";
import CategoryButton from "./CategoryButton";
import MobileDropdown from "./MobileDropdown";

const BrandFilters: React.FC<{
  category: string;
  setCategory: React.Dispatch<React.SetStateAction<string>>;
}> = ({ category, setCategory }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [dropdownText, setDropdownText] = useState("");

  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const buttonCategory = (e.target as HTMLButtonElement).dataset.category;
    setCategory(category === buttonCategory ? "all" : buttonCategory);
    setDropdownOpen(false);
    setDropdownText(category.charAt(0).toUpperCase() + category.slice(1));
  };

  return (
    <div className="relative z-10 mb-10 flex w-full items-center">
      {categoryInfo.slice(1, 5).map((buttonCategory, i) => (
        <CategoryButton
          key={i}
          index={i}
          category={category}
          categoryInfo={categoryInfo}
          buttonCategory={buttonCategory}
          handleClick={handleClick}
        />
      ))}
      <div className="flex items-center">
        <span className="mr-7 block text-[#828790] md:hidden">Jump to</span>
        <MobileDropdown
          {...{
            categoryInfo,
            dropdownText,
            dropdownOpen,
            setDropdownOpen,
            handleClick,
          }}
        />
      </div>
    </div>
  );
};

export default BrandFilters;
