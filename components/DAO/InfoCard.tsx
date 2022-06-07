import Button from "@components/Shared/Buttons/Button";
import UnderlinedHeading from "@components/Shared/Heading/UnderlinedHeading";

const InfoCard: React.FC<{
  image?: string;
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
}> = ({ image, title, description, buttonText, buttonLink }) => {
  return (
    <article className="min-w-[298px]">
      {image && (
        <img src={image} alt={title} className="mb-4 h-[100px] w-[100px]" />
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
