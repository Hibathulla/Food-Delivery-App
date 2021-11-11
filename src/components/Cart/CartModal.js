import { Fragment, useState } from "react";
import ReactDom from "react-dom";
import { useContext } from "react";

import CartItems from "./CartItems";
import Checkout from "./Checkout";

import FoodContext from "../../store/food-context";

import classes from "./CartModal.module.scss";

const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onClick}></div>
}

const Cart = (props) => {

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
    {ctx.items.map(item => (
      <CartItems
       name={item.name}
       img={item.img}
       price={item.price}
       onAdd={onAddHandler.bind(null, item)}
       />
    ))}
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
    <button className={classes.cart__confirm} onClick={props.checkout}>Confirm</button>
    </section>
  );
}

const CartModal = (props) => {

  const [checkout, setCheckout] = useState(false)

  const checkoutHandler = () => {
    setCheckout(true);
  }

  return <Fragment>
      {ReactDom.createPortal(
        <Backdrop onClick={props.onClick} />,
        document.getElementById("backdrop-root")
      )}

      {ReactDom.createPortal(
        checkout ? <Checkout /> : <Cart checkout={checkoutHandler} />,
        document.getElementById("overlay-root")
      )}
  </Fragment>
}



export default CartModal;
