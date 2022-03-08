import React from "react";

// Components
import Layout from "../components/layout";
import SEO from "../components/seo";
import Header from "../components/header";
import CareersTable from "../components/careers-table";

const CareersPage = () => {
  return (
    <>
      <SEO title="Careers" description="Read the latest news for Tracer." />
      <Layout>
        <Header
          title={"Careers"}
          subheading={"Read the latest news on the Tracer Blog"}
        />
        <CareersTable />
      </Layout>
    </>
  );
};

export default CareersPage;
