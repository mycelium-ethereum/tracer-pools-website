// import Link from "next/link";
import Container from "@components/Shared/Container";
import NavLink from "@components/Shared/Navbar/NavLink";
import HamburgerMenu from "@components/Shared/Navbar/HamburgerMenu";
import MobileNav from "@components/Shared/Navbar/MobileNav";
import Logo from "@components/Shared/Logo";
import LaunchAppButton from "@components/Shared/Navbar/LaunchAppButton";
import { useCallback, useEffect, useState } from "react";
import { disableScroll, enableScroll, isMobile } from "@lib/helpers";
import { links } from "@components/Shared/Navbar/presets";

const Navbar: React.FC<{ route: string }> = ({ route }) => {
  const [navOpen, setNavOpen] = useState<boolean>(false);
  const [navColour, setNavColour] = useState<string>("");
  const [hamburgerColour, setHamburgerColour] = useState<string>("");
  const [currentSection, setCurrentSection] = useState<string>("");
  const [y, setY] = useState<number>(0);
  const [visible, setVisible] = useState<boolean>(true);
  const whiteStyles = "text-white";
  const blueStyles = "text-action-active bg-tracer-navy bg-opacity-20";
  const solidBlueStyles = "text-action-active";

  const [dropdownOpen, setDropdownOpen] = useState<boolean>(false);

  const handleDropdownToggle = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleResize = () => {
    if (!isMobile()) {
      setNavOpen(false);
      setDropdownOpen(false);
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
      setDropdownOpen(false);
    }, 500);
  };

  const toggleNavMenu = () => {
    setNavOpen(!navOpen);
    setDropdownOpen(false);
  };

  const handleNavigation = useCallback(
    (e) => {
      const window = e.currentTarget;
      if (y > window.scrollY) {
        setVisible(true);
      } else if (y < window.scrollY) {
        setVisible(false);
      }
      setY(window.scrollY);
    },
    [y]
  );

  useEffect(() => {
    setY(window.scrollY);
    window.addEventListener("scroll", handleNavigation);

    return () => {
      window.removeEventListener("scroll", handleNavigation);
    };
  }, [handleNavigation]);

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
        className={`fixed top-0 left-0 z-40 flex h-[70px] w-full transform-gpu items-center transition-all duration-300
        ${
          !navOpen && isMobile()
            ? `backdrop-blur-md ${navColour}`
            : isMobile()
            ? `text-white backdrop-blur-0`
            : `${navColour} backdrop-blur-md`
        }
        ${visible ? "visible" : "md:invisible md:-translate-y-[70px]"}`}
      >
        <Container className="flex items-center justify-between">
          <Logo onClickAction={handleClose} />
          <div className="hidden items-center md:flex">
            {links.slice(1, links.length).map((link, i) => (
              <NavLink href={link.href} key={i}>
                {link.label}
              </NavLink>
            ))}
            <LaunchAppButton />
          </div>
          <HamburgerMenu
            navOpen={navOpen}
            hamburgerColour={hamburgerColour}
            toggleNavMenu={toggleNavMenu}
          />
        </Container>
      </nav>
      <MobileNav
        dropdownOpen={dropdownOpen}
        navOpen={navOpen}
        handleClose={handleClose}
        handleDropdownToggle={handleDropdownToggle}
        links={links}
      />
    </>
  );
};

export default Navbar;
