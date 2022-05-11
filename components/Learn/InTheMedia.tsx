import UnderlinedHeading from "@components/Shared/UnderlinedHeading";
import Container from "@components/Shared/Container";
import H2 from "@components/Shared/H2";
import Section from "@components/Shared/Section";
import PostCard from "@components/Learn/PostCard";
import Button from "@components/Shared/Button";
import { mediaVideos } from "@components/Learn/presets";
import { useEffect, useState } from "react";

const InTheMedia: React.FC<{}> = ({}) => {
  const [videoData, setVideoData] = useState([]);
  const getVideoData = (array: any, id: string) => {
    fetch(
      `${process.env.NEXT_PUBLIC_YOUTUBE_VIDEO_API}&id=${id}&key=${process.env.NEXT_PUBLIC_YOUTUBE_API_KEY}`
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        array.push({ data });
      });
  };

  useEffect(() => {
    const array = [];
    mediaVideos.forEach((video) => getVideoData(array, video));
    setVideoData(array);
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
        <div className="mb-8 grid grid-cols-3 gap-4">
          {!!videoData[0] &&
            videoData.map((video: any, i: number) => (
              <PostCard
                key={i}
                link={`https://www.youtube.com/watch?v=${video.data.items[0].id}`}
                image={video.data.items[0].snippet.thumbnails.high.url}
                title={video.data.items[0].snippet.title}
                description={video.data.items[0].snippet.description}
                publishedAt={video.data.items[0].snippet.publishedAt}
              />
            ))}
          <Button lightBlueGradient className="btn-full-width col-start-2">
            View All
          </Button>
        </div>
      </Container>
    </Section>
  );
};

export default InTheMedia;
