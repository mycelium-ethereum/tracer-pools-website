import React from "react";
import CopyIcon from "../../static/img/brand/copy.svg";

const BrandColourTile = ({ item, small }) => {
  const sizeStyles = small
    ? "min-h-[100px] xl:min-w-[266px]"
    : "min-h-[100px] xl:min-w-[366px]";
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
      className={`mb-6 flex flex-col items-center justify-center rounded-[14px] ${sizeStyles} mx-3 min-w-full sm:min-w-[340px] xl:mx-0`}
    >
      <span className="text-sm text-white">{item.description}</span>
      <button
        className="mt-2 flex items-center justify-center rounded-2xl bg-white px-2.5 py-1 text-[10px] text-black"
        onClick={(e) => copyToClipboard(e, item.hex)}
      >
        <span className="pointer-events-none">{item.hex}</span>
        <img src={CopyIcon} className="pointer-events-none ml-1 mb-0.5" />
      </button>
    </div>
  );
};

export default BrandColourTile;
