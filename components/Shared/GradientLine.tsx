const GradientLine: React.FC<{
  color: "blue" | "lightblue" | "purple" | "grey";
}> = ({ color }) => {
  let gradientColor = "";
  switch (color) {
    case "blue":
      gradientColor = "line-gradient-blue";
      break;
    case "lightblue":
      gradientColor = "line-gradient-lightblue";
      break;
    case "purple":
      gradientColor = "line-gradient-purple";
      break;
    case "grey":
      gradientColor = "line-gradient-grey";
      break;
    default:
      gradientColor = "line-gradient-blue";
  }

  return <hr className={`h-[1px] w-full border-none ${gradientColor}`} />;
};

export default GradientLine;
