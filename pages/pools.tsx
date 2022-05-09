import Banner from "@/components/Pools/Banner";
import ExposureSlider from "@/components/Pools/ExposureSlider";
import MechanismDesign from "@/components/Pools/MechanismDesign";
import SEO from "@/components/Shared/SEO";

const PoolsPage: React.FC<{}> = () => {
  return (
    <>
      <SEO title="Pools" />
      <Banner />
      <ExposureSlider />
      <MechanismDesign />
    </>
  );
};

export default PoolsPage;
