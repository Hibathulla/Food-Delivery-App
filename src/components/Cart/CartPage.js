import { useContext } from "react"
import FoodContext from "../../store/food-context"
import CartItems from "./CartItems.js"

import classes from "./CartPage.module.scss"

const CartPage = (props) => {

    const ctx = useContext(FoodContext)


  
    const onAddHandler = (item) => {
  ctx.addItem({...item, amount: 1})
    }

    const onRemoveHandler = (item) => {
        ctx.removeItem(item.id)
    }

    // const submitHandler = (userDetails) => {
    //     fetch("https://food-delivery-app-4d49c-default-rtdb.firebaseio.com/order.json", {
    //       method: "POST",
    //       body: JSON.stringify({
    //         user: userDetails,
    //         orderedItems: ctx.items
    //       })
    //     })
    //   }
  
    return (
      <section className={classes.cart}>
      <div className={classes.cart__top}>
        <h2 className={classes.cart__heading}>Shopping Cart</h2>
      </div>
      <div className={classes.cart__bottom}>
      {ctx.items.map(item => (
        <CartItems
        key={item.id}
        onRemove={onRemoveHandler.bind(null, item)}
         name={item.name}
         img={item.img}
         price={item.price}
         amount={item.amount}
         onAdd={onAddHandler.bind(null, item)}
         />
      ))}
      <h2 className={classes.cart__bottom_amount}>Total Amount: {ctx.amount}</h2>
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

  export default CartPage;