import { useRef } from "react";
import { useRouter } from "next/router";
import PrivacyPolicyText from "@components/Legal/Texts/PrivacyPolicyText";
import Container from "@components/Shared/Container";
import PageHeader from "@components/Shared/PageHeader";
import PageSection from "@components/Shared/Section";
import SEO from "@components/Shared/SEO";
import SidebarWrapper from "@components/Shared/SidebarWrapper";
import LegalSidebarContent from "@components/Legal/Texts/LegalSidebarContent";
import { legalSeoDesc } from "@pages/presets";

const PrivacyPolicyPage = () => {
  const route = useRouter().pathname;
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <>
      <SEO title="Privacy Policy" description={legalSeoDesc} />
      <PageSection>
        <Container className="text-tertiary">
          <div className="max-w-[880px]">
            <PageHeader title="Privacy Policy" subheading="{Quick summary}" />
            <PrivacyPolicyText containerRef={containerRef} />
          </div>
        </Container>
        <SidebarWrapper bodyTextRef={containerRef}>
          <LegalSidebarContent route={route} />
        </SidebarWrapper>
      </PageSection>
    </>
  );
};

export default PrivacyPolicyPage;
