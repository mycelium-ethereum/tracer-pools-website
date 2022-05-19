import Category from "@components/Shared/Footer/Category";
import {
  desktopOrder,
  tracerDAOCategory,
  productCategory,
  learnCategory,
  contributeCategory,
  governCategory,
  connectCategory,
} from "@components/Shared/Footer/presets";

const DesktopGrid: React.FC<{
  route: string;
}> = ({ route }) => {
  const categoryArr = [
    tracerDAOCategory,
    productCategory,
    learnCategory,
    contributeCategory,
    governCategory,
    connectCategory,
  ];
  return (
    <div className="hidden max-w-[1045px] flex-grow transform gap-x-[75px] gap-y-12 lg:translate-x-[95px] lg:grid-cols-3 xl:grid xl:w-max xl:translate-x-[40px] xl:grid-cols-6">
      {desktopOrder.map((category, i) => {
        return (
          <Category
            key={i}
            route={route}
            name={category}
            category={categoryArr[i]}
          />
        );
      })}
    </div>
  );
};

export default DesktopGrid;
