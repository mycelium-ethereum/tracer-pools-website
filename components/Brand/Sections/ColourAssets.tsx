import { AssetHeading } from "@components/Brand/Sections"
import { BrandColourTile } from "@components/Brand/Tiles/ColourTile"

export interface ColourProps {
    description: string
    hex: string
}
export interface ColourAssetsProps {
    heading: string
    subheading: string | React.ReactNode
    colours: ColourProps[]
}

export const ColourAssets: React.FC<ColourAssetsProps> = ({
    heading,
    subheading,
    colours,
}) => {
    const FIRST_ROW_LIMIT = 3
    const SECOND_ROW_LIMIT = 7

    return (
        <div className="mb-20">
            <AssetHeading heading={heading} subheading={subheading} />
            <div className="hidden lg:block">
                <div className="mb-4 grid grid-cols-3 gap-x-4">
                    {colours.slice(0, FIRST_ROW_LIMIT).map((colour, i) => (
                        <BrandColourTile key={i} {...colour} />
                    ))}
                </div>
                <div className="grid grid-cols-4 gap-x-4">
                    {colours
                        .slice(FIRST_ROW_LIMIT, SECOND_ROW_LIMIT)
                        .map((colour, i) => (
                            <BrandColourTile key={i} {...colour} />
                        ))}
                </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:hidden">
                {colours.map((colour, i) => (
                    <BrandColourTile key={i} {...colour} />
                ))}
            </div>
        </div>
    )
}
