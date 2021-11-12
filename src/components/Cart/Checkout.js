import { useRef } from "react";
import classes from "./Checkout.module.scss"

const Checkout = () => {

    const nameRef = useRef();
  const streetRef = useRef();
  const postalRef = useRef();
  const cityRef = useRef();

    const addressSubHandler = (event) => {
        event.preventDefault();

        const enteredName = nameRef.current.value;
        const enteredCity = cityRef.current.value;
        const enteredStreet = streetRef.current.value;
        const enteredPostal = postalRef.current.value; 

        console.log(enteredName, enteredCity, enteredStreet, enteredPostal);
    }

    return (
        <div className={classes.checkout}>
<form onSubmit={addressSubHandler}>

        <div className={classes.checkout__top}>
      <h2 className={classes.checkout__heading}>Checkout</h2>
    </div>

    <div className={classes.checkout__bottom}>

        <div className={classes.checkout__formGroup}>
        <label className={classes.checkout__label} htmlFor="name">Your Name</label>
        <input className={classes.checkout__input} ref={nameRef} type="text" id="name" autoComplete="off" required />
        </div>

        <div className={classes.checkout__formGroup}>
        <label className={classes.checkout__label} for="street">street</label>
        <input className={classes.checkout__input} ref={streetRef} type="text" autoComplete="off" id="street" />
        </div>

        <div className={classes.checkout__formGroup}>
        <label className={classes.checkout__label} for="city">city</label>
        <input className={classes.checkout__input} ref={cityRef} type="text" autoComplete="off" id="city" />
        </div>

        <div className={classes.checkout__formGroup}>
        <label className={classes.checkout__label} for="pin">Postal code</label>
        <input className={classes.checkout__input} type="text" ref={postalRef} autoComplete="off" id="pin" />
        </div>
    </div>

    <button className={classes.checkout__confirm}>Place order</button>
    </form>
        </div>
    )
}

export default Checkout;