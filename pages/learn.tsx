import SEO from "@components/Shared/SEO";
import TracerLibrary from "@components/Learn/TracerLibrary";
import UserGuides from "@components/Learn/UserGuides";
import UserDocs from "@components/Learn/UserDocs";
import TracerDrop from "@components/Learn/TracerDrop";
import InTheMedia from "@components/Learn/InTheMedia";

const LearnPage: React.FC<{ data: any }> = ({ data }) => {
  return (
    <>
      <SEO title="Learn" />
      <UserGuides />
      <TracerLibrary />
      <UserDocs />
      <TracerDrop data={data} />
      <InTheMedia />
    </>
  );
};

export default LearnPage;

export async function getServerSideProps() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_YOUTUBE_PLAYLIST_ITEMS_API}?part=snippet&maxResults=3&playlistId=${process.env.NEXT_PUBLIC_YOUTUBE_PLAYLIST_ID}&key=${process.env.NEXT_PUBLIC_YOUTUBE_API_KEY}`
  );
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
}
