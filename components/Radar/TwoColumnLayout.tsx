import ResearchPostCard from "@/components/Radar/RadarPostCard";

const TwoColumnLayout: React.FC<{
  sortedArticles: any;
}> = ({ sortedArticles }) => {
  return (
    <>
      <div>
        {sortedArticles.map((article: any, i: number) => {
          if (i % 2 === 0 || i === 0) {
            return <ResearchPostCard key={i} article={article} />;
          }
        })}
      </div>
      <div>
        {sortedArticles.map((article: any, i: number) => {
          if (i % 2 === 1 || i === 1) {
            return <ResearchPostCard key={i} article={article} />;
          }
        })}
      </div>
    </>
  );
};

export default TwoColumnLayout;
