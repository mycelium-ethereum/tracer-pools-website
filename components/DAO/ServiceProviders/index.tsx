import Container from "@components/Shared/Container";
import UnderlinedHeading from "@components/Shared/Heading/UnderlinedHeading";
import PageSection from "@components/Shared/Section";
import ProviderLogo from "@components/DAO/ServiceProviders/ProviderLogo";
import { serviceProviders } from "@components/DAO/presets";

const ServiceProviders: React.FC<{}> = () => {
  return (
    <PageSection className="bg-secondary pt-10 lg:pt-20 lg:pb-12">
      <Container className="text-action-active">
        <UnderlinedHeading
          lineColor="lightblue"
          hideBullet
          className="max-w-[294px]"
        >
          SERVICE PROVIDERS
        </UnderlinedHeading>
        <div className="flex max-w-[900px] flex-wrap justify-between sm:justify-start">
          {serviceProviders.map((provider, i) => (
            <ProviderLogo key={i} {...provider} />
          ))}
        </div>
      </Container>
    </PageSection>
  );
};

export default ServiceProviders;
