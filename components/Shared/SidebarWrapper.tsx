import { useEffect, useState } from "react";
import { isMobile, sortByDate } from "@/lib/helpers";

const SidebarWrapper: React.FC<{
  bodyTextRef: React.MutableRefObject<HTMLDivElement>;
  children: React.ReactNode;
}> = ({ bodyTextRef, children }) => {
  const [visible, setVisible] = useState<boolean>(false);

  const handleScroll = () => {
    const textContentEl = bodyTextRef.current as HTMLDivElement;
    const footerEl = document.querySelector("footer") as HTMLDivElement;
    const bodyHeight = document.body.scrollHeight;
    const bottomOffset = bodyHeight - footerEl.clientHeight * 2.5;

    // Show the sidebar if the user has scrolled past the blog content,
    // but hide if close to bottom (2.5x footer height)
    if (
      textContentEl &&
      window.scrollY >= textContentEl.offsetTop &&
      window.scrollY <= bottomOffset &&
      !isMobile()
    ) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  const visibleStyles = "pointer-events-auto opacity-100";
  const invisibleStyles = "pointer-events-none opacity-0";

  return (
    <aside
      className={`fixed right-0 top-[140px] z-50 w-[296px] overflow-hidden rounded-tl-lg rounded-bl-lg bg-white transition-opacity duration-500 [box-shadow:_0px_2px_4px_rgba(0,0,0,0.1)] ${
        visible ? visibleStyles : invisibleStyles
      }`}
    >
      {children}
    </aside>
  );
};

export default SidebarWrapper;
