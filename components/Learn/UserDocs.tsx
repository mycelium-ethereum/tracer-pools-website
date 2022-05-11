import UnderlinedHeading from "@components/Shared/UnderlinedHeading";
import Container from "@components/Shared/Container";
import H2 from "@components/Shared/H2";
import Button from "@components/Shared/Button";
import Section from "@components/Shared/Section";

const UserDocs: React.FC<{}> = () => {
  return (
    <Section className="py-20">
      <Container className="text-action-active">
        <UnderlinedHeading
          hideBullet
          lineColor="lightblue"
          className="max-w-[294px]"
        >
          ACCESS USER DOCS
        </UnderlinedHeading>
        <H2 className="mb-6 max-w-[767px]">
          The home of Tracer’s
          <br /> documentation
        </H2>
        <Button
          lightBlueGradient
          outgoingLink="https://docs.tracer.finance/tracer/master"
        >
          Launch Docs
          <img
            src="/img/icons/gitbook.svg"
            className="ml-2 h-[17px] w-[17px]"
            alt="Github icon"
          />
        </Button>
      </Container>
    </Section>
  );
};

export default UserDocs;
