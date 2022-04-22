import { useEffect, useRef, useState } from "react";
import Moment from "react-moment";
import Link from "next/link";
import PageLink from "../Shared/PageLink";
import { capitaliseFirstLetter } from "lib/helpers";

const RadarPostCard: React.FC<{
  article: any;
  className?: string;
  category: string;
}> = ({ article, className, category }) => {
  const postDescription = useRef<HTMLParagraphElement>(null);
  useEffect(() => {
    if (postDescription.current) {
      postDescription.current.innerHTML = article.Description;
    }
  }, []);

  return (
    <PageLink href={`/radar/` + article.Slug + "/"}>
      <article className="mb-4 w-full overflow-hidden rounded-lg [box-shadow:_0px_2px_4px_rgba(0,0,0,0.1)]">
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
          {article.category && (
            <span className="mt-4 flex h-6 w-max items-center justify-center rounded-md bg-action-cell px-2 text-xs text-action-active">
              {capitaliseFirstLetter(article.category)}
            </span>
          )}
        </div>
      </article>
    </PageLink>
  );
};

export default RadarPostCard;
