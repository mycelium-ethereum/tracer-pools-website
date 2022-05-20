import { useEffect, useState } from "react";
import Container from "@components/Shared/Container";
import PageLink from "@components/Shared/PageLink";
import SocialLinks from "@components/Shared/Footer/SocialLinks";
import CopyrightYear from "@components/Shared/CopyrightYear";
import TracerLogoSVG from "@components/SVG/TracerSVG";
import DesktopGrid from "@components/Shared/Footer/DesktopGrid";
import TabletGrid from "@components/Shared/Footer/TabletGrid";
import MobileGrid from "@components/Shared/Footer/MobileGrid";
import { socialLinks } from "@components/Shared/Footer/presets";

const Footer: React.FC<{ route: string }> = ({ route }) => {
  const [background, setBackground] = useState("bg-white");

  const getBackground = () => {
    switch (route) {
      case "/":
        setBackground("bg-tracer-navy");
        break;
      case "/pools":
        setBackground("bg-secondary");
        break;
      case "/learn":
        setBackground("bg-secondary");
        break;
      case "/dao":
        setBackground("bg-secondary");
        break;
      case "/factories":
        setBackground("bg-secondary");
        break;
      default:
        setBackground("bg-white");
        break;
    }
  };

  useEffect(() => {
    getBackground();
  }, [route]);

  return (
    <footer
      className={`relative z-10 h-1/2 w-full overflow-hidden pt-14 pb-8 text-action-active lg:pb-[68px] ${background}`}
    >
      <Container>
        <div className="mb-5 flex flex-col items-start justify-between pr-8 md:pr-0 lg:mb-[75px] lg:flex-row">
          <PageLink href="/">
            <TracerLogoSVG className="mb-11 h-[26px] w-[112px] lg:mr-20 lg:mb-0" />
          </PageLink>
          <DesktopGrid route={route} />
          <TabletGrid route={route} />
          <MobileGrid route={route} />
        </div>
        <div className="flex flex-col justify-between border-t border-action-active pt-5 sm:flex-row">
          {/* Social icons */}
          <SocialLinks links={socialLinks} />
          <CopyrightYear className="mt-5 sm:mt-0" />
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
