import UnderlinedHeading from "@components/Shared/UnderlinedHeading";
import Container from "@components/Shared/Container";
import H2 from "@components/Shared/H2";
import Section from "@components/Shared/Section";
import { useEffect } from "react";
// https://img.youtube.com/vi/<insert-youtube-video-id-here>/hqdefault.jpg

const TracerDrop: React.FC<{}> = () => {
  const getInfo = () => {
    fetch(
      "http://www.youtube.com/oembed?url=http://www.youtube.com/watch?v=ojCkgU5XGdg&format=json",
      {
        method: "GET",
      }
    )
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => {
        console.log("Youtube API request failed", error);
      });
  };

  useEffect(() => {
    getInfo();
  }, []);

  return (
    <Section className="bg-secondary pt-16 pb-12">
      <Container className="text-action-active">
        <UnderlinedHeading
          hideBullet
          lineColor="lightblue"
          className="max-w-[294px]"
        >
          IN THE MEDIA
        </UnderlinedHeading>
        <H2 className="mb-8 max-w-[767px]">
          The latest research from Tracer and the RMIT Blockchain Innovation
          Hub. Every fortnight on Twitter and YouTube.
        </H2>
      </Container>
    </Section>
  );
};

// const YOUTUBE_PLAYLIST_ITEMS_API =
//   "https://www.googleapis.com/youtube/v3/playlistItems";

export default TracerDrop;

// export async function getServerSideProps() {
//   const res = await fetch(`${YOUTUBE_PLAYLIST_ITEMS_API}`);
//   const data = await res.json();
//   return {
//     props: {
//       data,
//     },
//   };
// }
