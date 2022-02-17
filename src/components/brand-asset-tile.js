import React from "react";

const BrandAssetTile = ({ item, index }) => {
  return (
    <div className="w-[366px]">
      <div
        className={`mb-2 flex h-[179px] w-full items-center justify-center rounded-xl [box-shadow:0px_4px_15px_rgb(0_0_0_/_15%)] ${
          index === 0 ? "bg-[#0000B0]" : "bg-white"
        }`}
      >
        {item.logo && (
          <picture>
            <img src={item.svg} />
          </picture>
        )}
      </div>
      <div className="flex w-full items-center justify-between text-sm">
        <span className="text-[#828790]">{item.description}</span>
        <div className="font-semibold text-[#1C64F2]">
          <a download href={item.svg} className>
            SVG
          </a>
          <a download href={item.png} className="ml-2">
            PNG
          </a>
        </div>
      </div>
    </div>
  );
};

export default BrandAssetTile;
