import Moment from "react-moment";

const ArticleCard: React.FC<{
  link: string;
  image: string;
  title: string;
  description: string;
  publishedAt: string;
}> = ({ link, image, title, description, publishedAt }) => {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      <article className="mb-4 w-full overflow-hidden rounded-lg bg-white transition-all duration-300 [box-shadow:_0px_2px_4px_rgba(0,0,0,0.1)] hover:bg-action-cell hover:[box-shadow:_0px_2px_8px_rgba(26,85,245,0.2)]">
        <picture>
          <img
            src={image}
            alt={title}
            className="h-[203px] w-full object-cover"
          />
        </picture>
        <div className="p-4">
          <Moment format="Do MMMM, YYYY" className="text-[10px] text-highlight">
            {publishedAt}
          </Moment>
          <h2 className="my-1 text-xl font-bold leading-[120%] text-action-active">
            {title}
          </h2>
          <p className="post-description overflow-hidden text-sm leading-[20px] text-tertiary">
            {description}
          </p>
        </div>
      </article>
    </a>
  );
};

export default ArticleCard;
