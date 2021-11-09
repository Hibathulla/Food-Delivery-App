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
                <img className={classes.items__img} src={props.img} alt="" />
            </div>

            <div className={classes.items__textbox}>
            <h4 className={classes.items__title}>{props.name}</h4>
            <h3 className={classes.items__titleprice}>${props.price}</h3>
            </div>
           

            <div className={classes.items__quantity}>
                <button className={classes.items__btnplus}>+</button>
                <div className={classes.items__number}>1</div>
                <button className={classes.items__btnminus}>-</button>
            </div>
        </div>
    )
}

export default CartItems;