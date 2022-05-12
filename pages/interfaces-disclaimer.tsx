import { useRef } from "react";
import { useRouter } from "next/router";
import SEO from "@components/Shared/SEO";
import Container from "@components/Shared/Container";
import PageHeader from "@components/Shared/PageHeader";
import PageSection from "@components/Shared/Section";
import SidebarWrapper from "@components/Shared/SidebarWrapper";
import LegalSidebarContent from "@components/Legal/Texts/LegalSidebarContent";
import TermsOfUseText from "@components/Legal/Texts/TermsOfUseText";
import InterfacesDisclaimerText from "@components/Legal/Texts/InterfacesDisclaimerText";

const InterfacesDisclaimerPage = () => {
  const route = useRouter().pathname;
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <>
      <SEO title="Interfaces Disclaimer" />
      <PageSection>
        <Container className="text-tertiary">
          <div className="max-w-[880px]">
            <PageHeader
              title="Interfaces Disclaimer"
              subheading="{Quick summary}"
            />
            <InterfacesDisclaimerText containerRef={containerRef} />
          </div>
        </Container>
        <SidebarWrapper bodyTextRef={containerRef}>
          <LegalSidebarContent route={route} />
        </SidebarWrapper>
      </PageSection>
    </>
  );
};

export default InterfacesDisclaimerPage;
