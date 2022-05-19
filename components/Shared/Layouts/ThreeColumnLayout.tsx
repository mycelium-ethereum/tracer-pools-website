const ThreeColumnLayout: React.FC<{
  articles: any;
  ArticleComponent: React.FC<{
    article: any;
  }>;
}> = ({ articles, ArticleComponent }) => {
  return (
    <>
      <div>
        {articles.map((article: any, i: number) => {
          if (i % 3 === 0 || i === 0) {
            return <ArticleComponent key={i} article={article} />;
          }
        })}
      </div>
      <div>
        {articles.map((article: any, i: number) => {
          if (i % 3 === 1 || i === 1) {
            return <ArticleComponent key={i} article={article} />;
          }
        })}
      </div>
      <div>
        {articles.map((article: any, i: number) => {
          if (i % 3 !== 1 && i !== 1 && i % 3 !== 0 && i !== 0) {
            return <ArticleComponent key={i} article={article} />;
          }
        })}
      </div>
    </>
  );
};

export default ThreeColumnLayout;
