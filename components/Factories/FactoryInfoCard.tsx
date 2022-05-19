import Button from "@components/Shared/Buttons/Button";
import OptimisedImage from "@components/Shared/OptimisedImage";
import CenteredHeading from "@components/Factories/CenteredHeading";
import Link from "next/link";

const FactoryInfoCard: React.FC<{
  image: boolean;
  title: string;
  description: string;
  link: string;
  buttonText: string;
  headingStyles: string;
}> = ({ image, title, description, buttonText, link, headingStyles }) => {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      <article className="group relative min-w-[402px] rounded-lg bg-secondary">
        <div className="absolute top-0 left-0 h-full w-full overflow-hidden rounded-lg opacity-0 transition-opacity duration-300 [background-image:linear-gradient(337.11deg,#1C64F2_-7.32%,rgba(28,100,242,0)_106.58%)] group-hover:opacity-100">
          <div className="absolute top-[1px] left-[1px] h-[calc(100%-2px)] w-[calc(100%-2px)] rounded-lg bg-secondary" />
        </div>
        <div className="relative z-10 flex flex-col items-center justify-center p-4 text-center">
          {image && (
            <OptimisedImage
              src="/img/shared/integration-placeholder.png"
              alt=""
              className="mb-4 max-h-[154px] max-w-[154px] rounded-lg"
            />
          )}
          <CenteredHeading className={headingStyles}>{title}</CenteredHeading>
          <p className="text-tertiary">{description}</p>
          <Button lightBlueGradient className="mt-4">
            {buttonText}
          </Button>
        </div>
      </article>
    </a>
  );
};

export default FactoryInfoCard;
