import React, { useEffect, useRef } from "react";
import marked from "marked";
import DOMPurify from "dompurify";
import Moment from "react-moment";
import { Link } from "gatsby";

const SearchResult = ({ data, className }) => {
  const truncate = (str) => {
    const maxLength = 120;
    return str.length > maxLength ? str.substring(0, maxLength) + "..." : str;
  };
  const postDescription = useRef();
  useEffect(() => {
    const bodyTextHTML = marked(DOMPurify.sanitize(data.node.description));
    postDescription.current.innerHTML = bodyTextHTML;
    postDescription.current.innerText = truncate(
      postDescription.current.innerText
    );
  }, [data.node.description]);
  return (
    <>
      <Link
        to={`/radar/` + data.node.slug}
        className="search-result relative flex h-auto transition-all duration-700 hover:shadow-2xl cursor-pointer"
      >
        <div className="post-image overflow-hidden">
          <img
            className="h-full w-full object-cover object-top"
            src={data.node.image[0].formats.medium.url}
            alt="Post Header"
          />
        </div>
        {/* Set height is temporary */}
        <div className="flex-grow pl-11 pr-4 py-4 rounded-bl-xl rounded-br-xl flex flex-col transition-all duration-500 bg-white">
          <p className="font-semibold text-2xl mb-6">
            <b>{data.node.title}</b>
          </p>
          <p
            ref={postDescription}
            className="post-text color-paginationrulegrey mb-6"
          ></p>
          <Moment
            className="font-semibold color-blue block text-sm"
            format="Do MMMM, YYYY"
          >
            {data.node.publish_date}
          </Moment>
        </div>
      </Link>
      <hr className="my-8" />
    </>
  );
};

export default SearchResult;
