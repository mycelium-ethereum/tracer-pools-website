/* eslint-disable */
import React from "react";
import PDFIcon from "../../static/img/learn/pdf-icon.svg";

const PaperDownload = ({title, header, image, downloadLink}) => {
  return (
    <>
      <div className="col-span-1 rounded-2xl overflow-hidden">
        <div className="relative w-full lg:h-28 md:h-20 h-28 flex flex-col items-center justify-center overflow-hidden">
          <img
            className="absolute top-0 left-0 z-0 min-h-full min-w-full transform-gpu scale-105"
            src={header}
          />
          <div className="relative z-10 text-center">
            <small className="lg:text-2xl md:text-base text-2xl text-white font-normal">Tracer</small>
            <h1 className="lg:text-3xl md:text-lg text-2xl text-white font-bold">{title}</h1>
          </div>
        </div>
        <div className="py-4 px-8 bg-white">
          <a href={downloadLink} className="block">
            <img src={image} />
          </a>
          <a
            className="bg-blue-600 w-32 h-12 my-7 mx-auto rounded-xl text-white flex items-center justify-center"
            href={downloadLink}
          >
            Download
            <img className="ml-2" src={PDFIcon} />
          </a>
        </div>
      </div>
    </>
  );
};

export default PaperDownload;
