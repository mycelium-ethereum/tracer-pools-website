/* eslint-disable */
import React, { useEffect, useRef } from "react";
import marked from "marked";
import DOMPurify from "dompurify";
import Moment from "react-moment";
import { Link } from "gatsby";

const BlogPost = ({ data }) => {
  const truncate = (str) => {
    const maxLength = 200;
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
      className="h-auto col-span-1 transition-shadow duration-700 shadow-lg hover:shadow-2xl rounded-bl-xl rounded-br-xl cursor-pointer"
    >
      <div className="relative h-auto overflow-hidden rounded-tl-xl rounded-tr-xl">
        <img src={data.node.image[0].formats.medium.url} />
      </div>
      <div
        style={{ height: "255px" }}
        className="px-4 py-4 rounded-bl-xl rounded-br-xl bg-white relative"
      >
        <p className="font-semibold text-2xl mb-2">
          <b>{data.node.title}</b>
        </p>
        {/* Overflow hidden is temporary */}
        <p ref={postDescription} className="overflow-hidden post-text"></p>
        <Moment
          className="font-semibold color-blue mt-2 block absolute bottom-4"
          format="Do MMMM, YYYY"
        >
          {data.node.publish_date}
        </Moment>
      </div>
    </Link>
  );
};

export default BlogPost;
