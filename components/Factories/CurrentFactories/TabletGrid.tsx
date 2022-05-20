import FactoryInfoCard from "@components/Factories/FactoryInfoCard";
import { cardContent } from "@components/Factories/CurrentFactories/presets";

const TabletGrid: React.FC<{}> = () => {
  return (
    <div className="hidden w-full grid-cols-2 gap-4 md:grid 4xl:hidden">
      <div>
        {cardContent.map((content, i) => {
          if (i % 2 === 0 || i === 0) {
            return <FactoryInfoCard key={i} {...content} />;
          }
        })}
      </div>
      <div>
        {cardContent.map((content, i) => {
          if (i % 2 === 1 || i === 1) {
            return <FactoryInfoCard key={i} {...content} />;
          }
        })}
      </div>
    </div>
  );
};

export default TabletGrid;
