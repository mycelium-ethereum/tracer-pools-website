import React, { useRef } from "react";
import Moment from "react-moment";
import MarkdownContent from "./markdown-content";
import { Link } from "gatsby";

const SearchResult = ({ data, className }) => {
  const truncate = (str) => {
    const maxLength = 120;
    return str.length > maxLength ? str.substring(0, maxLength) + "..." : str;
  };
  const postDescription = useRef();

  return (
    <>
      <Link
        to={`/radar/` + data.node.slug}
        className="search-result relative h-fit cursor-pointer rounded-bl-xl rounded-br-xl shadow-lg transition-all duration-700 hover:shadow-2xl md:flex md:rounded-none md:shadow-none"
      >
        <div className="post-image h-52 overflow-hidden rounded-tl-xl rounded-tr-xl md:h-auto md:rounded-none">
          <img
            className="h-full w-full object-cover object-top"
            src={data.node.image[0].formats.medium.url}
            alt="Post Header"
          />
        </div>
        <div className="flex flex-col rounded-bl-xl rounded-br-xl bg-white px-4 py-4 transition-all duration-500 sm:h-80 md:h-auto md:flex-grow md:pl-11 md:pr-4">
          <p className="mb-6 text-2xl font-semibold">
            <b>{data.node.title}</b>
          </p>
          <p
            ref={postDescription}
            className="post-text mb-6 text-black md:text-gray-400"
          >
            {data.node.description && (
              <MarkdownContent children={truncate(data.node.description)} />
            )}
          </p>
          <Moment
            className="color-blue block text-sm font-semibold"
            format="Do MMMM, YYYY"
          >
            {data.node.publish_date}
          </Moment>
        </div>
      </Link>
      <hr className="my-8 hidden md:block" />
    </>
  );
};

export default SearchResult;
