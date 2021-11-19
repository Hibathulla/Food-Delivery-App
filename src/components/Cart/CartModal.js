import { Fragment, useState } from "react";
import ReactDom from "react-dom";

import CartPage from "./CartPage";
import Checkout from "./Checkout";

import classes from "./CartModal.module.scss";

const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onClick}></div>
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
        checkout ? <Checkout confirm={props.confirm} /> : <CartPage checkout={checkoutHandler} />,
        document.getElementById("overlay-root")
      )}
  </Fragment>
}



export default CartModal;
