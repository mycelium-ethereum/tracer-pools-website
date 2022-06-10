import { AssetHeading } from "@components/Brand/Sections/AssetHeading"
import { LogoTile } from "@components/Brand/Tiles/LogoTile"
import Button from "@components/Shared/Buttons/Button"

export interface LogoProps {
    description: string
    svg: string
    png: string
    colour?: "blue" | "grey" | string
    noPadding?: boolean
    className?: string
}

export interface LogoAssetsProps {
    heading: string
    subheading: string | React.ReactNode
    logos: LogoProps[]
}

export const LogoAssets: React.FC<LogoAssetsProps> = ({
    heading,
    subheading,
    logos,
}) => {
    return (
        <>
            <div className="mb-20">
                <div className="mb-8 flex flex-col justify-between sm:mb-0 sm:flex-row">
                    <AssetHeading heading={heading} subheading={subheading} />
                    <Button
                        lightBlueGradient
                        download
                        link="/img/brand/Tracer Logos.zip"
                    >
                        Download All
                    </Button>
                </div>
                <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
                    {logos.map((item: LogoProps, i) => (
                        <LogoTile
                            key={i}
                            {...item}
                            noPadding={item.noPadding}
                            colour={item.colour}
                        />
                    ))}
                </div>
            </div>
        </>
    )
}
