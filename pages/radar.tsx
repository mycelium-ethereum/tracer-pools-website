import SEO from "@components/Shared/SEO";
import TagFilters from "@components/Shared/TagFilters";
import SearchBox from "@components/Shared/SearchBox";
import Container from "@components/Shared/Container";
import PageHeader from "@components/Shared/PageHeader";
import PageSection from "@components/Shared/Section";
import RadarPosts from "@components/Radar/RadarPosts";
import { useRef, useState } from "react";
import { GetStaticProps } from "next";
import { tags } from "@components/Radar/presets";

const BlogPage: React.FC<{ articles: any }> = ({ articles }) => {
  const [filteredArticles, setFilteredArticles] = useState(articles);
  const [category, setCategory] = useState<string>("all");
  const postContainerRef = useRef<HTMLDivElement>(null);

  return (
    <>
      <SEO title="Home" />
      <PageSection>
        <Container>
          <PageHeader
            title="Blog"
            subheading="Read the latest news for Tracer"
          />
          <div className="flex flex-col-reverse justify-between sm:flex-row">
            <TagFilters
              tags={tags}
              category={category}
              setCategory={setCategory}
            />
            <SearchBox
              articles={articles}
              setFilteredArticles={setFilteredArticles}
              postContainerRef={postContainerRef}
            />
          </div>
          <RadarPosts
            filteredArticles={filteredArticles}
            category={category}
            postContainerRef={postContainerRef}
          />
        </Container>
      </PageSection>
    </>
  );
};

export default BlogPage;

export const getStaticProps: GetStaticProps = async () => {
  const articles = await fetch(
    "https://mycelium-content.uc.r.appspot.com/tracer-blogs"
  )
    .then((res) => res.json())
    .catch((err) => console.error(err));
  return {
    props: {
      articles,
    },
  };
};