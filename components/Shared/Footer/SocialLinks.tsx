import { SVGProps } from "types";

type SocialLinksProps = {
  links: {
    url: string;
    icon: React.FC<SVGProps>;
    alt: string;
  }[];
  leftAlign?: boolean;
  className?: string;
};

const SocialLinks: React.FC<SocialLinksProps> = ({
  links,
  leftAlign,
  className,
}) => {
  return (
    <div className={`flex ${className ? className : ""}`}>
      {links.map((socialLink, i) => (
        <a
          key={i}
          href={socialLink.url}
          target="_blank"
          className="transition-opacity duration-300 hover:opacity-50"
        >
          <socialLink.icon
            className={`social-icon h-[17px] w-auto sm:mr-6 sm:ml-0 ${
              leftAlign ? "mx-0 mr-6" : "mx-3"
            }`}
            alt={socialLink.alt}
          />
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;
