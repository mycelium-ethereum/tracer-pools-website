import RadarPostCard from "@/components/Radar/RadarPostCard";

const OneColumnLayout: React.FC<{
  articles: any;
}> = ({ articles }) => {
  return (
    <>
      <div className="w-full">
        {articles.map((article: any, i: number) => {
          return <RadarPostCard key={i} article={article} />;
        })}
      </div>
    </>
  );
};

export default OneColumnLayout;
