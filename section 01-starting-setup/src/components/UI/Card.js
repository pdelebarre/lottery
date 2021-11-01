import "./Card.css";

function Card(props) {
  const classes = "card " + props.className; //inherited from expenseitem call
  return <div className={classes}>{props.children}</div>;
}

export default Card;
