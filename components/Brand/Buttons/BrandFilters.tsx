import { useState } from "react"
import { CategoryButton } from "@components/Brand/Buttons/CategoryButton"
import MobileDropdown from "@components/Brand/Buttons/MobileDropdown"

export interface BrandFiltersProps {
    tags: string[]
    containerRef: React.MutableRefObject<HTMLDivElement>
    category: string
    setCategory: React.Dispatch<React.SetStateAction<string>>
}

export const BrandFilters: React.FC<BrandFiltersProps> = ({
    tags,
    containerRef,
    category,
    setCategory,
}) => {
    const [dropdownOpen, setDropdownOpen] = useState(false)
    const [dropdownText, setDropdownText] = useState("")

    const handleClick = (
        e: React.MouseEvent<HTMLButtonElement, MouseEvent>
    ) => {
        const buttonCategory = (e.target as HTMLButtonElement).dataset.category
        containerRef?.current?.classList.add("opacity-0")
        setTimeout(() => {
            setCategory(category === buttonCategory ? "All" : buttonCategory)
            containerRef?.current?.classList.remove("opacity-0")
        }, 300)
        setDropdownOpen(false)
        setDropdownText(category.charAt(0).toUpperCase() + category.slice(1))
    }

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
    )
}
