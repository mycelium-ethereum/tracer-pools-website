import CategoryBubble from "@components/Shared/CategoryBubble";
import PageLink from "@components/Shared/PageLink";

const ArticleCard: React.FC<{
  article: {
    title: string;
    description: string;
    tags: string | string[];
    link: string;
  };
}> = ({ article }) => {
  return (
    <PageLink href={article.link} newTab={article.link.includes("/documents")}>
      <article className="mb-4 w-full rounded-lg bg-white p-4 transition-all duration-300 [box-shadow:_0px_2px_4px_rgba(0,0,0,0.1)] hover:bg-action-cell hover:[box-shadow:_0px_2px_4px_rgba(0,0,0,0.2)]">
        <h3 className="mb-1 text-xl font-bold leading-[30px] text-action-active">
          {article.title}
        </h3>
        <p className="mb-4 text-sm leading-[20px] text-tertiary">
          {article.description}
        </p>
        {article.tags.length > 1 ? (
          <div className="flex">
            {(article.tags as string[]).map((tag) => (
              <CategoryBubble
                key={tag}
                category={tag}
                className="mr-2 bg-action-cell text-action-active"
              />
            ))}
          </div>
        ) : (
          <CategoryBubble category={article.tags[0]} />
        )}
      </article>
    </PageLink>
  );
};

export default ArticleCard;
