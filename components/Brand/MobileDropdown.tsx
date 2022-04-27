import React, { SetStateAction } from "react";

const MobileDropdown: React.FC<{
  categoryInfo: {
    name: string;
    text: string;
  }[];
  dropdownText: string;
  dropdownOpen: boolean;
  setDropdownOpen: React.Dispatch<SetStateAction<boolean>>;
  handleClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}> = ({
  categoryInfo,
  dropdownText,
  dropdownOpen,
  setDropdownOpen,
  handleClick,
}) => {
  return (
    <div className="relative">
      <button
        className="relative mr-4 inline-flex h-11 w-auto items-center justify-start rounded-xl bg-gray-50 px-8 pl-4 text-base font-semibold md:hidden"
        onClick={() => {
          setDropdownOpen((wasOpen) => !wasOpen);
        }}
      >
        {dropdownText.length ? dropdownText : "Categories"}
        <img
          className="absolute top-1/2 right-2 h-auto w-4 -translate-y-1/2 transform"
          src="/img/icons/chevron-down.svg"
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
        <ul className="md:mt-2">
          {categoryInfo.map((category, i) => (
            <li>
              <button
                data-category={category.name}
                onClick={handleClick}
                className={`category-dropdown w-full py-1 px-4 text-left text-black transition-colors duration-300 ${
                  i === categoryInfo.length - 1 ? "pb-1" : ""
                }`}
              >
                {category.text}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MobileDropdown;
