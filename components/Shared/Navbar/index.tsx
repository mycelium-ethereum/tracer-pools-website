// import Link from "next/link";
import Container from "@components/Shared/Container";
import NavLink from "@components/Shared/Navbar/NavLink";
import HamburgerMenu from "@components/Shared/Navbar/HamburgerMenu";
// import MobileNav from "@components/Shared/Navbar/MobileNav";
import { useCallback, useEffect, useState } from "react";
import { disableScroll, enableScroll, isCollapsed } from "@lib/helpers";
import Logo from "@components/Shared/Logo";
import LaunchAppButton from "@components/Shared/Navbar/LaunchAppButton";

const Navbar: React.FC<{ route: string }> = ({ route }) => {
  const [navOpen, setNavOpen] = useState<boolean>(false);
  const [navColour, setNavColour] = useState<string>("");
  const [currentSection, setCurrentSection] = useState<string>("");
  const [y, setY] = useState<number>(0);
  const [visible, setVisible] = useState<boolean>(true);
  const whiteStyles = "text-white lg:[backdrop-filter:unset]";
  const blueStyles = "text-action-active lg:[backdrop-filter:unset]";
  const solidBlueStyles = "text-action-active";

  const links = [
    { label: "Products", href: "/products" },
    { label: "Learn", href: "/learn" },
    { label: "Blog", href: "/radar" },
    { label: "DAO", href: "/dao" },
  ];

  const isMobile = () => {
    return window.innerWidth < 1280;
  };

  const handleResize = () => {
    if (!isMobile()) {
      setNavOpen(false);
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
          navTextColour = blueStyles;
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
    setNavColour(navTextColour);
  };

  const handleClose = () => {
    setTimeout(() => {
      setNavOpen(false);
    }, 500);
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
    setTimeout(() => {
      changeNavColour();
    }, 300);
    getCurrentSection();
    window.addEventListener("scroll", () => {
      getCurrentSection();
    });
    return () => {
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
        className={`fixed top-0 left-0 z-40 flex h-[70px] w-full transform-gpu items-center transition-all duration-300 [backdrop-filter:blur(10px)] ${navColour}
       ${visible ? "visible" : "xl:invisible xl:-translate-y-[70px]"}`}
      >
        <Container className="flex items-center justify-between">
          <Logo onClickAction={handleClose} />
          <div className="hidden items-center xl:flex">
            {links.map((link, i) => (
              <NavLink href={link.href} key={i}>
                {link.label}
              </NavLink>
            ))}
            <LaunchAppButton />
          </div>
          <HamburgerMenu navOpen={navOpen} setNavOpen={setNavOpen} />
        </Container>
      </nav>
      {/* <MobileNav navOpen={navOpen} handleClose={handleClose} /> */}
    </>
  );
};

export default Navbar;
