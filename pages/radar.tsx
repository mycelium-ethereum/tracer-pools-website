import Container from "@/components/Shared/Container";
import PageHeader from "@/components/Shared/PageHeader";
import PageSection from "@/components/Shared/Section";
import SEO from "@/components/Shared/SEO";

const BlogPage: React.FC<{}> = () => {
  return (
    <>
      <SEO title="Home" />
      <PageSection>
        <Container>
          <PageHeader
            title="Blog"
            subheading="Read the latest news for Tracer"
          />
        </Container>
      </PageSection>
    </>
  );
};

export default BlogPage;
