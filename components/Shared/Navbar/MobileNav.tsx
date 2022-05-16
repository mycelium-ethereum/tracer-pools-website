import Container from "@components/Shared/Container";
import MobileLink from "@components/Shared/Navbar/MobileNav/MobileLink";
import MeshUnderlay from "@components/Shared/Mesh/MeshUnderlay";
import { socialLinks } from "@components/Shared/Footer/presets";
import SocialLinks from "../Footer/SocialLinks";
import CopyrightYear from "../CopyrightYear";
import ProductsDropdown from "./ProductsDropdownMobile";

const MobileNav: React.FC<{
  links: {
    label: string;
    href: string;
  }[];
  navOpen: boolean;
  mobileProductsDropdownOpen: boolean;
  handleClose: () => void;
  handleMobileProductsDropdownToggle: () => void;
}> = ({
  links,
  navOpen,
  mobileProductsDropdownOpen,
  handleClose,
  handleMobileProductsDropdownToggle,
}) => {
  return (
    <menu
      className={`fixed top-0 left-0 z-30 w-full overflow-hidden bg-tracer-navy transition-all duration-700 ${
        navOpen ? "h-screen" : "h-0"
      }`}
    >
      <div className="absolute top-0 left-0 z-10 flex h-screen w-full flex-col justify-end">
        <div className="mt-[100px] h-[385px] overflow-y-auto overflow-x-hidden">
          <MobileLink link={links[0].href} onClickAction={handleClose} border>
            {links[0].label}
          </MobileLink>
          <ProductsDropdown
            mobileProductsDropdownOpen={mobileProductsDropdownOpen}
            handleClose={handleClose}
            handleMobileProductsDropdownToggle={
              handleMobileProductsDropdownToggle
            }
          />
          {links.slice(2, links.length).map((link, i) => (
            <MobileLink
              key={i}
              link={link.href}
              onClickAction={handleClose}
              border={i !== links.length - 3}
            >
              {link.label}
            </MobileLink>
          ))}
        </div>
        <div className="mb-8 px-4">
          <hr className="border-tracer-cyan" />
          <SocialLinks
            links={socialLinks}
            leftAlign
            className="my-6 text-tracer-cyan"
          />
          <CopyrightYear className="text-tracer-cyan" />
        </div>
      </div>
      <div className="pointer-events-none absolute top-0 left-0 z-0 h-screen w-full">
        <MeshUnderlay fullPage />
      </div>
    </menu>
  );
};

export default MobileNav;
