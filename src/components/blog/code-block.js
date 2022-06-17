import React from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/cjs/styles/hljs";

export default function CodeBlock({ language = null, children }) {
  return (
    <SyntaxHighlighter
      language={language}
      style={atomOneDark}
      customStyle={{
        background: "transparent",
        marginTop: "0",
        marginBottom: "0",
      }}
    >
      {children}
    </SyntaxHighlighter>
  );
}
