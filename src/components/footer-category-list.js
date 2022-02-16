import React from "react";
import FooterLink from "./footer-link";

const FooterCategory = ({ name, category }) => {
  return (
    <div className="flex flex-col items-start">
      <span>
        <strong>{name}</strong>
      </span>
      {category.map((content) => (
        <FooterLink content={content} />
      ))}
    </div>
  );
};

export default FooterCategory;
