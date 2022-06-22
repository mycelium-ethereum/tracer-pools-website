import PageLink from "@components/Shared/PageLink"

const ProductItem: React.FC<{
    logo: string
    link: string
    handleClose: () => void
    backgroundStyles: string
    className: string
}> = ({ logo, link, handleClose, backgroundStyles, className }) => {
    return (
        <PageLink
            href={link}
            className={`block ${className} ${backgroundStyles} opacity-0 transition-all duration-500`}
        >
            <button
                onClick={handleClose}
                className={`flex w-full items-center justify-center py-4 transition-all duration-500`}
            >
                <img src={logo} className="h-[18px]" />
            </button>
        </PageLink>
    )
}

export default ProductItem
