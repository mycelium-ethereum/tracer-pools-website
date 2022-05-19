import Category from "@components/Shared/Footer/Category";
import {
  tabletOrder,
  tracerDAOCategory,
  productCategory,
  learnCategory,
  contributeCategory,
  governCategory,
  connectCategory,
} from "@components/Shared/Footer/presets";

const TabletGrid: React.FC<{
  route: string;
}> = ({ route }) => {
  const categoryArr = [
    tracerDAOCategory,
    learnCategory,
    contributeCategory,
    governCategory,
    productCategory,
    connectCategory,
  ];

  return (
    <div className="hidden min-w-[calc(100%+160px)] grid-cols-3 gap-x-4 md:grid lg:min-w-full xl:hidden">
      <div>
        {tabletOrder.map((category: string, i: number) => {
          if (i % 3 === 0 || i === 0) {
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
        {tabletOrder.map((category: string, i: number) => {
          if (i % 3 === 1 || i === 1) {
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
        {tabletOrder.map((category: string, i: number) => {
          if (i % 3 !== 1 && i !== 1 && i % 3 !== 0 && i !== 0) {
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

export default TabletGrid;
