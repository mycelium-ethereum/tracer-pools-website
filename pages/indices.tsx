import SEO from "@components/Shared/SEO";
import Banner from "@components/Indices/Banner";
import GetPaid from "@components/Indices/GetPaid";
import CreateStrategies from "@components/Indices/CreateStrategies";
import UnlockMarket from "@components/Indices/UnlockMarket";
import HowItWorks from "@components/Indices/HowItWorks";
import InfoPoints from "@components/Indices/InfoPoints";
import { indicesSeoDesc } from "@pages/presets";

const IndicesPage: React.FC<{}> = () => {
  return (
    <>
      <SEO title="Indices" description={indicesSeoDesc} />
      <Banner />
      <GetPaid />
      <CreateStrategies />
      <UnlockMarket />
      <HowItWorks />
      <InfoPoints />
    </>
  );
};

export default IndicesPage;
