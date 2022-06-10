import { useEffect, useState } from "react";

export const useOnScreen = (ref: any, rootMargin: string = "0px"): boolean => {
    // State and setter for storing whether element is visible
    const [isIntersecting, setIntersecting] = useState(false);

    useEffect(() => {
        let currentRef = null;
        const observer = new IntersectionObserver(
            ([entry]) => {
                // Update our state when observer callback fires
                setIntersecting(entry.isIntersecting);
            },
            {
                rootMargin,
            }
        );
        if (ref.current) {
            currentRef = ref.current;
            observer.observe(currentRef);
        }
        return () => {
            observer.unobserve(currentRef);
        };
    }, [ref, rootMargin]); // Empty array ensures that effect is only run on mount and unmount

    return isIntersecting;
};