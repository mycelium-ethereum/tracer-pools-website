import Moment from "react-moment";
import CategoryBubble from "@components/Shared/CategoryBubble";
import ShareButtons from "@components/Radar/ShareButtons";

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
      <div className="flex items-center pt-[66px]">
        <Moment format="Do MMMM, YYYY" className="mr-2 text-highlight">
          {data.publish_date}
        </Moment>
        <span>
          Read time: {data.read_time}&nbsp;
          {data.read_time === 1 ? "minute" : "minutes"}
        </span>
        <ShareButtons title={data.title} className="ml-10" />
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
