import {useContext, useState } from "react"

import FoodProvider from "./store/FoodProvider.js";
import FoodContext from "./store/food-context.js";

import Home from "./components/home/Home.js";
import AllFood from "./components/Food/AllFood.js";
import CartModal from "./components/Cart/CartModal.js";

function App() {

  const[cart, setCart] = useState(false)

  const ctx = useContext(FoodContext)
  console.log(ctx.items);

  const cartHandler = () => {
    setCart(true);
  }

  const closeHandler = () => {
    setCart(false);
  }

  const submitHandler = (userDetails) => {
    fetch("https://food-delivery-app-4d49c-default-rtdb.firebaseio.com/order.json", {
      method: "POST",
      body: JSON.stringify({
        user: userDetails,
        orderedItems: ctx.items
      })
    })
  }

  return (
    <FoodProvider>
    <main>
    <Home cartToRoot={cartHandler} />
     <AllFood />
     </main>
     {cart && <CartModal onOrder={submitHandler} onClick={closeHandler} />}
    </FoodProvider>
  );
}

export default App;
