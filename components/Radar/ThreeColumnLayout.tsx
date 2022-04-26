import ResearchPostCard from "@/components/Radar/RadarPostCard";

const ThreeColumnLayout: React.FC<{
  sortedArticles: any;
}> = ({ sortedArticles }) => {
  return (
    <>
      <div>
        {sortedArticles.map((article: any, i: number) => {
          if (i % 3 === 0 || i === 0) {
            return <ResearchPostCard key={i} article={article} />;
          }
        })}
      </div>
      <div>
        {sortedArticles.map((article: any, i: number) => {
          if (i % 3 === 1 || i === 1) {
            return <ResearchPostCard key={i} article={article} />;
          }
        })}
      </div>
      <div>
        {sortedArticles.map((article: any, i: number) => {
          if (i % 3 !== 1 && i !== 1 && i % 3 !== 0 && i !== 0) {
            return <ResearchPostCard key={i} article={article} />;
          }
        })}
      </div>
    </>
  );
};

export default ThreeColumnLayout;
