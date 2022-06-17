export interface ContainerProps {
    className?: string
    children: React.ReactNode
}
const Container: React.FC<ContainerProps> = ({ className = "", children }) => {
    return (
        <div
            className={`container relative z-10 mx-auto px-6 transition-[max-width] duration-500 md:px-[50px] ${className}`}
        >
            {children}
        </div>
    )
}

export default Container
