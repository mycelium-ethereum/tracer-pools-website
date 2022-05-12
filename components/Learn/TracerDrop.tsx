import { useEffect, useState } from "react";
import UnderlinedHeading from "@components/Shared/UnderlinedHeading";
import Container from "@components/Shared/Container";
import H2 from "@components/Shared/H2";
import Section from "@components/Shared/Section";
import VideoCard from "@components/Learn/VideoCard";
import { filterArticles, handleLearnPageResize } from "@lib/helpers";
import FiveColumnLayout from "@components/Shared/Layouts/FiveColumnLayout";
import FourColumnLayout from "@components/Shared/Layouts/FourColumnLayout";
import OneColumnLayout from "@components/Shared/Layouts/OneColumnLayout";
import ThreeColumnLayout from "@components/Shared/Layouts/ThreeColumnLayout";
import TwoColumnLayout from "@components/Shared/Layouts/TwoColumnLayout";
import ViewAllButton from "@components/Learn/ViewAllButton";

const TracerDrop: React.FC<{ dropVideoData: any }> = ({ dropVideoData }) => {
  const [columns, setColumns] = useState<number>(3);
  const [amountToShow, setAmountToShow] = useState<number>(columns);
  const [postsInView, setPostsInView] = useState<any[]>(dropVideoData.items);

  useEffect(() => {
    filterArticles(dropVideoData.items, amountToShow, setPostsInView);
  }, [amountToShow]);

  useEffect(() => {
    handleLearnPageResize(setAmountToShow, setColumns);
    filterArticles(dropVideoData.items, amountToShow, setPostsInView);
    window.addEventListener("resize", () =>
      handleLearnPageResize(setAmountToShow, setColumns)
    );
    return () => {
      window.removeEventListener("resize", () =>
        handleLearnPageResize(setAmountToShow, setColumns)
      );
    };
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
        <div className="grid grid-cols-1 gap-x-4 sm:grid-cols-2 lg:grid-cols-3 3xl:grid-cols-4 4xl:grid-cols-5">
          {
            {
              5: (
                <FiveColumnLayout
                  articles={postsInView}
                  ArticleComponent={VideoCard}
                />
              ),
              4: (
                <FourColumnLayout
                  articles={postsInView}
                  ArticleComponent={VideoCard}
                />
              ),
              3: (
                <ThreeColumnLayout
                  articles={postsInView}
                  ArticleComponent={VideoCard}
                />
              ),
              2: (
                <TwoColumnLayout
                  articles={postsInView}
                  ArticleComponent={VideoCard}
                />
              ),
              1: (
                <OneColumnLayout
                  articles={postsInView}
                  ArticleComponent={VideoCard}
                />
              ),
            }[columns]
          }
          <ViewAllButton outgoingLink="https://www.youtube.com/playlist?list=PLxyjg08ON02UAORUxX82EQsk8W782O2Yl">
            View all Tracer Drops on YouTube
          </ViewAllButton>
        </div>
      </Container>
    </Section>
  );
};

export default TracerDrop;
