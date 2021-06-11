import React, { useState } from "react";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import "./Prize.css";
import Card from "../UI/Card";
import Rank from "./Rank";

const Prize = (props) => {
  const [prizeRank, setPrizeRank] = useState(props.rank);
  const [prizeName, setPrizeName] = useState(props.name);
  const [prizeSponsor, setPrizeSponsor] = useState(props.sponsor);

  const editHandler = () => {
    setPrizeName("changed prize name!");
    setPrizeSponsor("Tata yoyo");
    setPrizeRank("478");
  };

  const deleteHandler = () => {
    console.log("delete :>> ", "tbd"); //TODO
  };

  return (
    <Card className="prize">

      <Rank rank={prizeRank} />
      <div className="prize__name">{prizeName}</div>
      <div className="prize__sponsor">{prizeSponsor}</div>

      <EditIcon onClick={editHandler}>...</EditIcon>
      <DeleteIcon onClick={deleteHandler}>-</DeleteIcon>
    </Card>
  );
};

export default Prize;
