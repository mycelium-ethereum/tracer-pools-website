import Banner from "@/components/Pools/Banner";
import Exposure from "@/components/Pools/Exposure";
import SEO from "@/components/Shared/SEO";

const PoolsPage: React.FC<{}> = () => {
  return (
    <>
      <SEO title="Pools" />
      <Banner />
      <Exposure />
    </>
  );
};

export default PoolsPage;
