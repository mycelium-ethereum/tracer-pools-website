export interface CategoryButtonProps {
    category: string
    index: number
    tags: string[]
    buttonCategory: string
    handleClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
}

export const CategoryButton: React.FC<CategoryButtonProps> = ({
    category,
    index,
    tags,
    buttonCategory,
    handleClick,
}) => {
    return (
        <button
            className={`transition-color hidden h-full w-auto items-center justify-center rounded-lg py-2.5 px-[13px] text-sm duration-300 md:flex ${
                index === tags.length - 1 ? "mr-0" : "mr-2"
            }
          ${
              category === buttonCategory
                  ? "bg-action-active text-action-cell"
                  : "bg-action-cell text-action-active"
          }
        `}
            data-category={buttonCategory}
            onClick={handleClick}
        >
            {buttonCategory}
        </button>
    )
}
