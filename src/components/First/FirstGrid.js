import GridCard from "./GridCard";
import { CardsData } from "./cardsData";
const FirstGrid = () => {
  return (
    <div className="first_grid">
      {CardsData.map((card) => {
        return <GridCard id={card.id} data={card} />;
      })}
    </div>
  );
};

export default FirstGrid;
