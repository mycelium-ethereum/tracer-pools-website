import Banner from "@/components/Home/Banner";
import DecentralisedDerivatives from "@/components/Home/DecentralisedDerivatives";
import MoreLeverage from "@/components/Home/MoreLeverage";
import NextEvolution from "@/components/Home/NextEvolution";
import SEO from "@/components/Shared/SEO";

const IndexPage: React.FC<{}> = () => {
  return (
    <>
      <SEO title="Home" />
      <Banner />
      <DecentralisedDerivatives />
      <NextEvolution />
      <MoreLeverage />
    </>
  );
};

export default IndexPage;
