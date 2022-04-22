import { useEffect, useRef, useState } from "react";
import ResearchPostCard from "@/components/Radar/RadarPostCard";
import { sortByDate } from "@/lib/helpers";
const RadarPosts: React.FC<{
  filteredArticles: any;
  category: string;
}> = ({ filteredArticles, category }) => {
  const [sortedArticles, setSortedArticles] = useState(filteredArticles);
  const [columns, setColumns] = useState(3);
  const postContainer = useRef<HTMLDivElement>(null);

  const handleCategoryChange = () => {
    // Animate category change
    postContainer.current.classList.add("opacity-0");
    setTimeout(() => {
      if (category !== "all") {
        setSortedArticles(
          filteredArticles.filter(
            (article: any) => article.category === category
          )
        );
      } else {
        setSortedArticles(filteredArticles);
      }
    }, 500);
    setTimeout(() => {
      postContainer.current.classList.remove("opacity-0");
    }, 600);
  };

  const handleResize = () => {
    const width = window.innerWidth;
    if (width >= 1024) {
      setColumns(3);
    }
    if (width < 1024) {
      setColumns(2);
    }
    if (width < 640) {
      setColumns(1);
    }
  };

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    setSortedArticles(filteredArticles.sort(sortByDate));
  }, [filteredArticles]);

  useEffect(() => {
    handleCategoryChange();
  }, [category]);

  return (
    <div
      ref={postContainer}
      id="post-container"
      className="mt-6 grid grid-cols-2 gap-x-4 transition-opacity duration-500 lg:grid-cols-3"
    >
      <div>
        {sortedArticles.map((article: any, i: number) => {
          if (i % 3 === 0 || i === 0) {
            return (
              <ResearchPostCard key={i} article={article} category={category} />
            );
          }
        })}
      </div>
      <div>
        {sortedArticles.map((article: any, i: number) => {
          if (i % 3 === 1 || i === 1) {
            return (
              <ResearchPostCard key={i} article={article} category={category} />
            );
          }
        })}
      </div>
      <div>
        {sortedArticles.map((article: any, i: number) => {
          if (i % 3 !== 1 && i !== 1 && i % 3 !== 0 && i !== 0) {
            return (
              <ResearchPostCard key={i} article={article} category={category} />
            );
          }
        })}
      </div>
    </div>
  );
};

export default RadarPosts;
