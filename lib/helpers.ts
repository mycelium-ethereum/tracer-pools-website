import scrollIntoView from "smooth-scroll-into-view-if-needed";

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

export const handleAnchorClick = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
) => {
    e.preventDefault();
    const href = (e.target as HTMLAnchorElement)
        .getAttribute("href")
        .replace("#", "")
        .replace("/", "");
    // Scroll to top of posts
    scrollIntoView(document.getElementById(href), {
        behavior: "smooth",
        block: 'start',
        scrollMode: "if-needed",
        duration: 1000,
    });
};

export const getCurrentSection = (route: string, setCurrentSection: (value: React.SetStateAction<string>) => void) => {
    if (route === "/" || route === "/pools") {
        const sections: NodeListOf<HTMLElement> =
            document.querySelectorAll("section");
        // Check each section to see if it is above or below the top of the viewport
        sections.forEach((section) => {
            let offset = section.offsetTop;
            let actualPos = offset - document.documentElement.scrollTop;
            let id = section.getAttribute("id");
            if (id && actualPos < 30 && actualPos + section.clientHeight > 30) {
                id = id.replace("#", "");
                setCurrentSection(id);
            }
        });
    }
};

export const changeNavColour = (route: string, currentSection: string, blueStyles: string,
    whiteStyles: string, solidBlueStyles: string, setHamburgerColour: (value: React.SetStateAction<string>) => void,
    setNavColour: (value: React.SetStateAction<string>) => void) => {
    let navTextColour = "";
    if (route === "/") {
        switch (currentSection) {
            case "section-1":
                navTextColour = whiteStyles;
                break;
            case "section-2":
                navTextColour = blueStyles;
                break;
            case "section-3":
                navTextColour = whiteStyles;
                break;
            case "section-4":
                navTextColour = whiteStyles;
                break;
            case "section-5":
                navTextColour = whiteStyles;
                break;
            case "section-6":
                navTextColour = whiteStyles;
                break;
            default:
                navTextColour = whiteStyles;
                break;
        }
    } else if (route === "/pools") {
        switch (currentSection) {
            case "section-1":
                navTextColour = whiteStyles;
                break;
            case "section-2":
                navTextColour = blueStyles;
                break;
            case "section-3":
                navTextColour = blueStyles;
                break;
            case "section-4":
                navTextColour = blueStyles;
                break;
            case "section-5":
                navTextColour = blueStyles;
                break;
            default:
                navTextColour = whiteStyles;
                break;
        }
    } else if (route === "/factories") {
        switch (currentSection) {
            case "section-1":
                navTextColour = whiteStyles;
                break;
            case "section-2":
                navTextColour = blueStyles;
                break;
            case "section-3":
                navTextColour = blueStyles;
                break;
            case "section-4":
                navTextColour = blueStyles;
                break;
            case "section-5":
                navTextColour = blueStyles;
                break;
            default:
                navTextColour = whiteStyles;
                break;
        }
    } else if (route === "/indices") {
        switch (currentSection) {
            case "section-1":
                navTextColour = whiteStyles;
                break;
            case "section-2":
                navTextColour = blueStyles;
                break;
            case "section-3":
                navTextColour = blueStyles;
                break;
            case "section-4":
                navTextColour = blueStyles;
                break;
            case "section-5":
                navTextColour = blueStyles;
                break;
            default:
                navTextColour = whiteStyles;
                break;
        }
    } else {
        navTextColour = solidBlueStyles;
    }
    setHamburgerColour(
        navTextColour === whiteStyles ? "bg-white" : "bg-action-active"
    );
    setNavColour(navTextColour);
};