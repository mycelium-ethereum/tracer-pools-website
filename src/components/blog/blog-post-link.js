import React, { useRef } from "react";
import { Link } from "gatsby";
import Moment from "react-moment";
import MarkdownContent from "./markdown-content";

const PostLink = ({ data, className }) => {
  const truncate = (str) => {
    const maxLength = 190;
    return str.length > maxLength ? str.substring(0, maxLength) + "..." : str;
  };
  const postDescription = useRef();

  return (
    <Link
      to={`/radar/` + data.node.slug + "/"}
      className={
        "post-link relative col-span-1 h-auto cursor-pointer rounded-bl-xl rounded-br-xl shadow-lg transition-shadow duration-700 hover:shadow-2xl " +
        (className ? className : "")
      }
    >
      <div className="h-52 overflow-hidden rounded-tl-xl rounded-tr-xl">
        <img
          className="h-full w-full object-cover object-top"
          src={data.node.image[0].formats.medium.url}
          alt="Post Header"
        />
      </div>
      {/* Set height is temporary */}
      <div className="md:h-68 flex h-auto flex-col rounded-bl-xl rounded-br-xl bg-white px-4 py-4 transition-all duration-500 sm:h-80 lg:h-80 2xl:h-60">
        <p className="mb-2 text-2xl font-semibold">
          <b>{data.node.title}</b>
        </p>
        <p ref={postDescription} className="post-text">
          {data.node.description && (
            <MarkdownContent children={truncate(data.node.description)} />
          )}
        </p>
        <Moment
          className="color-blue bottom-4 mt-2 block font-semibold sm:mt-auto md:absolute"
          format="Do MMMM, YYYY"
        >
          {data.node.publish_date}
        </Moment>
      </div>
    </Link>
  );
};

export default PostLink;
