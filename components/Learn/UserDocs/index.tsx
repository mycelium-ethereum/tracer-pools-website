import Container from "@components/Shared/Container";
import Button from "@components/Shared/Buttons/Button";
import Section from "@components/Shared/Section";
import LearnHeader from "@components/Learn/LearnHeader";
import { headerContent } from "@components/Learn/presets";

const UserDocs: React.FC<{}> = () => {
  return (
    <Section className="bg-white py-16 sm:py-20">
      <Container className="text-action-active">
        <LearnHeader {...headerContent.userDocs} />
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
