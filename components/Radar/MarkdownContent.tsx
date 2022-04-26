import React from "react";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";

const MarkdownContent = (props) => {
  // const HeadingRenderer = ({ props }) => {
  //   return (
  //     <>
  //       <h1 {...props}>{props.children}</h1>
  //       <hr className="line-gradient-blue h-[1px] w-full border-none" />
  //     </>
  //   );
  // };

  return (
    <ReactMarkdown
      {...props}
      // components={{ h3: HeadingRenderer }}
      rehypePlugins={[rehypeRaw, remarkGfm, rehypeSlug]}
    />
  );
};

export default MarkdownContent;
