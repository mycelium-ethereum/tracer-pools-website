import ReactMarkdown from "react-markdown"
import rehypeRaw from "rehype-raw"
import remarkGfm from "remark-gfm"
// import rehypeSlug from "rehype-slug";
import CodeBlock from "@components/Radar/Post/CodeBlock"

const MarkdownContent = (props) => {
    const newProps = {
        ...props,
        components: {
            code({ node, inline, className, children, ...props }) {
                const match = /language-(\w+)/.exec(className || "")
                return !inline && match ? (
                    <CodeBlock
                        children={String(children).replace(/\n$/, "")}
                        language={match[1]}
                        {...props}
                    />
                ) : (
                    <code className={className}>{children}</code>
                )
            },
        },
    }

    return (
        <ReactMarkdown {...newProps} rehypePlugins={[rehypeRaw, remarkGfm]} />
    )
}

export default MarkdownContent
