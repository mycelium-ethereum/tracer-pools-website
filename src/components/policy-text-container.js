/* eslint-disable */
import React, { useEffect, useState } from "react";
import Container from "../components/container";
import InterfacesDisclaimerText from "./interfaces-disclaimer-text";
import LegalCategories from "./legal-categories";
import PrivacyPolicyText from "./privacy-policy-text";
import TermsOfUseText from "./terms-of-use-text";

const PrivacyText = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [category, setCategory] = useState("Privacy Policy");
  const [policyText, setPolicyText] = useState([]);

  const isMobile = () => {
    const width = window.innerWidth;
    return width < 1024;
  };

  const changePolicyText = () => {
    switch (category) {
      case "Privacy Policy":
        setPolicyText(<PrivacyPolicyText />);
        break;
      case "Terms of Use":
        setPolicyText(<TermsOfUseText />);
        break;
      case "Interfaces Disclaimer":
        setPolicyText(<InterfacesDisclaimerText />);
        break;
      default:
        setPolicyText(<PrivacyPolicyText />);
        break;
    }
  };

  const getURLCategory = () => {
    switch (window.location.hash) {
      case "#terms-of-use":
        setCategory("Terms of Use");
        break;
      case "#interfaces-disclaimer":
        setCategory("Interfaces Disclaimer");
        break;
      default:
        setCategory("Privacy Policy");
        break;
    }
  };

  useEffect(() => {
    getURLCategory();
    window.addEventListener("resize", function () {
      if (isMobile()) {
        setDropdownOpen(false);
      }
    });
  }, []);

  useEffect(() => {
    changePolicyText();
  }, [category]);

  return (
    <>
      <section className="select-dark relative z-20 mt-16 h-full w-full bg-white">
        <Container className="block grid-cols-12 pt-24 pb-6 md:grid">
          <LegalCategories
            category={category}
            setCategory={setCategory}
            setDropdownOpen={setDropdownOpen}
            dropdownOpen={dropdownOpen}
          />
          <div
            className="mt-4 pr-9 text-gray-500 md:col-span-8 md:col-start-5 md:mt-0 md:pr-0 lg:col-span-9 lg:col-start-4"
            onClick={() => {
              setDropdownOpen(false);
            }}
          >
            {policyText}
          </div>
        </Container>
      </section>
    </>
  );
};

export default PrivacyText;
