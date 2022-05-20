import { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import RadarPostCard from "@components/Radar/RadarPostCard";
import FiveColumnLayout from "@components/Shared/Layouts/FiveColumnLayout";
import FourColumnLayout from "@components/Shared/Layouts/FourColumnLayout";
import ThreeColumnLayout from "@components/Shared/Layouts/ThreeColumnLayout";
import TwoColumnLayout from "@components/Shared/Layouts/TwoColumnLayout";
import OneColumnLayout from "@components/Shared/Layouts/OneColumnLayout";
import { sortByDate } from "@lib/helpers";
import { articles } from "@components/Learn/presets";

const RadarPosts: React.FC<{
  filteredArticles: any;
  category: string;
  postContainerRef: React.MutableRefObject<HTMLDivElement>;
}> = ({ filteredArticles, category, postContainerRef }) => {
  const [initialPostCount, setInitialPostCount] = useState(9);
  const [increment, setIncrement] = useState(initialPostCount);
  const [hasMore, setHasMore] = useState(true);
  const [index, setIndex] = useState(initialPostCount);
  const [articlesInView, setArticlesInView] = useState([]);
  const [prevCategory, setPrevCategory] = useState<string>("all");
  const [sortedArticles, setSortedArticles] = useState(filteredArticles);
  const [sorted, setSorted] = useState(false);
  const [columns, setColumns] = useState(3);
  const handleCategoryChange = () => {
    // Reset index after each category change
    setIndex(initialPostCount);
    setHasMore(true);
    if (category !== prevCategory) {
      // Animate category change
      postContainerRef?.current?.classList.add("opacity-0");
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
        postContainerRef?.current?.classList.remove("opacity-0");
      }, 700);
      setPrevCategory(category);
    } else {
      setArticlesInView(sortedArticles.slice(0, index));
    }
  };

  const fetchMoreData = () => {
    let newIndex = index + increment;
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
    if (width >= 2560) {
      setColumns(5);
      setInitialPostCount(10);
    }
    if (width >= 1920 && width < 2560) {
      setColumns(4);
      setInitialPostCount(8);
    }
    if (width >= 1024 && width < 1920) {
      setColumns(3);
      setInitialPostCount(9);
    }
    if (width < 1024) {
      setColumns(2);
      setIncrement(6);
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
    setIncrement(initialPostCount);
    setIndex(initialPostCount);
    setHasMore(true);
  }, [columns]);

  useEffect(() => {
    setSortedArticles(filteredArticles.sort(sortByDate));
    setSorted(true);
  }, [filteredArticles]);

  useEffect(() => {
    setArticlesInView(sortedArticles.slice(0, index));
  }, [index, sortedArticles, columns]);

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
          <span className="col-span-1 mt-4 block w-full text-center text-tertiary sm:col-span-2 lg:col-span-3 3xl:col-span-4 4xl:col-span-5">
            {`Showing ${articlesInView.length} of ${sortedArticles.length} posts`}
          </span>
        }
        endMessage={
          <span className="col-span-1 mt-4 block w-full text-center text-tertiary sm:col-span-2 lg:col-span-3 3xl:col-span-4 4xl:col-span-5">
            {`Showing ${sortedArticles.length} of ${sortedArticles.length} posts`}
          </span>
        }
        className={`mt-6 grid grid-cols-1 gap-x-4 sm:grid-cols-2 lg:grid-cols-3 3xl:grid-cols-4 4xl:grid-cols-5`}
      >
        {sorted &&
          {
            5: (
              <FiveColumnLayout
                articles={articlesInView}
                ArticleComponent={RadarPostCard}
              />
            ),
            4: (
              <FourColumnLayout
                articles={articlesInView}
                ArticleComponent={RadarPostCard}
              />
            ),
            3: (
              <ThreeColumnLayout
                articles={articlesInView}
                ArticleComponent={RadarPostCard}
              />
            ),
            2: (
              <TwoColumnLayout
                articles={articlesInView}
                ArticleComponent={RadarPostCard}
              />
            ),
            1: (
              <OneColumnLayout
                articles={articlesInView}
                ArticleComponent={RadarPostCard}
              />
            ),
          }[columns]}
      </InfiniteScroll>
    </div>
  );
};

export default RadarPosts;
