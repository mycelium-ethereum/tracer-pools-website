import { useEffect } from "react";

export const handleOutsideClick = (containerRef: React.MutableRefObject<HTMLDivElement>, action: () => void) => {
    useEffect(() => {
        const detectClickOutside = (event: Event) => {
            if (containerRef && !containerRef.current.contains(event.target as HTMLElement)) {
                action();
            }
        }
        document.addEventListener("click", detectClickOutside);
        return () => document.removeEventListener("click", detectClickOutside);
    }, [containerRef])
}