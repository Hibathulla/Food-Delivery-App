import {useState } from "react"

import FoodProvider from "./store/FoodProvider.js";

import Home from "./components/home/Home.js";
import AllFood from "./components/Food/AllFood.js";
import CartModal from "./components/Cart/CartModal.js";

function App() {

  const[cart, setCart] = useState(false)

  const cartHandler = () => {
    setCart(true);
  }

  const closeHandler = () => {
    setCart(false);
  }

  return (
    <FoodProvider>
    <main>
    <Home cartToRoot={cartHandler} />
     <AllFood />
     </main>
     {cart && <CartModal onClick={closeHandler} />}
    </FoodProvider>
  );
}

export default App;
