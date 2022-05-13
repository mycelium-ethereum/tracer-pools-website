import React, { useState } from "react";
import CategoryButton from "@components/Brand/CategoryButton";
import MobileDropdown from "@components/Brand/MobileDropdown";

const BrandFilters: React.FC<{
  tags: string[];
  category: string;
  setCategory: React.Dispatch<React.SetStateAction<string>>;
}> = ({ tags, category, setCategory }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [dropdownText, setDropdownText] = useState("");

  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const buttonCategory = (e.target as HTMLButtonElement).dataset.category;
    setCategory(category === buttonCategory ? "All" : buttonCategory);
    setDropdownOpen(false);
    setDropdownText(category.charAt(0).toUpperCase() + category.slice(1));
  };

  return (
    <div className="relative z-10 mb-10 flex w-full items-center">
      {tags.slice(1, 5).map((tag, i) => (
        <CategoryButton
          key={i}
          index={i}
          category={category}
          tags={tags}
          buttonCategory={tag}
          handleClick={handleClick}
        />
      ))}
      <div className="flex items-center md:hidden">
        <span className="text mr-4 block text-tertiary">Jump to</span>
        <MobileDropdown
          {...{
            tags,
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
