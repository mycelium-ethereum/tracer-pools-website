import { AssetHeading } from "@components/Brand/Sections/AssetHeading"
import Button from "@components/Shared/Buttons/Button"
import BrandGraphicTile from "@components/Brand/Tiles/GraphicTile"

export interface GraphicAssetsProps {
    heading: string
    subheading: string | React.ReactNode
    graphics: {
        description: string
        image: string
        png: string
        svg: string
    }[]
}

export const GraphicAssets: React.FC<GraphicAssetsProps> = ({
    heading,
    subheading,
    graphics,
}) => {
    return (
        <div className="mb-20">
            <div className="mb-8 flex flex-col justify-between sm:mb-0 sm:flex-row">
                <AssetHeading heading={heading} subheading={subheading} />
                <Button
                    lightBlueGradient
                    download
                    link="/img/brand/Tracer Support Graphics.zip"
                >
                    Download All
                </Button>
            </div>
            <div className="grid gap-4 lg:grid-cols-2 3xl:grid-cols-3">
                {graphics.map((item, i) => (
                    <BrandGraphicTile key={i} item={item} />
                ))}
            </div>
        </div>
    )
}
