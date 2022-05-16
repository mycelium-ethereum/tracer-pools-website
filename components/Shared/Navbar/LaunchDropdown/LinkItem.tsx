import React from "react";
import { SVGProps } from "types";

const LinkItem: React.FC<{
  LinkImage: React.FC<SVGProps>;
  imgClassName: string;
  label: string;
  link: string;
}> = ({ LinkImage, imgClassName, label, link }) => {
  return (
    <a href={link} rel="noopener noreferrer" target="_blank">
      <div className="flex items-center justify-center border-b border-action-active py-4 transition-colors duration-500 hover:bg-tracer-midblue ">
        <LinkImage className={`mr-5 ${imgClassName}`} />
        <span>{label}</span>
      </div>
    </a>
  );
};

export default LinkItem;
