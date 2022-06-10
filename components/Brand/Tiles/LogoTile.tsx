import Download from "@components/Brand/Buttons/DownloadButton"
import { LogoProps } from "@components/Brand/Sections"

export interface LogoTileProps extends LogoProps {
    noPadding: boolean
}

export const LogoTile: React.FC<LogoTileProps> = ({
    colour,
    svg,
    png,
    description,
    className,
    noPadding,
}) => {
    return (
        <div className="w-full">
            <div
                className={`mb-2 flex h-[150px] w-full items-center justify-center overflow-hidden rounded-lg px-8 [box-shadow:0px_2px_4px_rgba(0,0,0,0.1)]
                    ${colour && colour === "grey" ? "bg-footnote" : ""}
                    ${
                        colour && colour === "blue"
                            ? "bg-tracer-primaryblue px-4"
                            : ""
                    }
                    ${!colour ? "bg-secondary" : ""}
                    ${noPadding ? "px-0" : ""}
                `}
            >
                <picture>
                    <img
                        src={svg}
                        alt={description}
                        className={className ? className : ""}
                    />
                </picture>
            </div>
            <div className="flex w-full items-center justify-between text-sm">
                <span className="text-[#828790]">{description}</span>
                <div>
                    <Download url={svg}>SVG</Download>
                    <Download url={png}>PNG</Download>
                </div>
            </div>
        </div>
    )
}
