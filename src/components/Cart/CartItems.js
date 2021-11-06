import Card from "../UI/Card";
import classes from "./CartItems.module.css"
import { useContext } from "react";
import FoodContext from "../../store/food-context";

const CartItems = (props) => {

  const ctx = useContext(FoodContext);  

  const removeHandler = () => {
       ctx.removeItem(props.id)
  }

    return (
        <Card className={classes.item}>

        <div className={classes.first}>
          <div className={classes.image}><img alt={props.Food} src={props.Food} /></div>
          <h3>{props.name}</h3>
        </div>

        <div className={classes.second}>
         <div className={classes.amount}>
           <button>-</button>
           <div>{props.amount}</div>
           <button onClick={props.onAdd}>+</button>
         </div>
         <div className={classes.price}>${props.price}</div>
         <button className={classes.trash} onClick={removeHandler}><img src="https://img.icons8.com/material-outlined/24/000000/trash--v2.png" alt="cart" /></button>
        </div>
      </Card>
    )
}

export default CartItems;