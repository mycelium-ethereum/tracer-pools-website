import Banner from "@/components/Pools/Banner";
import BuildPortfolio from "@/components/Pools/BuildPortfolio";
import ExposureSlider from "@/components/Pools/ExposureSlider";
import Integration from "@/components/Pools/Integration";
import MechanismDesign from "@/components/Pools/MechanismDesign";
import SEO from "@/components/Shared/SEO";

const PoolsPage: React.FC<{}> = () => {
  return (
    <>
      <SEO title="Pools" />
      <Banner />
      <ExposureSlider />
      <MechanismDesign />
      <BuildPortfolio />
      <Integration />
    </>
  );
};

export default PoolsPage;
