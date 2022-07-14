const AppItem: React.FC<{
    image: string
    logo: string
    logoClassName: string
}> = ({ image, logo, logoClassName }) => {
    return (
        <button className="group relative flex h-[110px] flex-col items-center justify-center overflow-hidden rounded-md">
            <img
                src={image}
                className="absolute top-0 left-0 z-0 h-full w-full scale-110 opacity-0 transition-all duration-500 group-hover:scale-100 group-hover:opacity-100"
            />
            <img src={logo} className={`relative z-10 ${logoClassName}`} />
        </button>
    )
}

export default AppItem
