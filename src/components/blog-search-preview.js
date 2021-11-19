import React, { useEffect, useRef } from "react";
import marked from "marked";
import DOMPurify from "dompurify";
import Moment from "react-moment";
import { Link } from "gatsby";

const SearchResult = ({ data, className }) => {
  const truncate = (str) => {
    const maxLength = 190;
    return str.length > maxLength ? str.substring(0, maxLength) + "..." : str;
  };
  const postDescription = useRef();
  useEffect(() => {
    postDescription.current.innerHTML = marked(
      DOMPurify.sanitize(data.node.description)
    );
    postDescription.current.innerText = truncate(
      postDescription.current.innerText
    );
  }, [data.node.description]);
  return (
    <Link
      to={`/radar/` + data.node.slug}
      className="relative h-auto transition-shadow duration-700 hover:shadow-2xl cursor-pointer"
    >
      <div className="h-52 overflow-hidden rounded-tl-xl rounded-tr-xl">
        <img
          className="w-full h-full object-cover object-top"
          src={data.node.image[0].formats.medium.url}
          alt="Post Header"
        />
      </div>
      {/* Set height is temporary */}
      <div className="px-4 py-4 rounded-bl-xl rounded-br-xl flex flex-col transition-all duration-500 bg-white 2xl:h-60 lg:h-80 md:h-64 sm:h-80 h-auto">
        <p className="font-semibold text-2xl mb-2">
          <b>{data.node.title}</b>
        </p>
        <p ref={postDescription} className="post-text" />
        <Moment
          className="font-semibold color-blue md:absolute bottom-4 sm:mt-auto mt-2 block"
          format="Do MMMM, YYYY"
        >
          {data.node.publish_date}
        </Moment>
      </div>
    </Link>
  );
};

export default SearchResult;
