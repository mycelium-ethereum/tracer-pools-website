import { ColourHexButton } from "@components/Brand/Buttons/ColourHexButton"
import { ColourProps } from "@components/Brand/Sections"

export const BrandColourTile: React.FC<ColourProps> = ({
    description,
    hex,
}) => {
    const copyToClipboard = (
        e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
        hex: string
    ) => {
        const textEl = (e.target as HTMLButtonElement).querySelector("span")
        navigator.clipboard.writeText(hex)
        textEl.innerText = "Copied!"
        setTimeout(() => {
            textEl.innerText = hex
        }, 1000)
    }

    return (
        <div
            style={{ backgroundColor: hex }}
            className="flex h-[110px] flex-col items-center justify-center rounded-lg xl:mx-0"
        >
            <span className="mb-1 text-sm text-white">{description}</span>
            <ColourHexButton hex={hex} copyToClipboard={copyToClipboard} />
        </div>
    )
}
