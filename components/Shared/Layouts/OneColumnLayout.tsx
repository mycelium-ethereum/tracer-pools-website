const OneColumnLayout: React.FC<{
  articles: any;
  ArticleComponent: React.FC<{
    article: any;
  }>;
}> = ({ articles, ArticleComponent }) => {
  return (
    <>
      <div className="w-full">
        {articles.map((article: any, i: number) => {
          return <ArticleComponent key={i} article={article} />;
        })}
      </div>
    </>
  );
};

export default OneColumnLayout;
