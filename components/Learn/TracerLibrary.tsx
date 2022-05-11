import { useRef, useState } from "react";
import UnderlinedHeading from "@components/Shared/UnderlinedHeading";
import Container from "@components/Shared/Container";
import Section from "@components/Shared/Section";
import H2 from "@components/Shared/H2";
import TagFilters from "@components/Shared/TagFilters";
import ArticleList from "@components/Learn/ArticleList";
import { articles, tags } from "@components/Learn/presets";

const TracerLibrary: React.FC<{}> = () => {
  const postContainerRef = useRef<HTMLDivElement>(null);
  const [category, setCategory] = useState<string>("All");
  const [filteredArticles, setFilteredArticles] = useState(articles);

  return (
    <Section className="bg-secondary py-20">
      <Container className="text-action-active">
        <UnderlinedHeading
          hideBullet
          lineColor="lightblue"
          className="max-w-[294px]"
        >
          TRACER LIBRARY
        </UnderlinedHeading>
        <H2>
          Gain a more in-depth
          <br />
          understanding of the Tracer
          <br />
          Protocol and its capabilities.
        </H2>
        <div className="mt-8 mb-6 flex flex-col-reverse justify-between sm:flex-row">
          <TagFilters
            tags={tags}
            category={category}
            setCategory={setCategory}
          />
          {/* <SearchBox
            articles={articles}
            setFilteredArticles={setFilteredArticles}
            postContainerRef={postContainerRef}
          /> */}
        </div>
        <ArticleList
          postContainerRef={postContainerRef}
          filteredArticles={filteredArticles}
          category={category}
        />
      </Container>
    </Section>
  );
};

export default TracerLibrary;
