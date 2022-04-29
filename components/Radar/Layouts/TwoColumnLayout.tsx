import RadarPostCard from "@/components/Radar/RadarPostCard";

const TwoColumnLayout: React.FC<{
  articles: any;
}> = ({ articles }) => {
  return (
    <>
      <div className="w-full">
        {articles.map((article: any, i: number) => {
          if (i % 2 === 0 || i === 0) {
            return <RadarPostCard key={i} article={article} />;
          }
        })}
      </div>
      <div className="w-full">
        {articles.map((article: any, i: number) => {
          if (i % 2 === 1 || i === 1) {
            return <RadarPostCard key={i} article={article} />;
          }
        })}
      </div>
    </>
  );
};

export default TwoColumnLayout;
