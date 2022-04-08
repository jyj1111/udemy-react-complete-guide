import classes from "./Card.module.css";

const Card = (props) => {
  return <div className={classes.card}>{props.childeren}</div>;
};

export default Card;
