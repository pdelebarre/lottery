import PrizeForm from "./PrizeForm";
import "./NewPrize.css";

const NewPrize = (props) => {
  const savePrizeDataHandler = (enteredPrizeData) => {
    const prizeData = {
      ...enteredPrizeData,
      id: Math.random().toString(),
    };

    props.onAddPrize(prizeData);
  };

  return (
    <div className="new-prize">
      <PrizeForm onSavePrizeData={savePrizeDataHandler} />
    </div>
  );
};

export default NewPrize;
