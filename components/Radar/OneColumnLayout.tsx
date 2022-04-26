import ResearchPostCard from "@/components/Radar/RadarPostCard";

const OneColumnLayout: React.FC<{
  sortedArticles: any;
}> = ({ sortedArticles }) => {
  return (
    <>
      <div>
        {sortedArticles.map((article: any, i: number) => {
          return <ResearchPostCard key={i} article={article} />;
        })}
      </div>
    </>
  );
};

export default OneColumnLayout;
