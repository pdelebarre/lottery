import React, { useState } from "react";
import "./Rank.css";
import ArrowDropUpIcon from "@material-ui/icons/ArrowDropUp";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";

const Rank = (props) => {
  const [rank, setRank] = useState(props.rank);

  const increaseRankHandler = () => {
    setRank(rank + 1);
  };

  const decreaseRankHandler = () => {
    setRank(rank>1? rank - 1:rank);
  };

  return (
    <div className="rank">
      <ArrowDropDownIcon onClick={decreaseRankHandler} /> {rank}
      <ArrowDropUpIcon onClick={increaseRankHandler} />
    </div>
  );
};

export default Rank;
