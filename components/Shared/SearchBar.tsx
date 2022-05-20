import { useEffect, useState } from "react";

const SearchBar: React.FC<{
  articles: any;
  setFilteredArticles: React.Dispatch<any>;
  postContainerRef: React.MutableRefObject<HTMLDivElement>;
}> = ({ articles, setFilteredArticles, postContainerRef }) => {
  const [query, setQuery] = useState<string>("");

  const handleChange = (event) => {
    setQuery(event.target.value);
  };

  const filterArticles = () => {
    const updatedFilteredArticles = articles.filter((article: any) => {
      return (
        article.title.toLowerCase().includes(query.toLowerCase()) ||
        article.description.toLowerCase().includes(query.toLowerCase())
      );
    });
    postContainerRef.current.classList.add("opacity-0");
    setTimeout(() => {
      setFilteredArticles(updatedFilteredArticles);
    }, 500);
    setTimeout(() => {
      postContainerRef.current.classList.remove("opacity-0");
    }, 800);
  };

  useEffect(() => {
    filterArticles();
  }, [query]);

  return (
    <div className="relative mb-4 h-10 w-full max-w-[404px] rounded-lg border-2 border-action-active text-action-active sm:ml-2 sm:mb-0 lg:w-[404px]">
      <input
        type="text"
        className="flex h-full w-full items-center bg-transparent pl-9"
        placeholder="Search"
        onChange={handleChange}
      />
      <img
        src="/img/icons/search.svg"
        className="absolute left-4 top-1/2 h-[13px] w-[13px] -translate-y-1/2 transform"
      />
    </div>
  );
};

export default SearchBar;
