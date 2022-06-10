export interface ColourHexButton {
    hex: string
    copyToClipboard: (
        e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
        hex: any
    ) => void
}

export const ColourHexButton: React.FC<ColourHexButton> = ({
    hex,
    copyToClipboard,
}) => {
    return (
        <button
            className="flex w-[73px] items-center justify-center rounded-lg bg-white bg-opacity-20 px-2.5 py-0.5 text-[10px] text-white"
            onClick={(e) => copyToClipboard(e, hex)}
        >
            <span className="pointer-events-none">{hex}</span>
            <img
                src="/img/brand/copy-icon.svg"
                className="pointer-events-none ml-1 mb-0.5"
            />
        </button>
    )
}
