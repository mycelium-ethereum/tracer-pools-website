import RadarPostCard from "@/components/Radar/RadarPostCard";

const FiveColumnLayout: React.FC<{
  articles: any;
}> = ({ articles }) => {
  return (
    <>
      <div>
        {articles.map(
          (article: any, i: number) =>
            (i % 5 === 0 || i === 0) && (
              <RadarPostCard key={i} article={article} />
            )
        )}
      </div>
      <div>
        {articles.map(
          (article: any, i: number) =>
            (i % 5 === 1 || i === 1) && (
              <RadarPostCard key={i} article={article} />
            )
        )}
      </div>
      <div>
        {articles.map(
          (article: any, i: number) =>
            (i % 5 === 2 || i === 2) && (
              <RadarPostCard key={i} article={article} />
            )
        )}
      </div>
      <div>
        {articles.map(
          (article: any, i: number) =>
            (i === 8 || i % 10 === 8 || i % 10 === 3) && (
              <RadarPostCard key={i} article={article} />
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
            i !== 8 && <RadarPostCard key={i} article={article} />
        )}
      </div>
    </>
  );
};

export default FiveColumnLayout;
