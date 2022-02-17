import React from "react";

const BrandColourTile = ({ item, small }) => {
  const sizeStyles = small
    ? "min-h-[100px] xl:min-w-[266px]"
    : "min-h-[100px] xl:min-w-[366px]";
  return (
    <div
      style={{ backgroundColor: item.hex }}
      className={`mb-6 flex flex-col items-center justify-center rounded-[14px] ${sizeStyles} mx-3 min-w-full sm:min-w-[340px] xl:mx-0`}
    >
      <span className="text-sm text-white">{item.description}</span>
      <button className="mt-2 flex items-center justify-center rounded-2xl bg-white px-2 py-1 text-[8px] text-black">
        {item.hex}
      </button>
    </div>
  );
};

export default BrandColourTile;
