import Banner from "@components/Home/Banner";
import Indices from "@components/Home/Indices";
import AccessibleMarkets from "@components/Home/AccessibleMarkets";
import PerpetualPools from "@components/Home/PerpetualPools";
import SEO from "@components/Shared/SEO";
import Factories from "@components/Home/Factories";
import Partners from "@components/Home/Partners";
import { homepageSeoDesc } from "@components/Shared/presets";

const HomePage: React.FC<{}> = () => {
  return (
    <>
      <SEO title="Home" description={homepageSeoDesc} />
      <Banner />
      <AccessibleMarkets />
      <PerpetualPools />
      <Factories />
      <Indices />
      <Partners />
    </>
  );
};

export default HomePage;
