import Container from "@components/Shared/Container";
import UnderlinedHeading from "@components/Shared/Heading/UnderlinedHeading";
import PageSection from "@components/Shared/Section";
import { serviceProviders } from "@components/DAO/presets";

const ServiceProviders: React.FC<{}> = () => {
  return (
    <PageSection className="bg-secondary py-[70px]">
      <Container className="text-action-active">
        <UnderlinedHeading
          lineColor="lightblue"
          hideBullet
          className="max-w-[294px]"
        >
          SERVICE PROVIDERS
        </UnderlinedHeading>
        <div className="flex max-w-[900px] flex-wrap">
          {serviceProviders.map((provider) => (
            <a href={provider.link} target="_blank" rel="noopener noreferrer">
              <img
                src={`/img/logos/${provider.image}`}
                alt={provider.alt}
                className="mr-12 mb-8"
              />
            </a>
          ))}
        </div>
      </Container>
    </PageSection>
  );
};

export default ServiceProviders;
