export interface ClearFiltersButtonProps {
    clearFilters: () => void
    filtersChanged: boolean
}

export const ClearFiltersButton: React.FC<ClearFiltersButtonProps> = ({
    clearFilters,
    filtersChanged,
}) => {
    return (
        <button
            onClick={clearFilters}
            className={`${
                filtersChanged
                    ? "pointer-events-auto opacity-100"
                    : "pointer-events-none opacity-0"
            } hover:text-tracer-800 mb-12 mt-5 block w-max font-semibold text-action-active underline transition-all duration-300`}
        >
            Clear filters
        </button>
    )
}
