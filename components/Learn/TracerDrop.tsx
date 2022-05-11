import UnderlinedHeading from "@components/Shared/UnderlinedHeading";
import Container from "@components/Shared/Container";
import H2 from "@components/Shared/H2";
import Section from "@components/Shared/Section";
import PostCard from "@components/Learn/PostCard";
import Button from "@components/Shared/Button";

const TracerDrop: React.FC<{ data?: any }> = ({ data }) => {
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
          {data.items.map((item: any, i: number) => (
            <PostCard
              key={i}
              link={`https://www.youtube.com/watch?v=${item.snippet.resourceId.videoId}`}
              image={item.snippet.thumbnails.high.url}
              title={item.snippet.title}
              description={item.snippet.description}
              publishedAt={item.snippet.publishedAt}
            />
          ))}
          <Button
            lightBlueGradient
            outgoingLink="https://www.youtube.com/playlist?list=PLxyjg08ON02UAORUxX82EQsk8W782O2Yl"
            className="btn-full-width col-start-2"
          >
            View all Tracer Drops on YouTube
          </Button>
        </div>
      </Container>
    </Section>
  );
};

export default TracerDrop;
