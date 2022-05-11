const FiveColumnLayout: React.FC<{
  articles: any;
  ArticleComponent: React.FC<{
    article: any;
    className?: string;
  }>;
}> = ({ articles, ArticleComponent }) => {
  return (
    <>
      <div>
        {articles.map(
          (article: any, i: number) =>
            (i % 5 === 0 || i === 0) && (
              <ArticleComponent key={i} article={article} />
            )
        )}
      </div>
      <div>
        {articles.map(
          (article: any, i: number) =>
            (i % 5 === 1 || i === 1) && (
              <ArticleComponent key={i} article={article} />
            )
        )}
      </div>
      <div>
        {articles.map(
          (article: any, i: number) =>
            (i % 5 === 2 || i === 2) && (
              <ArticleComponent key={i} article={article} />
            )
        )}
      </div>
      <div>
        {articles.map(
          (article: any, i: number) =>
            (i === 8 || i % 10 === 8 || i % 10 === 3) && (
              <ArticleComponent key={i} article={article} />
            )
        )}
      </div>
      <div>
        {articles.map(
          (article: any, i: number) =>
            i % 5 !== 0 &&
            i !== 0 &&
            i % 5 !== 1 &&
            i !== 1 &&
            i % 5 !== 2 &&
            i !== 2 &&
            i % 10 !== 3 &&
            i % 10 !== 8 &&
            i !== 8 && <ArticleComponent key={i} article={article} />
        )}
      </div>
    </>
  );
};

export default FiveColumnLayout;
