import React from "react";

const BrandGraphicTile = ({ item, alt }) => {
  return (
    <div className="mx-3 mb-7 min-w-full max-w-[366px] sm:min-w-[366px]">
      <div className="mb-2 flex h-60 w-full justify-center overflow-hidden rounded-xl bg-[#00005E] drop-shadow-xl [box-shadow:0px_4px_15px_rgb(0_0_0_/_15%)]">
        <picture>
          <img src={item.image} className="h-full w-auto" alt={alt} />
        </picture>
      </div>
      <div className="flex w-full items-center justify-between text-sm">
        <span className="text-[#82879]">{item.description}</span>
        <div className="font-semibold text-[#1C64F2]">
          <a download href={item.download} className="ml-2">
            PNG
          </a>
        </div>
      </div>
    </div>
  );
};

export default BrandGraphicTile;
