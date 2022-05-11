import { useEffect, useState } from "react";
import Moment from "react-moment";
import CategoryBubble from "@components/Shared/CategoryBubble";
import Button from "@components/Shared/Button";
import GradientLine from "@components/Shared/GradientLine";
import PageLink from "@components/Shared/PageLink";
import { isMobile, sortByDate } from "@lib/helpers";

const Sidebar: React.FC<{
  currentArticle: any;
  articles: any;
  bodyTextRef: React.MutableRefObject<HTMLDivElement>;
}> = ({ currentArticle, articles, bodyTextRef }) => {
  const [visible, setVisible] = useState<boolean>(false);
  const getRelatedArticles = () => {
    const relatedArticles = articles
      .sort(sortByDate)
      .filter(
        (article) =>
          article.category === currentArticle.category &&
          article.slug !== currentArticle.slug
      );
    return relatedArticles;
  };

  const handleScroll = () => {
    const blogContentEl = bodyTextRef.current as HTMLDivElement;
    const footerEl = document.querySelector("footer") as HTMLDivElement;
    const bodyHeight = document.body.scrollHeight;
    const bottomOffset = bodyHeight - footerEl.clientHeight * 2.5;

    // Show the sidebar if the user has scrolled past the blog content,
    // but hide if close to bottom (2.5x footer height)
    if (
      blogContentEl &&
      window.scrollY >= blogContentEl.offsetTop &&
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
      <picture>
        <img
          src={currentArticle.image[0].formats.small.url}
          alt={currentArticle.title + "banner"}
          className="h-[155px] w-full object-cover"
        />
      </picture>
      <div className="p-4">
        <Moment format="Do MMMM, YYYY" className="text-[10px] text-highlight">
          {currentArticle.publish_date}
        </Moment>
        <h2 className="my-1 text-xl font-bold leading-[120%] text-action-active">
          {currentArticle.title}
        </h2>
        <small className="post-description overflow-hidden text-sm leading-[20px] text-tertiary">
          {currentArticle.tagline}
        </small>
        {currentArticle.category && (
          <CategoryBubble category={currentArticle.category} />
        )}
      </div>
      <div className="p-4">
        <span className="mb-2 block text-xs tracking-[0.15em] text-tertiary">
          RELATED ARTICLES
        </span>
        <GradientLine color="grey" />
        {getRelatedArticles()
          .slice(0, 2)
          .map((article, i) => (
            <>
              <PageLink href={`/radar/${article.slug}`}>
                <h4 className="my-2 font-bold leading-[24px] text-action-active">
                  {article.title}
                </h4>
              </PageLink>
              {i === 0 && <GradientLine color="grey" />}
            </>
          ))}
        <Button
          lightBlueGradient
          link="/radar"
          className="mt-4"
          linkClassName="text-action-active"
        >
          All Articles
        </Button>
      </div>
    </aside>
  );
};

export default Sidebar;
