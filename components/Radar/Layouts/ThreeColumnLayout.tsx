import RadarPostCard from "@/components/Radar/RadarPostCard";

const ThreeColumnLayout: React.FC<{
  articles: any;
}> = ({ articles }) => {
  return (
    <>
      <div>
        {articles.map((article: any, i: number) => {
          if (i % 3 === 0 || i === 0) {
            return <RadarPostCard key={i} article={article} />;
          }
        })}
      </div>
      <div>
        {articles.map((article: any, i: number) => {
          if (i % 3 === 1 || i === 1) {
            return <RadarPostCard key={i} article={article} />;
          }
        })}
      </div>
      <div>
        {articles.map((article: any, i: number) => {
          if (i % 3 !== 1 && i !== 1 && i % 3 !== 0 && i !== 0) {
            return <RadarPostCard key={i} article={article} />;
          }
        })}
      </div>
    </>
  );
};

export default ThreeColumnLayout;
