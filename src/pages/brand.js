import React, { useState } from "react";
import BrandFilters from "../components/brand-filters";
import BrandDownloadButton from "../components/brand-download-button";
import BrandAssetTile from "../components/brand-asset-tile";
import BrandColourTile from "../components/brand-colour-tile";
import BrandGraphicTile from "../components/brand-graphic-tile";
import {
  primaryLogos,
  primaryLogosStacked,
  logomarks,
  tracerDAOLogos,
  graphics,
  colours,
} from "../components/brand-assets";
// Components
import Layout from "../components/layout";
import SEO from "../components/seo";
import Header from "../components/header";
import Container from "../components/container";

const BrandPage = () => {
  const [category, setCategory] = useState("all");
  const brandAssetsArr = [
    primaryLogos,
    primaryLogosStacked,
    logomarks,
    tracerDAOLogos,
    colours,
    graphics,
  ];
  const AssetHeading = ({ heading, subheading }) => (
    <div className="my-7 md:my-10">
      <h2 className="mb-2.5 text-2xl text-tracer-700">{heading}</h2>
      <div className="text-[#828790]">{subheading}</div>
    </div>
  );

  const headings = [
    {
      heading: "Primary Logo",
      subheading: (
        <p>
          The Primary logo is the preferred logo to use when representing Tracer
        </p>
      ),
    },
    {
      heading: "Primary Logo Stacked",
      subheading: (
        <p>
          This logo should only be used when space doesn’t permit using the
          Primary Logo or for usage in a square format
        </p>
      ),
    },
    {
      heading: "Logomark",
      subheading: (
        <p>
          Usage of the Logomark is limited, where possible please use in
          conjunction with the Primary Logos
        </p>
      ),
    },
    {
      heading: "Tracer DAO",
      subheading: <p>Please use this logo when refering to the Tracer DAO</p>,
    },
    {
      heading: "Colors",
      subheading: (
        <p>
          To ensure correct Tracer is represented correctly please ensure use of
          colors is consistent
        </p>
      ),
    },
    {
      heading: "Support Graphics",
      subheading: (
        <p>
          Please use the support graphics when creating material for Tracer
          {/* For correct application please refer to the{" "}
          <a href="">Tracer Brand Guidelines</a> */}
        </p>
      ),
    },
    {
      heading: "Typography",
      subheading: (
        <p>For consistency please ensure correct typography is being used.</p>
      ),
    },
  ];

  return (
    <>
      <SEO
        title="Brand"
        description="Download the Tracer brand elements for usage."
      />
      <Layout>
        <Header
          title={"Brand Assets"}
          subheading={"Download the Tracer brand elements for usage"}
        />
        <section className="select-dark relative z-20 h-full w-full bg-white">
          <Container className="text-center xl:max-w-[1200px]">
            <BrandFilters setCategory={setCategory} />
            <div className="mx-auto mb-32 max-w-[705px]">
              <h2 className="mb-2.5 text-2xl text-tracer-700">
                Brand Guidelines
              </h2>
              <p className="mb-4 text-[#828790]">
                To ensure correct usage of the Tracer brand, please use the
                following Logos, Colors, Support Graphics and Typography.
                {/* For correct application and usage please refer to the downloadable
                Brand guidelines. */}
              </p>
              {/* <BrandDownloadButton blue>
                Download Brand Guidelines
              </BrandDownloadButton> */}
            </div>
            <div className="mb-32">
              {headings.slice(0, 6).map((content, i) => (
                <>
                  {content.heading !== "Colors" &&
                    content.heading !== "Support Graphics" && (
                      <div
                        className={`${
                          category === "all" || category === "logos"
                            ? "block"
                            : "hidden"
                        }`}
                      >
                        <AssetHeading
                          heading={content.heading}
                          subheading={content.subheading}
                        />
                        <div className="mb-10 flex grid-cols-3 flex-wrap justify-center gap-[30px] xl:grid">
                          {brandAssetsArr[i].map((item, i) => (
                            <BrandAssetTile key={i} item={item} index={i} />
                          ))}
                        </div>
                        {i === 3 && (
                          <BrandDownloadButton
                            blue
                            link="/img/brand/Tracer Brand Graphics.zip"
                            download
                          >
                            Download Complete Logo Set
                          </BrandDownloadButton>
                        )}
                      </div>
                    )}
                  {content.heading === "Colors" && (
                    <div
                      className={`${
                        category === "all" || category === "colors"
                          ? "block"
                          : "hidden"
                      }`}
                    >
                      <div className="md:mt-20 xl:mt-32">
                        <AssetHeading
                          heading={content.heading}
                          subheading={content.subheading}
                        />
                      </div>
                      <div className="flex flex-wrap justify-center xl:justify-between">
                        {brandAssetsArr[i].slice(0, 3).map((item, i) => (
                          <BrandColourTile key={i} item={item} />
                        ))}
                        {brandAssetsArr[i].slice(3, 7).map((item, i) => (
                          <BrandColourTile key={i} item={item} small />
                        ))}
                      </div>
                    </div>
                  )}
                  {content.heading === "Support Graphics" && (
                    <div
                      className={`${
                        category === "all" || category === "graphics"
                          ? "block"
                          : "hidden"
                      }`}
                    >
                      <div className="md:mt-20 xl:mt-32">
                        <AssetHeading
                          heading={content.heading}
                          subheading={content.subheading}
                        />
                      </div>
                      <div className="mb-10 flex flex-wrap justify-center">
                        {brandAssetsArr[i].slice(0, 3).map((item, i) => (
                          <BrandGraphicTile key={i} item={item} />
                        ))}
                        {brandAssetsArr[i].slice(3, 5).map((item, i) => (
                          <BrandGraphicTile key={i} item={item} />
                        ))}
                      </div>
                      <BrandDownloadButton
                        blue
                        download
                        link="/img/brand/Tracer Support Graphics.zip"
                      >
                        Download Support Graphic Set
                      </BrandDownloadButton>
                    </div>
                  )}
                </>
              ))}
            </div>
            <div className="pb-32 md:mt-20 xl:mt-32">
              <AssetHeading
                heading={headings[6].heading}
                subheading={headings[6].subheading}
              />
              <div className="relative h-80 w-full sm:h-[270px] xl:h-60">
                <span className="absolute left-1/2 block w-[859px] -translate-x-1/2 transform font-aileron text-[80px] leading-none text-[#828790] sm:w-[950px] xl:w-[2200px] xl:text-[120px]">
                  Leveraged exposure. No margins. No liquidations. A new
                  derivative primitive.
                </span>
              </div>
              <BrandDownloadButton
                className="my-7"
                link="https://fonts.adobe.com/fonts/aileron"
              >
                Download Aileron
              </BrandDownloadButton>
              <BrandDownloadButton
                blue
                link="https://www.fontsquirrel.com/fonts/aileron"
              >
                Aileron on Font Squirrel
              </BrandDownloadButton>
            </div>
          </Container>
        </section>
      </Layout>
    </>
  );
};

export default BrandPage;
