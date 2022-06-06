import { useEffect, useState } from "react";
import Container from "@components/Shared/Container";
import Section from "@components/Shared/Section";
import VideoCard from "@components/Learn/VideoCard";
import FiveColumnLayout from "@components/Shared/Layouts/FiveColumnLayout";
import FourColumnLayout from "@components/Shared/Layouts/FourColumnLayout";
import OneColumnLayout from "@components/Shared/Layouts/OneColumnLayout";
import ThreeColumnLayout from "@components/Shared/Layouts/ThreeColumnLayout";
import TwoColumnLayout from "@components/Shared/Layouts/TwoColumnLayout";
import ViewAllButton from "@components/Learn/ViewAllButton";
import LearnHeader from "@components/Learn/LearnHeader";
import { headerContent } from "@components/Learn/presets";
import { filterArticles, handleLearnPageResize } from "@lib/helpers";

const InTheMedia: React.FC<{ mediaVideos: string[]; mediaVideoData: any }> = ({
  mediaVideos,
  mediaVideoData,
}) => {
  mediaVideoData.sort(
    (a: any, b: any) => mediaVideos.indexOf(a) - mediaVideoData.indexOf(b)
  );
  const [columns, setColumns] = useState<number>(3);
  const [showAll, setShowAll] = useState<boolean>(false);
  const [amountToShow, setAmountToShow] = useState<number>(columns);
  const [postsInView, setPostsInView] = useState<any[]>(mediaVideoData);

  const sortVideos = () => {
    const videos = postsInView;
    videos.sort(
      (a: any, b: any) =>
        mediaVideoData.indexOf(a) - mediaVideos.indexOf(b.items[0].id)
    );
  };

  const handleShowAll = () => {
    setShowAll(true);
  };

  useEffect(() => {
    showAll && setAmountToShow(mediaVideoData.length);
  }, [showAll]);

  useEffect(() => {
    filterArticles(mediaVideoData, amountToShow, setPostsInView);
    if (amountToShow !== mediaVideoData.length) setShowAll(false);
  }, [amountToShow]);

  useEffect(() => {
    sortVideos();
  }, [postsInView]);

  useEffect(() => {
    handleLearnPageResize(setAmountToShow, setColumns);
    filterArticles(mediaVideoData, amountToShow, setPostsInView);
    window.addEventListener("resize", () =>
      handleLearnPageResize(setAmountToShow, setColumns)
    );
    return () => {
      window.removeEventListener("resize", () =>
        handleLearnPageResize(setAmountToShow, setColumns)
      );
    };
  }, [handleLearnPageResize]);

  return (
    <Section className="bg-white py-16 sm:pt-16 sm:pb-12">
      <Container className="text-action-active">
        <LearnHeader {...headerContent.inTheMedia} />
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
          {!showAll && (
            <ViewAllButton handleShowAll={handleShowAll}>
              View All
            </ViewAllButton>
          )}
        </div>
      </Container>
    </Section>
  );
};

export default InTheMedia;
