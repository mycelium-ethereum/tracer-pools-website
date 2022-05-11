import SEO from "@components/Shared/SEO";
import TracerLibrary from "@components/Learn/TracerLibrary";
import UserGuides from "@components/Learn/UserGuides";
import UserDocs from "@components/Learn/UserDocs";
import TracerDrop from "@components/Learn/TracerDrop";

const LearnPage: React.FC<{}> = () => {
  return (
    <>
      <SEO title="Learn" />
      <UserGuides />
      <TracerLibrary />
      <UserDocs />
      <TracerDrop />
    </>
  );
};

export default LearnPage;
