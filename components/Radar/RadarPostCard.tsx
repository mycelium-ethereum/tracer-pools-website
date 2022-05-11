import { useEffect, useRef } from "react";
import Moment from "react-moment";
import PageLink from "../Shared/PageLink";
import CategoryBubble from "../Shared/CategoryBubble";

const RadarPostCard: React.FC<{
  article: any;
  className?: string;
}> = ({ article, className }) => {
  const postDescription = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    if (postDescription.current) {
      postDescription.current.innerHTML = article.Description;
    }
  }, [postDescription.current]);

  return (
    <PageLink href={`/radar/${article.slug}`}>
      <article className="mb-4 w-full overflow-hidden rounded-lg bg-white transition-all duration-300 [box-shadow:_0px_2px_4px_rgba(0,0,0,0.1)] hover:bg-action-cell hover:[box-shadow:_0px_2px_8px_rgba(26,85,245,0.2)]">
        <picture>
          <img
            src={article.image[0].formats.small.url}
            alt={article.title}
            className="h-[203px] w-full object-cover"
          />
        </picture>
        <div className="p-4">
          <Moment format="Do MMMM, YYYY" className="text-[10px] text-highlight">
            {article.publish_date}
          </Moment>
          <h2 className="my-1 text-xl font-bold leading-[120%] text-action-active">
            {article.title}
          </h2>
          <p className="post-description overflow-hidden text-sm leading-[20px] text-tertiary">
            {article.description}
          </p>
          {article.category && <CategoryBubble category={article.category} />}
        </div>
      </article>
    </PageLink>
  );
};

export default RadarPostCard;
