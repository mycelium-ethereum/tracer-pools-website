import ColourHexButton from "./ColourHexButton";

const BrandColourTile: React.FC<{ item: any; small?: boolean }> = ({
  item,
  small,
}) => {
  const sizeStyles = small
    ? "min-h-[110px] xl:min-w-[266px]"
    : "min-h-[110px] xl:min-w-[366px]";

  const copyToClipboard = (e, hex) => {
    const textEl = e.target.querySelector("span");
    navigator.clipboard.writeText(hex);
    textEl.innerText = "Copied!";
    setTimeout(() => {
      textEl.innerText = hex;
    }, 1000);
  };

  return (
    <div
      style={{ backgroundColor: item.hex }}
      className={`mb-4 flex flex-col items-center justify-center rounded-lg ${sizeStyles} mx-3 min-w-full sm:min-w-[366px] xl:mx-0`}
    >
      <span className="mb-1 text-sm text-white">{item.description}</span>
      <ColourHexButton hex={item.hex} copyToClipboard={copyToClipboard} />
    </div>
  );
};

export default BrandColourTile;
