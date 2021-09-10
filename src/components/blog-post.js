/* eslint-disable */
import React from "react";
import PostHeader from "/static/img/post-header.png";

const BlogPost = () => {
  return (
    <>
      <a className="h-auto w-96 bg-white shadow-lg rounded-xl">
        <div className="h-52 overflow-hidden rounded-tl-xl rounded-tr-xl">
          <img className="w-full h-auto" src={PostHeader} />
        </div>
        <div className="px-4 py-4 rounded-bl-xl rounded-br-xl">
          <p className="font-semibold text-xl mb-2">
            <b>Risk Management with Tracer</b>
          </p>
          <p>
            Enter Tracer; an open source, decentralised smart contract protocol
            for derivatives that enables reliable risk management...
          </p>
          <time className="font-semibold color-blue mt-2 block">August 20, 2021</time>
        </div>
      </a>
    </>
  );
};

export default BlogPost;
