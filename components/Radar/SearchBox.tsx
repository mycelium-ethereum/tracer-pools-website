import { sortByDate } from "@/lib/helpers";
import { useEffect, useState } from "react";

const SearchBox: React.FC<{
  articles: any;
  setFilteredArticles: React.Dispatch<any>;
}> = ({ articles, setFilteredArticles }) => {
  const [query, setQuery] = useState<string>("");
  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const filterArticles = () => {
    const updatedFilteredArticles = articles.filter((article: any) => {
      return (
        article.title.toLowerCase().includes(query.toLowerCase()) ||
        article.description.toLowerCase().includes(query.toLowerCase())
      );
    });
    setFilteredArticles(updatedFilteredArticles);
  };

  useEffect(() => {
    filterArticles();
  }, [query]);

  return (
    <div className="relative h-10 w-[404px] rounded-lg border-2 border-action-active text-action-active">
      <input
        type="text"
        className="flex h-full items-center bg-transparent pl-9"
        placeholder="Search"
        value={query}
        onChange={handleChange}
      />
      <img
        src="/img/icons/search.svg"
        className="absolute left-4 top-1/2 h-[13px] w-[13px] -translate-y-1/2 transform"
      />
    </div>
  );
};

export default SearchBox;
