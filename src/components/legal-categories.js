import React, { useEffect } from "react";
import Dropdown from "../../static/img/general/chevron-down.svg";
import OpenLink from "../../static/img/general/open-link.svg";
import ParticipationAgreementPDF from "../../static/pdf/Participation Agreement.pdf";

const LegalCategories = ({
  category,
  setCategory,
  setDropdownOpen,
  dropdownOpen,
}) => {
  const handleClick = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleLinkClick = (e) => {
    setCategory(e.target.dataset.category);
    setDropdownOpen(false);
  };

  const setActiveLink = () => {
    const links = document.querySelectorAll(".legal-link");
    links.forEach((link) => {
      const linkCategory = link.dataset.category;
      if (category === linkCategory) {
        link.classList.remove("text-grey-100");
        link.classList.add("text-grey-200");
      } else {
        link.classList.add("text-grey-100");
        link.classList.remove("text-grey-200");
      }
    });
  };

  useEffect(() => {
    setActiveLink();
  }, [category]);

  return (
    <aside className="relative col-span-1 h-auto w-[190px] md:static xl:w-60">
      <button
        className="relative inline-flex h-11 w-48 items-center justify-start rounded-xl bg-gray-50 pl-4 text-base font-semibold md:hidden"
        onClick={handleClick}
      >
        {category}
        <img
          className="absolute top-1/2 right-2 h-auto w-4 -translate-y-1/2 transform"
          src={Dropdown}
          alt="Dropdown toggle"
        />
      </button>
      <div
        className={
          "absolute left-0 top-10 rounded-xl bg-white p-4 shadow transition-opacity duration-300 md:static md:block md:rounded-none md:bg-transparent md:p-0 md:shadow-none " +
          (dropdownOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0 md:pointer-events-auto md:opacity-100")
        }
      >
        <span className="hidden text-3xl font-semibold md:block">
          Legal and Privacy
        </span>
        <ul className="md:mt-2 md:pl-4">
          <li className="mb-2">
            <button
              className="legal-link text-grey-100 hover:text-grey-200"
              data-category="Privacy Policy"
              onClick={handleLinkClick}
            >
              Privacy Policy
            </button>
          </li>
          <li className="mb-2">
            <a href="#terms-of-use">
              <button
                className="legal-link text-grey-100 hover:text-grey-200"
                data-category="Terms of Use"
                onClick={handleLinkClick}
              >
                Terms of Use
              </button>
            </a>
          </li>
          <li className="mb-2">
            <a
              className="flex items-center text-grey-100 hover:text-grey-200"
              target={"_blank"}
              href={ParticipationAgreementPDF}
            >
              Participation Agreement
              <img src={OpenLink} className="ml-[5px] h-[13px] w-[13px]" />
            </a>
          </li>
          <li>
            <a href="#interfaces-disclaimer">
              <button
                className="legal-link text-grey-100 hover:text-grey-200"
                data-category="Interfaces Disclaimer"
                onClick={handleLinkClick}
              >
                Interfaces Disclaimer
              </button>
            </a>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default LegalCategories;
