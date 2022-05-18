import Moment from "react-moment";
import CategoryBubble from "@components/Shared/CategoryBubble";
import ShareButtons from "@components/Radar/Post/ShareButtons";
import Container from "@components/Shared/Container";
import { useCallback, useEffect, useRef, useState } from "react";

const CurrentArticlePopout: React.FC<{
  data: any;
}> = ({ data }) => {
  const popoutRef = useRef<HTMLDivElement>(null);
  const [y, setY] = useState<number>(0);
  const [visible, setVisible] = useState<boolean>(true);
  const handleNavigation = useCallback(
    (e) => {
      const window = e.currentTarget;
      if (
        y > window.scrollY &&
        window.scrollY > popoutRef.current.clientHeight
      ) {
        setVisible(true);
      } else if (
        y < window.scrollY ||
        window.scrollY < popoutRef.current.clientHeight
      ) {
        setVisible(false);
      }
      setY(window.scrollY);
    },
    [y]
  );

  useEffect(() => {
    setY(window.scrollY);
    window.addEventListener("scroll", handleNavigation);
    return () => window.removeEventListener("scroll", handleNavigation);
  }, [handleNavigation]);

  return (
    <div
      ref={popoutRef}
      className={`fixed top-0 left-0 z-30 block w-full bg-white pt-[65px] transition-all duration-300 [box-shadow:0px_2px_4px_rgba(0,0,0,0.1)] lg:hidden
      ${visible ? "visible" : "-translate-y-full"}
      `}
    >
      <Container className="pb-2">
        <hr className="mb-2 border-action-active" />
        <h1 className="text-2xl font-bold leading-[30px] sm:text-[40px] sm:leading-[48px]">
          <span className="text-action-inactive">Blog</span>
          <br />
          <span className="text-highlight">{data.title}</span>
        </h1>
        <small className="my-2 block text-base font-light leading-[24px] text-tertiary sm:text-xl sm:leading-[30px]">
          {data.tagline}
        </small>
        {/* <div className="flex flex-col sm:flex-row sm:items-center">
          <ShareButtons
            title={data.title}
            className="mt-2 -translate-x-2 sm:mt-0 sm:ml-10 sm:translate-x-0"
          />
        </div> */}
        {data.category && (
          <div className="my-2">
            <CategoryBubble category={data.category} large />
          </div>
        )}
      </Container>
    </div>
  );
};

export default CurrentArticlePopout;
