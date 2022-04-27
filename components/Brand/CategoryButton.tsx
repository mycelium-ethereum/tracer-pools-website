const CategoryButton: React.FC<{
  category: string;
  index: number;
  categoryInfo: {
    name: string;
    text: string;
  }[];
  buttonCategory: {
    name: string;
    text: string;
  };
  handleClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}> = ({ category, index, categoryInfo, buttonCategory, handleClick }) => {
  return (
    <button
      className={`transition-color hidden h-full w-auto items-center justify-center rounded-lg py-2.5 px-[13px] text-sm duration-300 md:flex ${
        index === categoryInfo.length - 1 ? "mr-0" : "mr-2"
      }
          ${
            category === buttonCategory.name
              ? "bg-action-active text-action-cell"
              : "bg-action-cell text-action-active"
          }
        `}
      data-category={buttonCategory.name}
      onClick={handleClick}
    >
      {buttonCategory.text}
    </button>
  );
};

export default CategoryButton;
