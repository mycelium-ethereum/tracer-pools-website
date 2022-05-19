import Category from "@components/Shared/Footer/Category";
import {
  mobileOrder,
  tracerDAOCategory,
  productCategory,
  learnCategory,
  contributeCategory,
  governCategory,
  connectCategory,
} from "@components/Shared/Footer/presets";

const MobileGrid: React.FC<{
  route: string;
}> = ({ route }) => {
  const categoryArr = [
    tracerDAOCategory,
    productCategory,
    governCategory,
    contributeCategory,
    learnCategory,
    connectCategory,
  ];

  return (
    <div className="grid min-w-[calc(100%+160px)] grid-cols-2 gap-x-4 md:hidden">
      <div>
        {mobileOrder.map((category: string, i: number) => {
          if (i % 2 === 0 || i === 0) {
            return (
              <Category
                key={i}
                route={route}
                name={category}
                category={categoryArr[i]}
              />
            );
          }
        })}
      </div>
      <div>
        {mobileOrder.map((category: string, i: number) => {
          if (i % 2 === 1 || i === 1) {
            return (
              <Category
                key={i}
                route={route}
                name={category}
                category={categoryArr[i]}
              />
            );
          }
        })}
      </div>
    </div>
  );
};

export default MobileGrid;
