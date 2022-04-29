import { useState } from "react";
import BrandFilters from "@/components/Brand/BrandFilters";
import {
  logos,
  graphics,
  elements3D,
  colours,
  headings,
} from "@/components/Brand/presets";
import SEO from "@/components/Shared/SEO";
import PageHeader from "@/components/Shared/PageHeader";
import Container from "@/components/Shared/Container";
import PageSection from "@/components/Shared/Section";
import LogoAssets from "@/components/Brand/Sections/LogoAssets";
import ColourAssets from "@/components/Brand/Sections/ColourAssets";
import TypographyAssets from "@/components/Brand/Sections/TypographyAssets";
import GraphicAssets from "@/components/Brand/Sections/GraphicAssets";
import Element3DAssets from "@/components/Brand/Sections/Element3DAssets";

const BrandPage = () => {
  const [category, setCategory] = useState("all");
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
    elements3D: (
      <Element3DAssets
        heading={headings.elements3D.heading}
        subheading={headings.elements3D.subheading}
        elements3D={elements3D}
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
      <SEO
        title="Brand"
        description="Download the Tracer brand elements for usage."
      />

      <PageSection>
        <Container>
          <PageHeader
            title={"Brand Assets"}
            subheading={"Download the Tracer brand elements for usage"}
          />
          <BrandFilters category={category} setCategory={setCategory} />
          {
            {
              logos: brandComponents.logos,
              colours: brandComponents.colours,
              graphics: brandComponents.graphics,
              elements3D: brandComponents.elements3D,
              typography: brandComponents.typography,
              all: (
                <>
                  {brandComponents.logos}
                  {brandComponents.colours}
                  {brandComponents.graphics}
                  {brandComponents.typography}
                </>
              ),
            }[category]
          }
        </Container>
      </PageSection>
    </>
  );
};

export default BrandPage;
