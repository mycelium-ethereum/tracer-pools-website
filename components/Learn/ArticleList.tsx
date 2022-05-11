import { useEffect, useState } from "react";
import FiveColumnLayout from "@components/Shared/Layouts/FiveColumnLayout";
import FourColumnLayout from "@components/Shared/Layouts/FourColumnLayout";
import ThreeColumnLayout from "@components/Shared/Layouts/ThreeColumnLayout";
import TwoColumnLayout from "@components/Shared/Layouts/TwoColumnLayout";
import OneColumnLayout from "@components/Shared/Layouts/OneColumnLayout";
import ArticleCard from "@components/Learn/ArticleCard";
import Button from "@components/Shared/Button";

const ArticleList: React.FC<{
  filteredArticles: any;
  category: string;
  postContainerRef: React.MutableRefObject<HTMLDivElement>;
}> = ({ filteredArticles, category, postContainerRef }) => {
  const [columns, setColumns] = useState<number>(3);
  const [amountToShow, setAmountToShow] = useState<number>(columns * 2);
  const [showAll, setShowAll] = useState<boolean>(false);
  const [prevCategory, setPrevCategory] = useState<string>("all");
  const [sortedArticles, setSortedArticles] = useState(filteredArticles);
  const [articlesInView, setArticlesInView] = useState(sortedArticles);
  const [sorted, setSorted] = useState(false);

  const handleCategoryChange = () => {
    if (category !== prevCategory) {
      // Animate category change
      postContainerRef.current.classList.add("opacity-0");
      setTimeout(() => {
        if (category !== "All") {
          setSortedArticles(
            filteredArticles
              .filter((article: any) => article.tags.includes(category))
              .slice(0, amountToShow)
          );
        } else {
          setSortedArticles(filteredArticles);
        }
        resetArticlesInView();
        postContainerRef.current.classList.remove("opacity-0");
      }, 500);
      setPrevCategory(category);
    }
  };

  const resetArticlesInView = () => {
    setShowAll(false);
    setAmountToShow(columns * 2);
  };

  const handleResize = () => {
    const width = window.innerWidth;
    if (width >= 2560) {
      setColumns(5);
    }
    if (width >= 1280 && width < 2560) {
      setColumns(4);
    }
    if (width >= 1024 && width < 1280) {
      setColumns(3);
    }
    if (width < 1024) {
      setColumns(2);
    }
    if (width < 640) {
      setColumns(1);
    }
  };

  const handleShowAll = () => {
    setShowAll(true);
  };

  const limitArticlesInView = () => {
    showAll
      ? setAmountToShow(filteredArticles.length)
      : setAmountToShow(columns * 2);
  };

  useEffect(() => {
    setSorted(true);
  }, [filteredArticles]);

  //   If show all true, show all articles
  //   else show double the current column amount
  useEffect(() => {
    limitArticlesInView();
  }, [showAll, category, columns]);

  useEffect(() => {
    handleCategoryChange();
  }, [category]);

  useEffect(() => {
    const slicedArticles = sortedArticles.slice(0, amountToShow);
    setArticlesInView(slicedArticles);
  }, [sortedArticles, amountToShow]);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    let timeout = setTimeout(() => handleResize(), 700);
    return () => {
      clearTimeout(timeout);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div
      ref={postContainerRef}
      id="post-container"
      className={`grid grid-cols-1 gap-x-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 4xl:grid-cols-5 ${
        sorted ? "transition-opacity duration-500" : ""
      }`}
    >
      {sorted &&
        {
          5: (
            <FiveColumnLayout
              articles={articlesInView}
              ArticleComponent={ArticleCard}
            />
          ),
          4: (
            <FourColumnLayout
              articles={articlesInView}
              ArticleComponent={ArticleCard}
            />
          ),
          3: (
            <ThreeColumnLayout
              articles={articlesInView}
              ArticleComponent={ArticleCard}
            />
          ),
          2: (
            <TwoColumnLayout
              articles={articlesInView}
              ArticleComponent={ArticleCard}
            />
          ),
          1: (
            <OneColumnLayout
              articles={articlesInView}
              ArticleComponent={ArticleCard}
            />
          ),
        }[columns]}
      <div className="col-span-full">
        {!showAll && sortedArticles.length > 8 && (
          <Button lightBlueGradient action={handleShowAll} className="mx-auto">
            Show All
          </Button>
        )}
      </div>
    </div>
  );
};

export default ArticleList;
