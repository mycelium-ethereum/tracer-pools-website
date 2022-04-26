type SocialLinksProps = {
  links: {
    url: string;
    icon: string;
    alt: string;
  }[];
};

const SocialLinks: React.FC<SocialLinksProps> = ({ links }) => {
  return (
    <div className="flex">
      {links.map((socialLink, i) => (
        <a
          key={i}
          href={socialLink.url}
          target="_blank"
          className="transition-opacity duration-300 hover:opacity-50"
        >
          <img
            className="social-icon mx-3 h-[17px] w-auto sm:mr-6 sm:ml-0"
            src={socialLink.icon}
            alt={socialLink.alt}
          />
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;
