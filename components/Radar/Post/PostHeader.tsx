import Moment from "react-moment";
import CategoryBubble from "@components/Shared/CategoryBubble";

const PostHeader: React.FC<{
  data: any;
}> = ({ data }) => {
  return (
    <header>
      <h1 className="text-[40px] font-bold leading-[48px] text-highlight">
        {data.title}
      </h1>
      <small className="mt-2 block text-xl font-light leading-[30px]">
        {data.tagline}
      </small>
      <div className="flex pt-[66px]">
        <Moment format="Do MMMM, YYYY" className="mr-2 text-highlight">
          {data.publish_date}
        </Moment>
        <span>
          Read time: {data.read_time}&nbsp;
          {data.read_time === 1 ? "minute" : "minutes"}
        </span>
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
