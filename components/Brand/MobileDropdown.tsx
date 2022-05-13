import GradientLine from "@components/Shared/GradientLine";
import React, { SetStateAction } from "react";

const MobileDropdown: React.FC<{
  tags: string[];
  dropdownText: string;
  dropdownOpen: boolean;
  setDropdownOpen: React.Dispatch<SetStateAction<boolean>>;
  handleClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}> = ({ tags, dropdownText, dropdownOpen, setDropdownOpen, handleClick }) => {
  return (
    <div className="relative">
      <button
        className="mr-2 flex h-10 w-max items-center justify-center rounded-lg bg-action-cell py-2.5 pr-7 pl-[13px] text-sm text-action-active transition-colors duration-300"
        onClick={() => {
          setDropdownOpen((wasOpen) => !wasOpen);
        }}
      >
        {dropdownText.length ? dropdownText : "Categories"}
        <img
          className="absolute top-1/2 right-4 h-3 w-3 -translate-y-1/2 transform"
          src="/img/icons/chevron-down-blue.svg"
          alt="Dropdown toggle"
        />
      </button>
      <div
        className={
          "absolute left-0 top-12 w-max overflow-hidden rounded-md bg-white shadow transition-opacity duration-300 md:hidden md:rounded-none md:bg-transparent md:p-0 md:shadow-none" +
          (dropdownOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0")
        }
      >
        <ul className="py-2 md:mt-2">
          {tags.map((tag, i) => (
            <li key={i}>
              <button
                data-category={tag}
                onClick={handleClick}
                className={`category-dropdown w-full pl-4 pr-6 pt-2 text-left text-sm text-tertiary transition-colors duration-300 ${
                  i === tags.length - 1 ? "pb-1" : ""
                }`}
              >
                {tag}
                {i !== tags.length - 1 && (
                  <span className="mt-2 block">
                    <GradientLine color="lightblue" />
                  </span>
                )}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MobileDropdown;
