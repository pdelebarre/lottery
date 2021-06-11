import React, { useState } from "react";
import CheckBoxIcon from "@material-ui/icons/CheckBox";

import "./PrizeForm.css";

const PrizeForm = (props) => {
  const [enteredPrizeName, setPrizeName] = useState("");
  const [enteredPrizeRank, setPrizeRank] = useState("");
  const [enteredPrizeSponsor, setPrizeSponsor] = useState("");

  const prizeNameChangeHandler = (event) => {
    setPrizeName(event.target.value);
  };
  const prizeRankChangeHandler = (event) => {
    setPrizeRank(event.target.value);
  };
  const prizeSponsorChangeHandler = (event) => {
    setPrizeSponsor(event.target.value);
  };
  const submitHandler = (event) => {
    event.preventDefault();

    const prizeData = {
      name: enteredPrizeName,
      sponsor: enteredPrizeSponsor,
      rank: enteredPrizeRank,
    };

    props.onSavePrizeData(prizeData);
    setPrizeName("");
    setPrizeSponsor("");
    setPrizeRank("");
  };

  return (
    <div className="prize-form">
      <form onSubmit={submitHandler}>
        <div>
          <label>Prize</label>
          <input
            type="text"
            value={enteredPrizeName}
            minLength="3"
            onChange={prizeNameChangeHandler}
          />
        </div>
        <div>
          <label>Sponsor</label>
          <input
            type="text"
            value={enteredPrizeSponsor}
            minLength="3"
            onChange={prizeSponsorChangeHandler}
          />
        </div>

        <div>
          <label>Rank</label>
          <input
            type="number"
            value={enteredPrizeRank}
            min="1"
            max="999"
            onChange={prizeRankChangeHandler}
          />
        </div>
        <div className="prize-form__ok">
          <button fontSize="large" type="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default PrizeForm;
