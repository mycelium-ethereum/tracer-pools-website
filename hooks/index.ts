import { useEffect, useState, RefObject } from "react";

export const handleOutsideClick = (containerRef: React.MutableRefObject<HTMLDivElement>, action: () => void) => {
    useEffect(() => {
        const detectClickOutside = (event: Event) => {
            if (containerRef && !containerRef.current.contains(event.target as HTMLElement)) {
                action();
            }
        }
        document.addEventListener("click", detectClickOutside);
        return () => document.removeEventListener("click", detectClickOutside);
    }, [containerRef]);
}

export const useOnScreen = (ref, rootMargin = "0px") => {
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


export const useOnLoadImages = (ref: RefObject<HTMLElement>) => {
    const [status, setStatus] = useState(false);

    useEffect(() => {
        const updateStatus = (images: HTMLImageElement[]) => {
            setStatus(
                images.map((image) => image.complete).every((item) => item === true)
            );
        };

        if (!ref?.current) return;

        const imagesLoaded = Array.from(ref.current.querySelectorAll("img"));

        if (imagesLoaded.length === 0) {
            setStatus(true);
            return;
        }

        imagesLoaded.forEach((image) => {
            image.addEventListener("load", () => updateStatus(imagesLoaded), {
                once: true
            });
            image.addEventListener("error", () => updateStatus(imagesLoaded), {
                once: true
            });
        });

        return;
    }, [ref]);

    return status;
};