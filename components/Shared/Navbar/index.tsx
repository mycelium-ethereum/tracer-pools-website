import { useCallback, useEffect, useState } from "react";
import Container from "@components/Shared/Container";
import NavLink from "@components/Shared/Navbar/NavLink";
import HamburgerMenu from "@components/Shared/Navbar/HamburgerMenu";
import MobileNav from "@components/Shared/Navbar/MobileNav";
import Logo from "@components/Shared/Logo";
import LaunchAppButton from "@components/Shared/Navbar/LaunchAppButton";
import LaunchDropdown from "@components/Shared/Navbar/LaunchDropdown";
import ProductsDropdown from "@components/Shared/Navbar/ProductsDropdown";
import { disableScroll, enableScroll, isMobile } from "@lib/helpers";
import { links } from "@components/Shared/Navbar/presets";

const Navbar: React.FC<{ route: string }> = ({ route }) => {
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
    if (window.scrollY >= 1) {
      setNavBackdrop(true);
    } else {
      setNavBackdrop(false);
    }
  };

  const getCurrentSection = () => {
    if (route === "/" || route === "/pools") {
      const sections: NodeListOf<HTMLElement> =
        document.querySelectorAll("section");
      // Check each section to see if it is above or below the top of the viewport
      sections.forEach((section) => {
        let offset = section.offsetTop;
        let actualPos = offset - document.documentElement.scrollTop;
        let id = section.getAttribute("id");
        if (id && actualPos < 30 && actualPos + section.clientHeight > 30) {
          id = id.replace("#", "");
          setCurrentSection(id);
        }
      });
    }
  };

  const changeNavColour = () => {
    let navTextColour = "";
    if (route === "/") {
      switch (currentSection) {
        case "section-1":
          navTextColour = whiteStyles;
          break;
        case "section-2":
          navTextColour = blueStyles;
          break;
        case "section-3":
          navTextColour = whiteStyles;
          break;
        case "section-4":
          navTextColour = whiteStyles;
          break;
        case "section-5":
          navTextColour = whiteStyles;
          break;
        case "section-6":
          navTextColour = whiteStyles;
          break;
        case "section-6":
          navTextColour = whiteStyles;
          break;
        default:
          navTextColour = whiteStyles;
          break;
      }
    } else if (route === "/pools") {
      switch (currentSection) {
        case "section-1":
          navTextColour = whiteStyles;
          break;
        case "section-2":
          navTextColour = blueStyles;
          break;
        case "section-3":
          navTextColour = blueStyles;
          break;
        case "section-4":
          navTextColour = blueStyles;
          break;
        case "section-5":
          navTextColour = blueStyles;
          break;
        default:
          navTextColour = whiteStyles;
          break;
      }
    } else {
      navTextColour = solidBlueStyles;
    }
    setHamburgerColour(
      navTextColour === whiteStyles ? "bg-white" : "bg-action-active"
    );
    setNavColour(navTextColour);
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

  useEffect(() => {
    if (navOpen) {
      disableScroll();
    } else {
      changeNavColour();
      enableScroll();
    }
  }, [navOpen]);

  useEffect(() => {
    changeNavColour();
    getCurrentSection();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [handleResize]);

  useEffect(() => {
    setY(window.scrollY);
    window.addEventListener("scroll", (e) => {
      handleNavigation(e);
      handleScroll();
    });
    return () => {
      window.removeEventListener("scroll", handleNavigation && handleScroll);
    };
  }, [handleNavigation]);

  useEffect(() => {
    // Wait for page exit transition before setting nav bg and text colours
    let timeout = setTimeout(() => {
      changeNavColour();
    }, 300);
    getCurrentSection();
    window.addEventListener("scroll", () => {
      getCurrentSection();
    });
    return () => {
      clearTimeout(timeout);
      window.removeEventListener("scroll", () => {
        getCurrentSection();
      });
    };
  }, [route]);

  useEffect(() => {
    changeNavColour();
  }, [currentSection]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 z-40 flex h-[70px] w-full transform-gpu items-center backdrop-blur-md transition-all duration-300
        ${navBackdrop ? "backdrop-blur-md" : "backdrop-blur-0"}
        ${
          !navOpen && isMobile()
            ? `${navColour}`
            : isMobile()
            ? `text-white`
            : `${navColour}`
        }
        ${visible ? "visible" : "lg:invisible lg:-translate-y-[70px]"}`}
      >
        <Container className="flex items-center justify-between">
          <Logo onClickAction={handleClose} />
          <div className="hidden items-center md:flex">
            <div
              className="relative mr-6"
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
            <div className="relative" onMouseEnter={handleDropdownOpen}>
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
