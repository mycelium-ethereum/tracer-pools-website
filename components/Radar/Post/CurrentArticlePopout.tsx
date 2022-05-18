import Moment from "react-moment";
import CategoryBubble from "@components/Shared/CategoryBubble";
import ShareButtons from "@components/Radar/Post/ShareButtons";
import Container from "@components/Shared/Container";
import { useCallback, useEffect, useRef, useState } from "react";
import RelatedArticles from "../Sidebar/RelatedArticles";
import ScrollTopButton from "./ScrollTopButton";
import ShowRelatedButton from "./ShowRelatedButton";

const CurrentArticlePopout: React.FC<{
  data: any;
  articles: any;
}> = ({ data, articles }) => {
  const [showRelated, setShowRelated] = useState(false);
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

  const handleClick = () => {
    setShowRelated(!showRelated);
  };

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
      <Container className="pb-5">
        <hr className="mb-2 border-action-active" />
        <h1 className="text-2xl font-bold leading-[30px] sm:text-[40px] sm:leading-[48px]">
          <span className="text-action-inactive">Blog</span>
          <br />
          <span className="text-highlight">{data.title}</span>
        </h1>
        <small className="my-2 block text-base font-light leading-[24px] text-tertiary sm:text-xl sm:leading-[30px]">
          {data.tagline}
        </small>
        {data.category && (
          <div className="my-2">
            <CategoryBubble category={data.category} large />
          </div>
        )}
        <div className="flex justify-between">
          <ShowRelatedButton
            showRelated={showRelated}
            handleClick={handleClick}
          />
          <ScrollTopButton />
        </div>
        <div
          className={`overflow-hidden transition-all duration-300 ${
            showRelated ? "max-h-[155px] opacity-100" : "max-h-0 opacity-0"
          } `}
        >
          <RelatedArticles currentArticle={data} articles={articles} />
        </div>
      </Container>
    </div>
  );
};

export default CurrentArticlePopout;
