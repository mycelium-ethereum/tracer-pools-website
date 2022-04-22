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
        <button
          className={
            "mr-2 flex h-10 items-center justify-center rounded-lg  py-2.5 px-[13px] transition-colors duration-300 hover:bg-action-active hover:text-action-cell " +
            (category === buttonCategory.name
              ? "bg-action-active text-action-cell"
              : "bg-action-cell text-action-active")
          }
          data-category={buttonCategory.name}
          onClick={handleClick}
        >
          {buttonCategory.text}
        </button>
      ))}
    </div>
  );
};

export default PostFilters;
