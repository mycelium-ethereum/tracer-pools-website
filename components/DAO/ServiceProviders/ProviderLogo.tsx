const ProviderLogo: React.FC<{
  link: string;
  image: string;
  alt: string;
  logoStyles: string;
}> = ({ link, image, alt, logoStyles }) => {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      <img src={`/img/logos/${image}`} alt={alt} className={logoStyles} />
    </a>
  );
};

export default ProviderLogo;
