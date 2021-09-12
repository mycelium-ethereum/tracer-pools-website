/* eslint-disable */
import React, { useEffect, useRef } from "react";
import marked from "marked";
import DOMPurify from "dompurify";
import Moment from "react-moment";
import { Link } from "gatsby";

const BlogPost = ({ data, className }) => {
  const truncate = (str) => {
    const maxLength = 190;
    return str.length > maxLength ? str.substring(0, maxLength) + "..." : str;
  };
  const postDescription = useRef();
  useEffect(() => {
    const bodyTextHTML = marked(DOMPurify.sanitize(data.node.description));
    postDescription.current.innerHTML = bodyTextHTML;
    postDescription.current.innerText = truncate(
      postDescription.current.innerText
    );
  }, []);
  return (
    <Link
      to={`/radar/` + data.node.slug}
      className={
        "relative h-auto col-span-1 transition-shadow duration-700 shadow-lg hover:shadow-2xl rounded-bl-xl rounded-br-xl cursor-pointer " +
        (className ? className : "")
      }
    >
      <div className="h-auto overflow-hidden rounded-tl-xl rounded-tr-xl">
        <img src={data.node.image[0].formats.medium.url} />
      </div>
      {/* Set height is temporary */}
      <div className="px-4 py-4 rounded-bl-xl rounded-br-xl flex flex-col bg-white 2xl:h-auto 2xl:pb-14 lg:h-72 md:h-64 h-auto">
        <p className="font-semibold text-2xl mb-2">
          <b>{data.node.title}</b>
        </p>
        <p ref={postDescription} className="post-text"></p>
        <Moment
          className="font-semibold color-blue md:absolute bottom-4 md:mt-auto mt-2 block"
          format="Do MMMM, YYYY"
        >
          {data.node.publish_date}
        </Moment>
      </div>
    </Link>
  );
};

export default BlogPost;
