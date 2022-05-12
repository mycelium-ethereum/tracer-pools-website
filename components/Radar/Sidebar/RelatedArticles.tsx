import Button from "@components/Shared/Buttons/Button";
import GradientLine from "@components/Shared/GradientLine";
import PageLink from "@components/Shared/PageLink";
import { sortByDate } from "@lib/helpers";

const RelatedArticles: React.FC<{
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

  const ArticleLink: React.FC<{ article: any }> = ({ article }) => (
    <span className="group my-2 block">
      <PageLink href={`/radar/${article.slug}`}>
        <span className="mb-2 block font-bold leading-[24px] text-action-active transition-colors duration-300 group-hover:text-tracer-primaryblue">
          {article.title}
        </span>
      </PageLink>
      <GradientLine color="grey" />
    </span>
  );

  return (
    <div className="p-4">
      <span className="mb-2 block text-xs tracking-[0.15em] text-tertiary">
        RELATED ARTICLES
      </span>
      <GradientLine color="grey" />
      {getRelatedArticles()
        .slice(0, 2)
        .map((article: any, i: number) => (
          <ArticleLink key={i} article={article} />
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
  );
};

export default RelatedArticles;
