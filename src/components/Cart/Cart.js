import { useContext } from "react";
import CartItems from "./CartItems";
import FoodContext from "../../store/food-context";

import classes from "./Cart.module.css";

const Cart = () => {

  const ctx = useContext(FoodContext)

  const onAddHandler = (item) => {
ctx.addItem({...item, amount: 1})
  }

  console.log(ctx.items)

  return (
    <section className={classes.cart}>
    <h1>Shopping Cart</h1>
    <div className={classes.underline}></div>
    <div className={classes.ul}>
    {ctx.items.map(item => (
      <li><CartItems
      id={item.id}
      key={item.id}
      name={item.name}
      Food={item.img}
      price={item.price}
      amount={item.amount}
      onAdd={onAddHandler.bind(null, item)}
       /></li>
    ))}
    </div>
    <div className={classes.bottom}>
    <button className={classes.clearCart} onClick={ctx.clearCart}><strong>Clear Cart</strong></button>
    <h2>Total Amount: {ctx.amount}</h2>
    </div>
    </section>
  );
};

export default Cart;
