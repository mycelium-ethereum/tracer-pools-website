import React, { useEffect, useState } from "react";
import Container from "@/components/Shared/Container";
// Images
import Category from "@/components/Shared/Footer/Category";

import {
  categoryNames,
  socialLinks,
  tracerDAOCategory,
  productCategory,
  learnCategory,
  contributeCategory,
  governCategory,
  connectCategory,
} from "@/components/Shared/Footer/presets";
import PageLink from "../PageLink";
import SocialLinks from "./SocialLinks";
const Footer = () => {
  const categoryArr = [
    tracerDAOCategory,
    productCategory,
    learnCategory,
    contributeCategory,
    governCategory,
    connectCategory,
  ];
  const setCopyrightYear = () => {
    const year = new Date().getFullYear();
    document.getElementById("year").innerHTML = year.toString();
  };

  useEffect(() => {
    setCopyrightYear();
  }, []);

  return (
    <footer className="relative z-10 h-1/2 w-full overflow-hidden bg-tracer-darkblue py-[77px] text-action-active">
      <Container>
        <div className="mb-[75px] flex flex-col items-start justify-between pr-8 md:flex-row md:pr-0">
          <PageLink href="/">
            <img
              src="/img/logos/tracer-logo-blue.svg"
              className="mr-20 h-[26px] w-[111px]"
            />
          </PageLink>
          <div className="mt-12 grid flex-grow transform grid-cols-2 gap-x-[75px] gap-y-12 sm:grid-cols-3 md:mt-0 lg:translate-x-[95px] xl:w-max xl:translate-x-[40px] xl:grid-cols-6">
            {categoryNames.map((category, i) => {
              return (
                <Category
                  key={i}
                  name={category.name}
                  category={categoryArr[i]}
                />
              );
            })}
          </div>
        </div>
        <div className="flex flex-col items-center justify-between border-t border-action-active pt-5 sm:flex-row">
          {/* Social icons */}
          <SocialLinks links={socialLinks} />
          <span className="mt-5 sm:mt-0">
            © <span id="year"></span> Tracer DAO
          </span>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;