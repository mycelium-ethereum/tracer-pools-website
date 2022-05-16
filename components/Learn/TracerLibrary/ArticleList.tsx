import { useEffect, useState } from "react";
import FiveColumnLayout from "@components/Shared/Layouts/FiveColumnLayout";
import FourColumnLayout from "@components/Shared/Layouts/FourColumnLayout";
import ThreeColumnLayout from "@components/Shared/Layouts/ThreeColumnLayout";
import TwoColumnLayout from "@components/Shared/Layouts/TwoColumnLayout";
import OneColumnLayout from "@components/Shared/Layouts/OneColumnLayout";
import ArticleCard from "@components/Learn/ArticleCard";
import Button from "@components/Shared/Buttons/Button";
import ViewAllButton from "../ViewAllButton";

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
            filteredArticles.filter((article: any) =>
              article.tags.includes(category)
            )
          );
        } else {
          setSortedArticles(filteredArticles);
        }
        resetArticlesInView();
        postContainerRef.current.classList.remove("opacity-0");
      }, 300);
      setPrevCategory(category);
    }
  };

  const resetArticlesInView = () => {
    const amount = columns <= 2 ? 4 : columns * 2;
    setShowAll(false);
    setAmountToShow(amount);
  };

  const handleResize = () => {
    const width = window.innerWidth;
    if (width >= 2560) {
      setColumns(5);
      setAmountToShow(10);
    }
    if (width >= 1280 && width < 2560) {
      setColumns(4);
      setAmountToShow(8);
    }
    if (width >= 1024 && width < 1280) {
      setColumns(3);
      setAmountToShow(6);
    }
    if (width < 1024) {
      setColumns(2);
      setAmountToShow(4);
    }
    if (width < 640) {
      setColumns(1);
      setAmountToShow(4);
    }
  };

  const handleShowAll = () => {
    setShowAll(true);
  };

  const filterArticles = () => {
    const filtered = sortedArticles.slice(0, amountToShow);
    setArticlesInView(filtered);
  };

  useEffect(() => {
    setAmountToShow(sortedArticles.length);
  }, [showAll]);

  useEffect(() => {
    filterArticles();
  }, [sortedArticles, amountToShow]);

  useEffect(() => {
    if (!sorted) setSorted(true);
  }, [filteredArticles]);

  useEffect(() => {
    handleCategoryChange();
  }, [category]);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    let timeout = setTimeout(() => handleResize(), 700);
    filterArticles();
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
        sorted ? "transition-opacity duration-300" : ""
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
      {!showAll &&
        sortedArticles.length > columns * 2 &&
        sortedArticles.length > 4 && (
          <Button
            lightBlueGradient
            className="btn-full-width mt-8 grid-cols-1 gap-x-4 sm:col-start-2 sm:-translate-x-1/2 lg:col-start-2 lg:translate-x-0 xl:col-start-2 xl:translate-x-1/2 4xl:col-start-3 4xl:translate-x-0"
            onClickAction={handleShowAll}
          >
            Show All
          </Button>
        )}
    </div>
  );
};

export default ArticleList;
