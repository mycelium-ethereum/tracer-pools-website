import React from "react";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";

const MarkdownContent = (props) => {
  return (
    <ReactMarkdown
      {...props}
      rehypePlugins={[rehypeRaw, remarkGfm, rehypeSlug]}
    />
  );
};

export default MarkdownContent;
