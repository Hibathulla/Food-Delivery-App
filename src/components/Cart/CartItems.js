import Card from "../UI/Card";
import classes from "./CartItems.module.scss"
import { useContext } from "react";
import FoodContext from "../../store/food-context";

const CartItems = (props) => {

  const ctx = useContext(FoodContext);  

  const removeHandler = () => {
       ctx.removeItem(props.id)
  }

    return (
        <div className={classes.items}>
            <div className={classes.items__imagebox}>

            </div>
            <h4>Pancakes</h4>

            <div className={classes.items__quantity}></div>
        </div>
    )
}

export default CartItems;