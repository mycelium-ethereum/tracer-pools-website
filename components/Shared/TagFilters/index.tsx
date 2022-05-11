import CategoryBubble from "@components/Shared/CategoryBubble";

const TagFilters: React.FC<{
  category: string;
  setCategory: React.Dispatch<React.SetStateAction<string>>;
  tags: string[];
}> = ({ category, setCategory, tags }) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const buttonCategory = (e.target as HTMLButtonElement).dataset.category;
    setCategory(category === buttonCategory ? "All" : buttonCategory);
  };

  return (
    <div className="flex flex-wrap sm:flex-nowrap">
      {tags.map((buttonCategory, i) => (
        <button key={i} data-category={buttonCategory} onClick={handleClick}>
          <CategoryBubble
            large
            category={buttonCategory}
            className={`pointer-events-none mr-2 mb-2.5 sm:mb-0
              ${
                category === buttonCategory
                  ? "bg-action-active text-action-cell"
                  : "bg-action-cell text-action-active"
              }
            `}
          />
        </button>
      ))}
    </div>
  );
};

export default TagFilters;
