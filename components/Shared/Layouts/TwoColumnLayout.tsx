const TwoColumnLayout: React.FC<{
  articles: any;
  ArticleComponent: React.FC<{
    article?: any;
  }>;
}> = ({ articles, ArticleComponent }) => {
  return (
    <>
      <div className="w-full">
        {articles.map((article: any, i: number) => {
          if (i % 2 === 0 || i === 0) {
            return <ArticleComponent key={i} article={article} />;
          }
        })}
      </div>
      <div className="w-full">
        {articles.map((article: any, i: number) => {
          if (i % 2 === 1 || i === 1) {
            return <ArticleComponent key={i} article={article} />;
          }
        })}
      </div>
    </>
  );
};

export default TwoColumnLayout;
