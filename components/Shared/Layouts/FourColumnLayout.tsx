const FourColumnLayout: React.FC<{
  articles: any;
  ArticleComponent: React.FC<{
    article?: any;
  }>;
}> = ({ articles, ArticleComponent }) => {
  return (
    <>
      <div>
        {articles.map(
          (article: any, i: number) =>
            (i % 4 === 0 || i === 0) && (
              <ArticleComponent key={i} article={article} />
            )
        )}
      </div>
      <div>
        {articles.map(
          (article: any, i: number) =>
            (i % 4 === 1 || i === 1) &&
            i !== 0 && <ArticleComponent key={i} article={article} />
        )}
      </div>
      <div>
        {articles.map(
          (article: any, i: number) =>
            (i % 4 === 2 || i === 2) && (
              <ArticleComponent key={i} article={article} />
            )
        )}
      </div>
      <div>
        {articles.map(
          (article: any, i: number) =>
            i % 4 !== 0 &&
            i !== 0 &&
            i % 4 !== 1 &&
            i !== 1 &&
            i % 4 !== 2 &&
            i !== 2 && <ArticleComponent key={i} article={article} />
        )}
      </div>
    </>
  );
};

export default FourColumnLayout;
