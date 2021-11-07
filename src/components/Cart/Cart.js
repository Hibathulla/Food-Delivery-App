import { useContext } from "react";
import CartItems from "./CartItems";
import FoodContext from "../../store/food-context";

import classes from "./Cart.module.scss";

const Cart = () => {

  const ctx = useContext(FoodContext)

  const onAddHandler = (item) => {
ctx.addItem({...item, amount: 1})
  }

  console.log(ctx.items)

  return (
    <section className={classes.cart}>
    <div className={classes.cart__top}>
      <h2 className={classes.cart__heading}>Shopping Cart</h2>
    </div>
    <div className={classes.cart__bottom}>
      <CartItems />
    </div>


    {/* {ctx.items.map(item => (
      <li><CartItems
      id={item.id}
      key={item.id}
      name={item.name}
      Food={item.img}
      price={item.price}
      amount={item.amount}
      onAdd={onAddHandler.bind(null, item)}
       /></li>
    ))} */}
    </section>
  );
};

export default Cart;
