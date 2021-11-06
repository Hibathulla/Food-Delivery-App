import { useContext } from "react";
import FoodContext from "../../store/food-context";
import classes from "./SingleFood.module.scss"

const SingleFood = (props) => {

  const ctx = useContext(FoodContext)

  const submitHandler = (event) => {
     event.preventDefault();
     let enteredAmount = 1;
     console.log(props.amount);
     ctx.addItem({
       id: props.id,
       amount: +enteredAmount,
       name: props.name,
       price: props.price,
       img: props.img
     })
  }

    return (
        <form className={classes.container} onSubmit={submitHandler}>
        <div className={classes.card}>
        <div className={classes.display}><img alt={props.category} src={props.img} /></div>
        <div className={classes.details}>
          <h3>{props.name}</h3>
          <div className={classes.desc}>{props.desc}</div>
          <div className={classes.order}>
            <div className={classes.price}>₹{props.price}</div>
            <button><strong>ADD +</strong></button>
          </div>
        </div>
        </div>
      </form>
    )
}

export default SingleFood;