import SEO from "@components/Shared/SEO";
import TagFilters from "@components/Shared/TagFilters";
import SearchBar from "@components/Shared/SearchBar";
import Container from "@components/Shared/Container";
import PageHeader from "@components/Shared/PageHeader";
import PageSection from "@components/Shared/Section";
import RadarPosts from "@components/Radar/RadarPosts";
import { useEffect, useRef, useState } from "react";
import { GetStaticProps } from "next";
import { tags } from "@components/Radar/presets";
import { blogSeoDesc } from "@components/Shared/presets";

// type CategoryProps = {
//   category: "announcements" | "education" | "partnerships" | "all"
// }

const BlogPage: React.FC<{ articles: any }> = ({ articles }) => {
  const categories = ["announcements", "education", "partnerships", "all"];
  const [filteredArticles, setFilteredArticles] = useState(articles);
  const [category, setCategory] = useState<string>("all");
  const postContainerRef = useRef<HTMLDivElement>(null);

  const getCategoryParam = () => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const category = urlParams.get("category");
    if (category && categories.includes(category)) {
      setCategory(category);
    }
  };

  useEffect(() => {
    getCategoryParam();
  }, []);

  return (
    <>
      <SEO title="Radar" description={blogSeoDesc} />
      <PageSection className="bg-white">
        <Container className="xs:static">
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
            <SearchBar
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
