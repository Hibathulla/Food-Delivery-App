import classes from "./CartItems.module.scss"

const CartItems = (props) => {

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
                <button className={classes.items__btnplus} onClick={props.onAdd}>+</button>
                <div className={classes.items__number}>{props.amount}</div>
                <button className={classes.items__btnminus} onClick={props.onRemove}>-</button>
            </div>
        </div>
    )
}

export default CartItems;