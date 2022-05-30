import Moment from "react-moment";
import CategoryBubble from "@components/Shared/CategoryBubble";
import GradientLine from "@components/Shared/GradientLine";
import PageLink from "@components/Shared/PageLink";
import RelatedArticles from "@components/Radar/Sidebar/RelatedArticles";
import ShareButtons from "../Post/ShareButtons";

const PostSidebarContent: React.FC<{
  currentArticle: any;
  articles: any;
}> = ({ currentArticle, articles }) => {
  return (
    <>
      <picture>
        <img
          src={currentArticle.image[0].formats.small.url}
          alt={currentArticle.title + "banner"}
          className="h-[155px] w-full object-cover"
        />
      </picture>
      <div className="p-4">
        <span className="mb-2 block text-xs tracking-[0.15em] text-tertiary">
          CURRENT ARTICLE
        </span>
        <GradientLine color="grey" />
        <Moment
          format="Do MMMM, YYYY"
          className="mt-4 block text-[10px] text-highlight"
        >
          {currentArticle.publish_date}
        </Moment>
        <PageLink href={`/radar/${currentArticle.slug}`}>
          <h2 className="my-1 text-xl font-bold leading-[120%] text-action-active">
            {currentArticle.title}
          </h2>
        </PageLink>
        <small className="post-description overflow-hidden text-sm leading-[20px] text-tertiary">
          {currentArticle.tagline}
        </small>
        <ShareButtons
          title={currentArticle.title}
          className="my-4 -translate-x-2"
          smallerMargin
        />
        {currentArticle.category && (
          <PageLink
            href={{
              pathname: "/radar",
              query: { category: currentArticle.category },
            }}
          >
            <CategoryBubble category={currentArticle.category} />
          </PageLink>
        )}
      </div>
      <RelatedArticles currentArticle={currentArticle} articles={articles} />
    </>
  );
};

export default PostSidebarContent;
