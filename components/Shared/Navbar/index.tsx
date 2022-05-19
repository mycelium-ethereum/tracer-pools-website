import { useCallback, useEffect, useRef, useState } from "react";
import Container from "@components/Shared/Container";
import NavLink from "@components/Shared/Navbar/NavLink";
import HamburgerMenu from "@components/Shared/Navbar/HamburgerMenu";
import MobileNav from "@components/Shared/Navbar/MobileNav";
import Logo from "@components/Shared/Logo";
import LaunchAppButton from "@components/Shared/Navbar/LaunchAppButton";
import LaunchDropdown from "@components/Shared/Navbar/LaunchDropdown";
import ProductsDropdown from "@components/Shared/Navbar/ProductsDropdown";
import {
  changeNavColour,
  getCurrentSection,
  disableScroll,
  enableScroll,
  isMobile,
} from "@lib/helpers";
import { links } from "@components/Shared/Navbar/presets";
import { handleOutsideClick } from "hooks";

const Navbar: React.FC<{ route: string }> = ({ route }) => {
  const [logoType, setLogoType] = useState<
    "primary" | "pools" | "factories" | "indices"
  >("primary");
  const [navOpen, setNavOpen] = useState<boolean>(false);
  const [navColour, setNavColour] = useState<string>("");
  const [navBackdrop, setNavBackdrop] = useState<boolean>(true);
  const [hamburgerColour, setHamburgerColour] = useState<string>("");
  const [currentSection, setCurrentSection] = useState<string>("");
  const [desktopProductsDropdownOpen, setDesktopProductsDropdownOpen] =
    useState<boolean>(false);
  const [mobileProductsDropdownOpen, setMobileProductsDropdownOpen] =
    useState<boolean>(false);
  const [y, setY] = useState<number>(0);
  const [visible, setVisible] = useState<boolean>(true);
  const whiteStyles = "text-white";
  const blueStyles = "text-action-active";
  const solidBlueStyles = "text-action-active";
  const [dropdownOpen, setDropdownOpen] = useState<boolean>(false);

  const handleDropdownOpen = () => {
    setDesktopProductsDropdownOpen(false);
    setDropdownOpen(true);
  };

  const handleDropdownClose = () => {
    setDropdownOpen(false);
  };

  const handleDesktopProductsDropdownOpen = () => {
    setDropdownOpen(false); // Close other dropdown when open
    setDesktopProductsDropdownOpen(true);
  };

  const handleDesktopProductsDropdownClose = () => {
    setDesktopProductsDropdownOpen(false);
  };

  const handleMobileProductsDropdownToggle = () => {
    setMobileProductsDropdownOpen(!mobileProductsDropdownOpen);
  };

  const handleResize = () => {
    if (!isMobile()) {
      setNavOpen(false);
      setMobileProductsDropdownOpen(false);
    }
  };

  const handleScroll = () => {
    if (window.scrollY >= 1 || isMobile()) {
      setNavBackdrop(true);
    } else {
      setNavBackdrop(false);
    }
  };

  const handleClose = () => {
    setTimeout(() => {
      setNavOpen(false);
      setMobileProductsDropdownOpen(false);
    }, 500);
  };

  const toggleNavMenu = () => {
    setNavOpen(!navOpen);
    setMobileProductsDropdownOpen(false);
  };

  const handleNavigation = useCallback(
    (e) => {
      const window = e.currentTarget;
      if (y > window.scrollY) {
        setVisible(true);
      } else if (y < window.scrollY) {
        setVisible(false);
        setDropdownOpen(false);
      }
      setY(window.scrollY);
    },
    [y]
  );

  const getLogoType = () => {
    switch (route) {
      case "/pools":
        setLogoType("pools");
        break;
      case "/factories":
        setLogoType("factories");
        break;
      case "/indices":
        setLogoType("indices");
        break;
      default:
        setLogoType("primary");
        break;
    }
  };

  useEffect(() => {
    if (navOpen) {
      disableScroll();
    } else {
      changeNavColour(
        route,
        currentSection,
        blueStyles,
        whiteStyles,
        solidBlueStyles,
        setHamburgerColour,
        setNavColour
      );
      enableScroll();
    }
  }, [navOpen]);

  useEffect(() => {
    changeNavColour(
      route,
      currentSection,
      blueStyles,
      whiteStyles,
      solidBlueStyles,
      setHamburgerColour,
      setNavColour
    );
    getCurrentSection(route, setCurrentSection);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [handleResize]);

  useEffect(() => {
    setY(window.scrollY);
    handleScroll();
    window.addEventListener("scroll", (e) => {
      handleNavigation(e);
      handleScroll();
    });
    return () => {
      window.removeEventListener("scroll", (e) => {
        handleNavigation(e);
        handleScroll();
      });
    };
  }, [handleNavigation]);

  useEffect(() => {
    // Wait for page exit transition before setting nav bg and text colours
    let timeout = setTimeout(() => {
      changeNavColour(
        route,
        currentSection,
        blueStyles,
        whiteStyles,
        solidBlueStyles,
        setHamburgerColour,
        setNavColour
      );
    }, 300);
    getLogoType();
    getCurrentSection(route, setCurrentSection);
    window.addEventListener("scroll", () => {
      getCurrentSection(route, setCurrentSection);
    });
    return () => {
      clearTimeout(timeout);
      window.removeEventListener("scroll", () => {
        getCurrentSection(route, setCurrentSection);
      });
    };
  }, [route]);

  useEffect(() => {
    changeNavColour(
      route,
      currentSection,
      blueStyles,
      whiteStyles,
      solidBlueStyles,
      setHamburgerColour,
      setNavColour
    );
  }, [currentSection]);

  // Handle click/tap outside to close modals
  const productDropdownRef = useRef<HTMLDivElement>(null);
  handleOutsideClick(productDropdownRef, handleDesktopProductsDropdownClose);

  const launchDropdownRef = useRef<HTMLDivElement>(null);
  handleOutsideClick(launchDropdownRef, handleDropdownClose);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 z-40 flex h-[65px] w-full transform-gpu items-center backdrop-blur-md transition-all duration-300 md:h-[52px]
        ${navBackdrop ? "backdrop-blur-md" : "backdrop-blur-0"}
        ${
          !navOpen && isMobile()
            ? `${navColour} delay-[600ms]`
            : isMobile()
            ? `text-white`
            : `${navColour}`
        }
        ${visible ? "visible" : "md:invisible md:-translate-y-[52px]"}`}
      >
        <Container className="flex items-center justify-between">
          {/* {
            {
              Logos: brandComponents.logos,
              Colors: brandComponents.colours,
              "Support Graphics": brandComponents.graphics,
              Typography: brandComponents.typography,
              All: (
                <>
                  {brandComponents.logos}
                  {brandComponents.colours}
                  {brandComponents.graphics}
                  {brandComponents.typography}
                </>
              ),
            }[category]
          } */}
          <Logo type={logoType} onClickAction={handleClose} />
          <div className="hidden items-center md:flex">
            <div
              className="relative mr-6"
              ref={productDropdownRef}
              onMouseEnter={handleDesktopProductsDropdownOpen}
            >
              <button className="text-sm">{links[1].label}</button>
              <ProductsDropdown
                desktopProductsDropdownOpen={desktopProductsDropdownOpen}
                handleDesktopProductsDropdownClose={
                  handleDesktopProductsDropdownClose
                }
              />
            </div>
            {links.slice(2, links.length).map((link, i) => (
              <NavLink href={link.href} key={i}>
                {link.label}
              </NavLink>
            ))}
            <div
              className="relative"
              onMouseEnter={handleDropdownOpen}
              ref={launchDropdownRef}
            >
              <LaunchAppButton
                dropdownOpen={dropdownOpen}
                navColour={navColour}
              />
              <LaunchDropdown
                dropdownOpen={dropdownOpen}
                handleDropdownClose={handleDropdownClose}
              />
            </div>
          </div>
          <HamburgerMenu
            navOpen={navOpen}
            hamburgerColour={hamburgerColour}
            toggleNavMenu={toggleNavMenu}
          />
        </Container>
      </nav>
      <MobileNav
        mobileProductsDropdownOpen={mobileProductsDropdownOpen}
        navOpen={navOpen}
        handleClose={handleClose}
        handleMobileProductsDropdownToggle={handleMobileProductsDropdownToggle}
        links={links}
      />
    </>
  );
};

export default Navbar;
