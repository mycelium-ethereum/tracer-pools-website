import CareersBanner from "@/components/Careers/CareersBanner";
import CareersTable from "@/components/Careers/CareersTable";
import Container from "@/components/Shared/Container";
import PageHeader from "@/components/Shared/PageHeader";
import PageSection from "@/components/Shared/Section";
import SEO from "@/components/Shared/SEO";

const CareersPage: React.FC<{ posts: any }> = ({ posts }) => {
  return (
    <>
      <SEO title="Careers" />
      <PageSection>
        <Container>
          <PageHeader
            title="Job Listings"
            subheading="View open roles for the Core Tracer team."
          />
          <CareersTable />
          <CareersBanner />
        </Container>
      </PageSection>
    </>
  );
};

export default CareersPage;
