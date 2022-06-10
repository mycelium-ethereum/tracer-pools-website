import GradientLine from "@components/Shared/GradientLine"

export interface AssetHeadingProps {
    heading: string
    subheading: string | React.ReactNode
}

export const AssetHeading: React.FC<AssetHeadingProps> = ({
    heading,
    subheading,
}) => (
    <div className="mb-4 sm:w-1/2">
        <h2 className="pb-2 text-sm uppercase leading-[14px] tracking-[0.15em] text-highlight">
            {heading}
        </h2>
        <GradientLine color="lightblue" />
        <span className="mt-2 block text-sm leading-[20px] text-tertiary">
            {subheading}
        </span>
    </div>
)
