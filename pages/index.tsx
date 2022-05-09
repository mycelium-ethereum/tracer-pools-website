import Banner from "@/components/Home/Banner";
import DataFeeds from "@/components/Home/DataFeeds";
import AccessibleMarkets from "@/components/Home/AccessibleMarkets";
import PerpetualPools from "@/components/Home/PerpetualPools";
// import Railroads from "@/components/Home/Railroads";
import SEO from "@/components/Shared/SEO";
import Factories from "@/components/Home/Factories";
import Partners from "@/components/Home/Partners";

const IndexPage: React.FC<{}> = () => {
  return (
    <>
      <SEO title="Home" />
      <Banner />
      <AccessibleMarkets />
      {/* <Railroads /> */}
      <PerpetualPools />
      <Factories />
      <DataFeeds />
      <Partners />
    </>
  );
};

export default IndexPage;
