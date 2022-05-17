import { useEffect, useState } from "react";

export const disableScroll = () => {
    document.body.classList.add("overflow-hidden");
};

export const enableScroll = () => {
    document.body.classList.remove("overflow-hidden");
};

export const isCollapsed = () => {
    if (typeof window !== "undefined") {
        return window.innerWidth < 1536;
    } else {
        return false;
    }
};

export const capitaliseFirstLetter = (str: string) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
};

export const sortByDate = (a: any, b: any) => {
    return (
        new Date(b.publish_date).getTime() - new Date(a.publish_date).getTime()
    );
};

export const getVideoData = async (array: any, id: string) => {
    const res = await fetch(
        `${process.env.NEXT_PUBLIC_YOUTUBE_VIDEO_API}&id=${id}&key=${process.env.NEXT_PUBLIC_YOUTUBE_API_KEY}`
    );
    const mediaVideoData = await res.json();
    array.push(mediaVideoData);
};

export const getTracerDropPlaylistData = async () => {
    const res = await fetch(
        `${process.env.NEXT_PUBLIC_YOUTUBE_PLAYLIST_ITEMS_API}?part=snippet&maxResults=5&playlistId=${process.env.NEXT_PUBLIC_YOUTUBE_PLAYLIST_ID}&key=${process.env.NEXT_PUBLIC_YOUTUBE_API_KEY}`
    );
    const dropVideoData = await res.json();
    return dropVideoData;
};

export const filterArticles = (
    data: any,
    amountToShow: number,
    setPostsInView: React.Dispatch<React.SetStateAction<any[]>>
) => {
    const filtered = data
        .slice(0, amountToShow)
        .map((video: any, i: number) => video);
    setPostsInView(filtered);
};

export const handleLearnPageResize = (
    setAmountToShow: (value: React.SetStateAction<number>) => void,
    setColumns: (value: React.SetStateAction<number>) => void,
    setShowAll?: (value: React.SetStateAction<boolean>) => void
) => {
    const width = window.innerWidth;
    setShowAll && setShowAll(false);
    if (width >= 2560) {
        setColumns(5);
        setAmountToShow(5);
    }
    if (width >= 1920 && width < 2560) {
        setColumns(4);
        setAmountToShow(4);
    }
    if (width >= 1024 && width < 1920) {
        setColumns(3);
        setAmountToShow(3);
    }
    if (width < 1024) {
        setColumns(2);
        setAmountToShow(4);
    }
    if (width < 640) {
        setColumns(1);
        setAmountToShow(4);
    }
};

export const setCopyrightYear = (
    yearRef: React.MutableRefObject<HTMLDivElement>
) => {
    const year = new Date().getFullYear();
    yearRef.current.innerHTML = year.toString();
};

export const isMobile = () => {
    if (typeof window !== "undefined") {
        return window.innerWidth < 767;
    } else {
        return false;
    }
};

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
