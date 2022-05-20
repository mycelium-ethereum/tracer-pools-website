import FactoryInfoCard from "@components/Factories/FactoryInfoCard";
import { cardContent } from "@components/Factories/CurrentFactories/presets";

const DesktopGrid: React.FC<{}> = () => {
  return (
    <div className="hidden grid-cols-3 gap-4 4xl:grid">
      {cardContent.map((content, index) => (
        <FactoryInfoCard key={index} {...content} />
      ))}
    </div>
  );
};

export default DesktopGrid;
