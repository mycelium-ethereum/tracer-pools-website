import { useEffect, useState } from "react";
import Container from "@components/Shared/Container";
import Category from "@components/Shared/Footer/Category";
import PageLink from "@components/Shared/PageLink";
import SocialLinks from "@components/Shared/Footer/SocialLinks";
import CopyrightYear from "@components/Shared/CopyrightYear";
import TracerLogoSVG from "@components/SVG/TracerLogoSVG";
import {
  categoryNames,
  socialLinks,
  tracerDAOCategory,
  productCategory,
  learnCategory,
  contributeCategory,
  governCategory,
  connectCategory,
} from "@components/Shared/Footer/presets";

const Footer: React.FC<{ route: string }> = ({ route }) => {
  const [background, setBackground] = useState("bg-white");
  const categoryArr = [
    tracerDAOCategory,
    productCategory,
    learnCategory,
    contributeCategory,
    governCategory,
    connectCategory,
  ];

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
      className={`relative z-10 h-1/2 w-full overflow-hidden py-[77px] text-action-active ${background}`}
    >
      <Container>
        <div className="mb-[75px] flex flex-col items-start justify-between pr-8 md:pr-0 lg:flex-row">
          <PageLink href="/">
            <TracerLogoSVG className="mb-11 h-[26px] w-[112px] lg:mr-20 lg:mb-0" />
          </PageLink>
          <div className="grid max-w-[1045px] flex-grow transform grid-cols-2 gap-x-[75px] gap-y-12 sm:grid-cols-3 md:mt-0 lg:mt-12 lg:translate-x-[95px] xl:w-max xl:translate-x-[40px] xl:grid-cols-6">
            {categoryNames.map((category, i) => {
              return (
                <Category
                  key={i}
                  route={route}
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
          <CopyrightYear className="mt-5 sm:mt-0" />
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
