import { useEffect, useState } from "react";
import { sortByDate } from "@/lib/helpers";
import ThreeColumnLayout from "./ThreeColumnLayout";
import TwoColumnLayout from "./TwoColumnLayout";

const RadarPosts: React.FC<{
  filteredArticles: any;
  category: string;
  postContainerRef: React.MutableRefObject<HTMLDivElement>;
}> = ({ filteredArticles, category, postContainerRef }) => {
  const [prevCategory, setPrevCategory] = useState<string>("all");
  const [sortedArticles, setSortedArticles] = useState(filteredArticles);
  const [sorted, setSorted] = useState(false);
  const [columns, setColumns] = useState(3);

  const handleCategoryChange = () => {
    if (category !== prevCategory) {
      // Animate category change
      postContainerRef.current.classList.add("opacity-0");
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
        postContainerRef.current.classList.remove("opacity-0");
      }, 700);
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

  // const fadeInPostContainer = () => {
  //   postContainerRef.current.classList.add("opacity-0");
  //   setTimeout(() => {
  //     postContainerRef.current.classList.remove("opacity-0");
  //   }, 500);
  // };

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [handleResize]);

  useEffect(() => {
    setSortedArticles(filteredArticles.sort(sortByDate));
    setSorted(true);
  }, [filteredArticles]);

  useEffect(() => {
    handleCategoryChange();
  }, [category]);

  // useEffect(() => {
  //   fadeInPostContainer();
  // }, []);

  return (
    <div
      ref={postContainerRef}
      id="post-container"
      hidden
      className={`mt-6 grid grid-cols-1 gap-x-4 sm:grid-cols-2 lg:grid-cols-3 ${
        sorted ? "transition-opacity duration-500" : ""
      }`}
    >
      {sorted &&
        {
          3: <ThreeColumnLayout sortedArticles={sortedArticles} />,
          2: <TwoColumnLayout sortedArticles={sortedArticles} />,
          1: <TwoColumnLayout sortedArticles={sortedArticles} />,
        }[columns]}
    </div>
  );
};

export default RadarPosts;
