import React from "react";
import ReactMarkdown from "react-markdown";
// import RemarkMathPlugin from "remark-math";
import CodeBlock from "./code-block";
import rehypeRaw from "rehype-raw";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
// import { MathJax, MathJaxContext } from "better-react-mathjax";

const MarkdownContent = (props) => {
  //   const config = {
  //     loader: { load: ["[tex]/html"] },
  //     tex: {
  //       packages: { "[+]": ["html"] },
  //       code: [
  //         ["`", "`"],
  //         ["```", "```"],
  //       ],
  //         inlineMath: [
  //           ["$", "$"],
  //           ["\\(", "\\)"],
  //         ],
  //       displayMath: [
  //         ["$$", "$$"],
  //         ["\\[", "\\]"],
  //       ],
  //       processEscapes: true,
  //     },
  //   };

  const Heading = ({ children }) => {
    return <h1 {...props}>{children}</h1>;
  };

  const newProps = {
    ...props,
    // plugins: [RemarkMathPlugin],
    components: {
      heading({ children, ...props }) {
        return <Heading children={children} {...props} />;
      },
      code({ node, inline, className, children, ...props }) {
        const match = /language-(\w+)/.exec(className || "");
        return !inline && match ? (
          <CodeBlock
            children={String(children).replace(/\n$/, "")}
            language={match[1]}
            {...props}
          />
        ) : (
          <code className={className}>{children}</code>
        );
      },
      //   math: ({ value }) => <MathJax>{value}</MathJax>,
      //   inlineMath: ({ value }) => <MathJax inline>{value}</MathJax>,
    },
  };

  return (
    // <MathJaxContext version={3} config={config}>
    <ReactMarkdown
      {...newProps}
      rehypePlugins={[rehypeRaw, remarkGfm, rehypeSlug]}
      escapeHtml={false}
    />
    // </MathJaxContext>
  );
};

export default MarkdownContent;
