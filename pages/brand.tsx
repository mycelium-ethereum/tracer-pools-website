import { useRef, useState } from "react";
import BrandFilters from "@components/Brand/BrandFilters";
import {
  tags,
  logos,
  graphics,
  colours,
  headings,
} from "@components/Brand/presets";
import SEO from "@components/Shared/SEO";
import PageHeader from "@components/Shared/PageHeader";
import Container from "@components/Shared/Container";
import PageSection from "@components/Shared/Section";
import LogoAssets from "@components/Brand/Sections/LogoAssets";
import ColourAssets from "@components/Brand/Sections/ColourAssets";
import TypographyAssets from "@components/Brand/Sections/TypographyAssets";
import GraphicAssets from "@components/Brand/Sections/GraphicAssets";
import { brandSeoDesc } from "@components/Shared/presets";

const BrandPage = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [category, setCategory] = useState("All");
  const brandComponents = {
    logos: (
      <LogoAssets
        heading={headings.logos.heading}
        subheading={headings.logos.subheading}
        logos={logos}
      />
    ),
    colours: (
      <ColourAssets
        heading={headings.colours.heading}
        subheading={headings.colours.subheading}
        colours={colours}
      />
    ),
    graphics: (
      <GraphicAssets
        heading={headings.graphics.heading}
        subheading={headings.graphics.subheading}
        graphics={graphics}
      />
    ),
    typography: (
      <TypographyAssets
        heading={headings.typography.heading}
        subheading={headings.typography.subheading}
      />
    ),
  };

  return (
    <>
      <SEO title="Brand" description={brandSeoDesc} />
      <PageSection className="bg-white">
        <Container>
          <PageHeader
            title={"Brand Assets"}
            subheading={"Download the Tracer brand elements for usage"}
          />
          <BrandFilters
            tags={tags}
            category={category}
            setCategory={setCategory}
            containerRef={containerRef}
          />
          <div ref={containerRef} className="transition-opacity duration-300">
            {
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
            }
          </div>
        </Container>
      </PageSection>
    </>
  );
};

export default BrandPage;
