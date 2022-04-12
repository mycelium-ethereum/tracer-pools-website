import Banner from "@/components/Home/Banner";
import SEO from "@/components/Shared/SEO";

const IndexPage: React.FC<{}> = () => {
  return (
    <>
      <SEO title="Home" />
      <Banner />
    </>
  );
};

export default IndexPage;
