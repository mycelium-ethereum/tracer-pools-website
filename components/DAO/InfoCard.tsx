import Button from "@components/Shared/Buttons/Button";
import UnderlinedHeading from "@components/Shared/Heading/UnderlinedHeading";
import OptimisedImage from "@components/Shared/OptimisedImage";

const InfoCard: React.FC<{
  image: boolean;
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
}> = ({ image, title, description, buttonText, buttonLink }) => {
  return (
    <article className="min-w-[298px]">
      {image && (
        <OptimisedImage
          src="/img/shared/integration-placeholder.png"
          alt=""
          className="mb-4 max-h-[154px] max-w-[154px] rounded-lg"
        />
      )}
      <UnderlinedHeading lineColor="lightblue" className="text-action-active">
        {title}
      </UnderlinedHeading>
      <p className="mt-2 text-tertiary">{description}</p>
      <Button lightBlueGradient link={buttonLink} className="mt-2">
        {buttonText}
      </Button>
    </article>
  );
};

export default InfoCard;
