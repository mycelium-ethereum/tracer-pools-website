import React from "react";

// Components
import Layout from "../components/layout";
import SEO from "../components/seo";
import Header from "../components/header";
import CareersTable from "../components/careers-table";

const CareersPage = () => {
  return (
    <>
      <SEO
        title="Careers"
        description="Tracer DAO is an open-source, smart contract protocol for derivatives. View open roles."
      />
      <Layout>
        <Header
          title={"Job Listings"}
          subheading={
            "View open roles below."
          }
        />
        <CareersTable />
      </Layout>
    </>
  );
};

export default CareersPage;
