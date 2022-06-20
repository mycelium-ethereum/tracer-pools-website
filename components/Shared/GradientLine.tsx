const GradientLine: React.FC<{
    color: "blue" | "lightblue" | "purple" | "grey"
    center?: boolean
}> = ({ color, center }) => {
    let gradientColor = ""
    switch (color) {
        case "blue":
            gradientColor = "line-gradient-blue"
            break
        case "lightblue":
            gradientColor = center
                ? "line-gradient-lightblue-center"
                : "line-gradient-lightblue"
            break
        case "grey":
            gradientColor = "line-gradient-grey"
            break
        default:
            gradientColor = "line-gradient-blue"
    }

    return (
        <hr
            className={`h-[1px] w-full border-none [transform:translateZ(0)_perspective(999px)] ${gradientColor}`}
        />
    )
}

export default GradientLine
