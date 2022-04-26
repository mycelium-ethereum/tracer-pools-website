import { useEffect, useMemo, useState } from "react";
import debounce from "lodash.debounce";

const SearchBox: React.FC<{
  articles: any;
  setFilteredArticles: React.Dispatch<any>;
  postContainerRef: React.MutableRefObject<HTMLDivElement>;
}> = ({ articles, setFilteredArticles, postContainerRef }) => {
  const [query, setQuery] = useState<string>("");

  const handleChange = (event) => {
    setQuery(event.target.value);
  };

  const debouncedChangeHandler = useMemo(() => debounce(handleChange, 300), []);

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
    <div className="relative h-10 w-[404px] rounded-lg border-2 border-action-active text-action-active">
      <input
        type="text"
        className="flex h-full w-full items-center bg-transparent pl-9"
        placeholder="Search"
        onChange={debouncedChangeHandler}
      />
      <img
        src="/img/icons/search.svg"
        className="absolute left-4 top-1/2 h-[13px] w-[13px] -translate-y-1/2 transform"
      />
    </div>
  );
};

export default SearchBox;
