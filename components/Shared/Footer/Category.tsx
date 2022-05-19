import FooterLink from "@components/Shared/Footer/FooterLink";

const Category: React.FC<{
  name: string;
  route: string;
  category: {
    text: string;
    url: string;
  }[];
}> = ({ name, route, category }) => {
  return (
    <div className="mb-6 flex w-max flex-col items-start xl:mb-0">
      <span className="mb-2.5 block font-extrabold">{name}</span>
      {category.map((content, i) => (
        <FooterLink key={i} content={content} route={route} />
      ))}
    </div>
  );
};

export default Category;
