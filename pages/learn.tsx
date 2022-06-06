import { GetStaticProps } from "next";
import { learnSeoDesc } from "@components/Shared/presets";
import SEO from "@components/Shared/SEO";
import Banner from "@components/Learn/Banner";
import TracerLibrary from "@components/Learn/TracerLibrary";
import UserGuides from "@components/Learn/UserGuides";
import UserDocs from "@components/Learn/UserDocs";
import TracerDrop from "@components/Learn/TracerDrop";
import InTheMedia from "@components/Learn/InTheMedia";
import FAQs from "@components/Learn/FAQ";
import { mediaVideos } from "@components/Learn/presets";
import { getTracerDropPlaylistData, getVideoData } from "@lib/helpers";

const LearnPage: React.FC<{ dropVideoData: any; mediaVideoData: any }> = ({
  dropVideoData,
  mediaVideoData,
}) => {
  return (
    <>
      <SEO title="Learn" description={learnSeoDesc} />
      <Banner />
      <UserGuides />
      <TracerLibrary />
      <UserDocs />
      <TracerDrop dropVideoData={dropVideoData} />
      <InTheMedia mediaVideos={mediaVideos} mediaVideoData={mediaVideoData} />
      <FAQs />
    </>
  );
};

export default LearnPage;

export const getStaticProps: GetStaticProps = async () => {
  const mediaVideoData = [];
  mediaVideos.forEach((video) => {
    getVideoData(mediaVideoData, video);
  });

  // Get playlist data for Tracer Drop
  const dropVideoData = await getTracerDropPlaylistData();

  return {
    props: {
      dropVideoData,
      mediaVideoData,
    },
  };
};
