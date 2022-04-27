import { useEffect, useState } from "react";
import { sortByDate } from "@/lib/helpers";
import ThreeColumnLayout from "@/components/Radar/ThreeColumnLayout";
import TwoColumnLayout from "@/components/Radar/TwoColumnLayout";
import InfiniteScroll from "react-infinite-scroll-component";
import OneColumnLayout from "@/components/Radar/OneColumnLayout";

const RadarPosts: React.FC<{
  filteredArticles: any;
  category: string;
  postContainerRef: React.MutableRefObject<HTMLDivElement>;
}> = ({ filteredArticles, category, postContainerRef }) => {
  const [hasMore, setHasMore] = useState(true);
  const [index, setIndex] = useState(9);
  const [articlesInView, setArticlesInView] = useState([]);
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
        setArticlesInView(sortedArticles.slice(0, index));
      }, 500);
      setTimeout(() => {
        postContainerRef.current.classList.remove("opacity-0");
      }, 700);
      setPrevCategory(category);
    }
  };

  const fetchMoreData = () => {
    let newIndex = index + 6;
    if (newIndex >= sortedArticles.length) {
      setHasMore(false);
      setArticlesInView(sortedArticles.slice(0, sortedArticles.length));
      return;
    }
    setTimeout(() => {
      setArticlesInView(sortedArticles.slice(0, newIndex));
      setIndex(newIndex);
    }, 1000);
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
    setSorted(true);
  }, [filteredArticles]);

  useEffect(() => {
    handleCategoryChange();
  }, [category]);

  return (
    <div
      ref={postContainerRef}
      id="post-container"
      className={`${sorted ? "transition-opacity duration-500" : ""}`}
    >
      <InfiniteScroll
        dataLength={articlesInView.length}
        next={fetchMoreData}
        hasMore={hasMore}
        loader={
          <span className="col-span-1 block w-full text-center text-tertiary sm:col-span-2 lg:col-span-3">
            {`Showing ${index} of ${sortedArticles.length} posts`}
          </span>
        }
        endMessage={
          <span className="col-span-1 block w-full text-center text-tertiary sm:col-span-2 lg:col-span-3">
            {`Showing ${sortedArticles.length} of ${sortedArticles.length} posts`}
          </span>
        }
        className={`mt-6 grid grid-cols-1 gap-x-4 sm:grid-cols-2 lg:grid-cols-3`}
      >
        {sorted &&
          {
            3: <ThreeColumnLayout articles={articlesInView} />,
            2: <TwoColumnLayout articles={articlesInView} />,
            1: <OneColumnLayout articles={articlesInView} />,
          }[columns]}
      </InfiniteScroll>
    </div>
  );
};

export default RadarPosts;
