import FactoryInfoCard from "@components/Factories/FactoryInfoCard";
import { cardContent } from "@components/Factories/CurrentFactories/presets";

const MobileGrid: React.FC<{}> = () => {
  return (
    <div className="grid grid-cols-1 md:hidden">
      {cardContent.map((content, i) => (
        <FactoryInfoCard key={i} {...content} />
      ))}
    </div>
  );
};

export default MobileGrid;
