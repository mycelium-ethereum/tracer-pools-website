import Moment from "react-moment";
import CategoryBubble from "@/components/Radar/CategoryBubble";
import Button from "@/components/Shared/Button";
import GradientLine from "@/components/Shared/GradientLine";
import PageLink from "@/components/Shared/PageLink";
import { sortByDate } from "@/lib/helpers";

const PostSidebarContent: React.FC<{
  currentArticle: any;
  articles: any;
}> = ({ currentArticle, articles }) => {
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

  return (
    <>
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
    </>
  );
};

export default PostSidebarContent;
