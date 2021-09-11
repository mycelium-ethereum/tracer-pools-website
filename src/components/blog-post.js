/* eslint-disable */
import React, { useEffect, useRef } from "react";
import marked from "marked";
import DOMPurify from "dompurify";

const BlogPost = ({ data }) => {
  const truncate = (str) => {
    const maxLength = 180;
    return str.length > maxLength ? str.substring(0, maxLength) + "..." : str;
  };
  const postDescription = useRef();
  useEffect(() => {
    const bodyTextHTML = marked(DOMPurify.sanitize(data.node.body_text));
    postDescription.current.innerHTML = bodyTextHTML;
    const firstTag = postDescription.current.firstChild;
    if(firstTag.firstChild.tagName == "EM"){
      firstTag.firstChild.remove();
    }
    if(firstTag.firstChild && firstTag.firstChild.innerText && firstTag.firstChild.innerText < 80){
      firstTag.firstChild.remove();
    }
    postDescription.current.innerText = truncate(
      postDescription.current.innerText
    );
  });
  return (
    <a className="h-auto col-span-1 bg-white shadow-lg rounded-xl">
      <div className="h-52 overflow-hidden rounded-tl-xl rounded-tr-xl">
        <img
          className="w-full h-auto"
          src={data.node.image[0].formats.medium.url}
        />
      </div>
      <div className="px-4 py-4 rounded-bl-xl rounded-br-xl">
        <p className="font-semibold text-2xl mb-2">
          <b>{data.node.title}</b>
        </p>
        <p ref={postDescription} className="post-text"></p>
        {/* <time className="font-semibold color-blue mt-2 block">August 20, 2021</time> */}
        <time className="font-semibold color-blue mt-2 block">
          {data.node.publish_date}
        </time>
      </div>
    </a>
  );
};

export default BlogPost;
