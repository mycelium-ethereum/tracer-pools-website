import { useRef, useState } from "react";
import Container from "@components/Shared/Container";
import Section from "@components/Shared/Section";
import TagFilters from "@components/Shared/TagFilters";
import ArticleList from "@components/Learn/TracerLibrary/ArticleList";
import LearnHeader from "@components/Learn/LearnHeader";
import { headerContent, articles, tags } from "@components/Learn/presets";

const TracerLibrary: React.FC<{}> = () => {
  const articleContainerRef = useRef<HTMLDivElement>(null);
  const [category, setCategory] = useState<string>("All");
  // const [filteredArticles, setFilteredArticles] = useState(articles); // will be used once Search implemented

  return (
    <Section className="bg-secondary py-16 sm:py-20">
      <Container className="text-action-active">
        <LearnHeader {...headerContent.tracerLibrary} />
        <div className="mt-8 mb-6 flex flex-col-reverse justify-between sm:flex-row">
          <TagFilters
            tags={tags}
            category={category}
            setCategory={setCategory}
          />
          {/* <SearchBar
            articles={articles}
            setFilteredArticles={setFilteredArticles}
            postContainerRef={postContainerRef}
          /> */}
        </div>
        <ArticleList
          articleContainerRef={articleContainerRef}
          filteredArticles={articles}
          category={category}
        />
      </Container>
    </Section>
  );
};

export default TracerLibrary;
