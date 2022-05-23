import Banner from "@components/DAO/Banner";
import Community from "@components/DAO/Community";
import Governance from "@components/DAO/Governance";
import ServiceProviders from "@components/DAO/ServiceProviders";
import SEO from "@components/Shared/SEO";
import { daoSeoDesc } from "@components/Shared/presets";

const DAOPage: React.FC<{}> = ({}) => {
  return (
    <>
      <SEO title="DAO" description={daoSeoDesc} />
      <Banner />
      <Governance />
      <Community />
      <ServiceProviders />
    </>
  );
};

export default DAOPage;
