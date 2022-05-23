import { useRef } from "react";
import { useRouter } from "next/router";
import SEO from "@components/Shared/SEO";
import Container from "@components/Shared/Container";
import PageHeader from "@components/Shared/PageHeader";
import PageSection from "@components/Shared/Section";
import SidebarWrapper from "@components/Shared/SidebarWrapper";
import LegalSidebarContent from "@components/Legal/Texts/LegalSidebarContent";
import ParticipationAgreementText from "@components/Legal/Texts/ParticipationAgreementText";
import { legalSeoDesc } from "@components/Shared/presets";

const ParticipationAgreementPage = () => {
  const route = useRouter().pathname;
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <>
      <SEO title="Participation Agreement" description={legalSeoDesc} />
      <PageSection>
        <Container className="text-tertiary">
          <div className="max-w-[880px]">
            <PageHeader
              title="Tracer DAO Participation Agreement"
              subheading='(the "Agreement")'
            />
            <ParticipationAgreementText containerRef={containerRef} />
          </div>
        </Container>
        <SidebarWrapper bodyTextRef={containerRef}>
          <LegalSidebarContent route={route} />
        </SidebarWrapper>
      </PageSection>
    </>
  );
};

export default ParticipationAgreementPage;
