// import Link from "next/link";
import Container from "@/components/Shared/Container";
import NavLink from "@/components/Shared/Navbar/NavLink";
// import SocialLinks from "./SocialLinks";
// import HamburgerMenu from "@/components/Shared/Navbar/HamburgerMenu";
// import MobileNav from "@/components/Shared/Navbar/MobileNav";
import { useCallback, useEffect, useState } from "react";
import { disableScroll, enableScroll, isCollapsed } from "@/lib/helpers";
import Logo from "@/components/Shared/Logo";
import LaunchAppButton from "./LaunchAppButton";

const Navbar: React.FC<{}> = ({}) => {
  const [navOpen, setNavOpen] = useState<boolean>(false);
  const [navBg, setNavBg] = useState<boolean>(false);
  const [y, setY] = useState<number>(0);
  const [visible, setVisible] = useState<boolean>(true);
  const links = [
    // { label: "Home", href: "/" },
    { label: "Products", href: "/" },
    { label: "Learn", href: "/" },
    { label: "Blog", href: "/" },
    { label: "Community", href: "/" },
  ];

  const isMobile = () => {
    return window.innerWidth < 1280;
  };

  const handleResize = () => {
    if (!isMobile()) {
      setNavOpen(false);
    }
  };

  const handleScroll = () => {
    const scrollHeight = document.documentElement.scrollTop;
    if (scrollHeight > 1 || isCollapsed()) {
      setNavBg(false);
    } else if (!isCollapsed() && scrollHeight < 1) {
      setNavBg(true);
    }
    if (!isCollapsed()) {
      setNavOpen(false);
    }
  };

  const handleClose = () => {
    setTimeout(() => {
      setNavOpen(false);
    }, 500);
  };

  useEffect(() => {
    if (navOpen) {
      disableScroll();
    } else {
      enableScroll();
    }
  }, [navOpen]);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 z-40 flex h-[70px] w-full transform-gpu items-center transition-all duration-300 ${
          navBg ? "bg-opacity-0" : "bg-opacity-50"
        }`}
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
          {/* <HamburgerMenu navOpen={navOpen} setNavOpen={setNavOpen} /> */}
        </Container>
      </nav>
      {/* <MobileNav navOpen={navOpen} handleClose={handleClose} /> */}
    </>
  );
};

export default Navbar;
