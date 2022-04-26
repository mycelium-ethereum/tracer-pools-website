import CategoryBubble from "./CategoryBubble";

const PostFilters: React.FC<{
  category: string;
  setCategory: React.Dispatch<React.SetStateAction<string>>;
}> = ({ category, setCategory }) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const buttonCategory = (e.target as HTMLButtonElement).getAttribute(
      "data-category"
    );
    setCategory(category === buttonCategory ? "all" : buttonCategory);
  };

  const CategoryInfo = [
    {
      name: "announcements",
      text: "Announcements",
    },
    // {
    //   name: "ama",
    //   text: "AMA",
    // },
    {
      name: "education",
      text: "Education",
    },
    {
      name: "partnerships",
      text: "Partnerships",
    },
    {
      name: "all",
      text: "All",
    },
  ];

  return (
    <div className="flex">
      {CategoryInfo.map((buttonCategory) => (
        <button data-category={buttonCategory.name} onClick={handleClick}>
          <CategoryBubble
            large
            category={buttonCategory.text}
            className={`pointer-events-none mr-2
              ${
                category === buttonCategory.name
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

export default PostFilters;
