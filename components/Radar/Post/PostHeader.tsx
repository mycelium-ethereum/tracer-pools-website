import Moment from "react-moment";
import CategoryBubble from "@components/Shared/CategoryBubble";
import ShareButtons from "@components/Radar/Post/ShareButtons";

const PostHeader: React.FC<{
  data: any;
}> = ({ data }) => {
  return (
    <header>
      <h1 className="text-[40px] font-bold leading-[48px]">
        <span className="text-action-inactive">Blog</span>
        <br />
        <span className="text-highlight">{data.title}</span>
      </h1>
      <small className="mt-2 block text-xl font-light leading-[30px]">
        {data.tagline}
      </small>
      <div className="flex flex-col pt-[66px] sm:flex-row sm:items-center">
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
          <CategoryBubble category={data.category} large />
        </div>
      )}
    </header>
  );
};

export default PostHeader;
