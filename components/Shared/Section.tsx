const PageSection: React.FC<{
    id?: string
    children: React.ReactNode
    className?: string
}> = ({ className, id, children }) => {
    return (
        <section
            id={id}
            className={`relative overflow-hidden ${className ? className : ""}`}
        >
            {children}
        </section>
    )
}

export default PageSection
