import ColourHexButton from "./ColourHexButton";

const BrandColourTile: React.FC<{ item: any }> = ({ item }) => {
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
      className="flex h-[110px] flex-col items-center justify-center rounded-lg xl:mx-0"
    >
      <span className="mb-1 text-sm text-white">{item.description}</span>
      <ColourHexButton hex={item.hex} copyToClipboard={copyToClipboard} />
    </div>
  );
};

export default BrandColourTile;
