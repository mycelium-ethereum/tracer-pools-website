import SEO from "@components/Shared/SEO";
import Banner from "@components/Factories/Banner";
import Model from "@components/Factories/Model";
import DataFeed from "@components/Factories/DataFeed";
import CurrentFactories from "@components/Factories/CurrentFactories";
import Integration from "@components/Factories/Integration";

const FactoriesPage: React.FC<{}> = () => {
  return (
    <>
      <SEO title="Factories" />
      <Banner />
      <Model />
      <DataFeed />
      <CurrentFactories />
      <Integration />
    </>
  );
};

export default FactoriesPage;
