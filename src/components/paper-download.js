import React from "react";
import PDFIcon from "../../static/img/learn/pdf-icon.svg";

const PaperDownload = ({ title, header, image, link }) => {
  return (
    <>
      <div className="col-span-1 rounded-2xl overflow-hidden">
        <div className="relative w-full lg:h-28 md:h-20 h-28 flex flex-col items-center justify-center overflow-hidden">
          <img
            className="absolute top-0 left-0 z-0 min-h-full min-w-full transform-gpu scale-105"
            src={header}
            alt="Header Background"
          />
          <div className="relative z-10 text-center">
            <small className="lg:text-2xl md:text-base text-2xl text-white font-normal">
              Tracer
            </small>
            <h1 className="xl:text-3xl lg:text-2xl md:text-lg text-2xl text-white font-bold">
              {title}
            </h1>
          </div>
        </div>
        <div className="py-5 px-7 bg-white">
          <a href={link} rel="noreferrer" target="_blank" className="block">
            <img src={image} alt="Research Paper page" />
          </a>
          <a
            className="transition-colors duration-500 w-32 h-12 mt-10 mb-8 mx-auto rounded-xl font-semibold text-white flex items-center justify-center bg-blue-600 hover:bg-blue-800"
            href={link}
            download
          >
            Download
            <img className="ml-2 w-2882" src={PDFIcon} alt="PDF Download" />
          </a>
        </div>
      </div>
    </>
  );
};

export default PaperDownload;
