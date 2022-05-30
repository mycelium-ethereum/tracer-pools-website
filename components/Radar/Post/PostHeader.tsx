import Moment from "react-moment";
import CategoryBubble from "@components/Shared/CategoryBubble";
import ShareButtons from "@components/Radar/Post/ShareButtons";
import PageLink from "@components/Shared/PageLink";

const PostHeader: React.FC<{
  data: any;
}> = ({ data }) => {
  return (
    <header>
      <h1 className="text-2xl font-bold leading-[30px] sm:text-[40px] sm:leading-[48px]">
        <span className="text-action-inactive">Blog</span>
        <br />
        <span className="text-highlight">{data.title}</span>
      </h1>
      <small className="mb-10 block text-base font-light leading-[24px] sm:mt-2 sm:mb-[66px] sm:text-xl sm:leading-[30px] ">
        {data.tagline}
      </small>
      <div className="flex flex-col sm:flex-row sm:items-center">
        <div className="flex">
          <Moment format="Do MMMM, YYYY" className="mr-2 text-highlight">
            {data.publish_date}
          </Moment>
          <span>
            Read time: {data.read_time}&nbsp;
            {data.read_time === 1 ? "minute" : "minutes"}
          </span>
        </div>
        <ShareButtons
          title={data.title}
          className="mt-2 -translate-x-2 sm:mt-0 sm:ml-10 sm:translate-x-0"
        />
      </div>
      {data.category && (
        <div className="my-2.5">
          <PageLink
            href={{ pathname: "/radar", query: { category: data.category } }}
          >
            <CategoryBubble category={data.category} large />
          </PageLink>
        </div>
      )}
    </header>
  );
};

export default PostHeader;
