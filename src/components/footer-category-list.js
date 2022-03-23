import React from "react";
import FooterLink from "./footer-link";

const FooterCategory = ({ name, category }) => {
  return (
    <div className="flex w-max flex-col items-start">
      <span className="mb-2.5 block">
        <strong>{name}</strong>
      </span>
      {category.map((content, i) => (
        <FooterLink key={i} content={content} />
      ))}
    </div>
  );
};

export default FooterCategory;
