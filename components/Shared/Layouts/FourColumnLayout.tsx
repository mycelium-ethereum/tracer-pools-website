const FourColumnLayout: React.FC<{
  items: any;
  Component: React.FC<{
    item?: any;
  }>;
}> = ({ items, Component }) => {
  return (
    <>
      <div>
        {articles.map(
          (article: any, i: number) =>
            (i % 4 === 0 || i === 0) && <ArticleComponent key={i} item={item} />
        )}
      </div>
      <div>
        {articles.map(
          (article: any, i: number) =>
            (i % 4 === 1 || i === 1) &&
            i !== 0 && <ArticleComponent key={i} item={item} />
        )}
      </div>
      <div>
        {articles.map(
          (article: any, i: number) =>
            (i % 4 === 2 || i === 2) && <ArticleComponent key={i} item={item} />
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
            i !== 2 && <ArticleComponent key={i} item={item} />
        )}
      </div>
    </>
  );
};

export default FourColumnLayout;
