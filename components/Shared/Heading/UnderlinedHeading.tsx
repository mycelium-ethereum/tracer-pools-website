import GradientLine from "@components/Shared/GradientLine"

const UnderlinedHeading: React.FC<{
    lineColor: "blue" | "lightblue" | "purple" | "grey"
    hideBullet?: boolean
    center?: boolean
    children: string | React.ReactNode
    className?: string
}> = ({ lineColor, hideBullet, center, children, className = "" }) => {
    return (
        <div className={`${className} mb-4 text-sm uppercase`}>
            <div className="flex items-center pb-2">
                {!hideBullet && (
                    <img
                        src="/img/icons/bullet.svg"
                        alt="Bullet"
                        className="mr-2 h-2.5 w-2.5"
                    />
                )}
                <span className="inline-block tracking-[0.15em]">
                    {children}
                </span>
            </div>
            <GradientLine color={lineColor} center={center} />
        </div>
    )
}

export default UnderlinedHeading
