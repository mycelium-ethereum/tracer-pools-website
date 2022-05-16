import React from "react";
import { SVGProps } from "types";

const SocialItem: React.FC<{
  LinkImage: React.FC<SVGProps>;
  link: string;
}> = ({ LinkImage, link }) => {
  return (
    <a href={link} rel="noopener noreferrer">
      <LinkImage className="mx-2.5 h-[15px] transition-colors duration-300 hover:text-action-active" />
    </a>
  );
};

export default SocialItem;
