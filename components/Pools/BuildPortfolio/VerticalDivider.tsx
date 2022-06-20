const VerticalDivider: React.FC<{ className?: string }> = ({
    className = "",
}) => (
    <span
        className={`gradient-vertical-divider mx-8 h-[30px] w-[0.5px] ${className}`}
    />
)

export default VerticalDivider
