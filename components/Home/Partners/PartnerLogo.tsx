const PartnerLogo: React.FC<{
  image: string;
  alt: string;
  imgClassName: string;
}> = ({ image, alt, imgClassName }) => {
  return <img src={image} alt={alt} className={`mb-9 ${imgClassName}`} />;
};

export default PartnerLogo;
