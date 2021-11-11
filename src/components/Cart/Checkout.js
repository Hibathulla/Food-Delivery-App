import classes from "./Checkout.module.scss"

const Checkout = () => {
    return (
        <div className={classes.checkout}>

        <div className={classes.checkout__top}>
      <h2 className={classes.checkout__heading}>Checkout</h2>
    </div>

    <div className={classes.checkout__bottom}>

    </div>

    <button className={classes.checkout__confirm}>Place order</button>
        </div>
    )
}

export default Checkout;