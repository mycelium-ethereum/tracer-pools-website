import { useEffect, useRef, useState } from "react";
import ResearchPostCard from "@/components/Radar/RadarPostCard";
import { sortByDate } from "@/lib/helpers";
import ThreeColumnLayout from "./ThreeColumnLayout";
import TwoColumnLayout from "./TwoColumnLayout";

const RadarPosts: React.FC<{
  filteredArticles: any;
  category: string;
}> = ({ filteredArticles, category }) => {
  const [prevCategory, setPrevCategory] = useState<string>("all");
  const [sortedArticles, setSortedArticles] = useState(filteredArticles);
  const [columns, setColumns] = useState(3);
  const postContainer = useRef<HTMLDivElement>(null);

  const handleCategoryChange = () => {
    if (category !== prevCategory) {
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
      setPrevCategory(category);
    }
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
  }, [handleResize]);

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
      className="mt-6 grid grid-cols-1 gap-x-4 transition-opacity duration-500 sm:grid-cols-2 lg:grid-cols-3"
    >
      {
        {
          3: <ThreeColumnLayout sortedArticles={sortedArticles} />,
          2: <TwoColumnLayout sortedArticles={sortedArticles} />,
          1: <TwoColumnLayout sortedArticles={sortedArticles} />,
        }[columns]
      }
    </div>
  );
};

export default RadarPosts;
