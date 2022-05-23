import { useRef } from "react";
import { useRouter } from "next/router";
import SEO from "@components/Shared/SEO";
import Container from "@components/Shared/Container";
import PageHeader from "@components/Shared/PageHeader";
import PageSection from "@components/Shared/Section";
import SidebarWrapper from "@components/Shared/SidebarWrapper";
import LegalSidebarContent from "@components/Legal/Texts/LegalSidebarContent";
import TermsOfUseText from "@components/Legal/Texts/TermsOfUseText";
import { legalSeoDesc } from "@components/Shared/presets";

const TermsOfUsePage = () => {
  const route = useRouter().pathname;
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <>
      <SEO title="Terms of Use" description={legalSeoDesc} />
      <PageSection>
        <Container className="text-tertiary">
          <div className="max-w-[880px]">
            <PageHeader title="Terms of Use" subheading="{Quick summary}" />
            <TermsOfUseText containerRef={containerRef} />
          </div>
        </Container>
        <SidebarWrapper bodyTextRef={containerRef}>
          <LegalSidebarContent route={route} />
        </SidebarWrapper>
      </PageSection>
    </>
  );
};

export default TermsOfUsePage;
