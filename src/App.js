import { useState } from "react"
import FoodProvider from "./store/FoodProvider.js";
import Home from "./components/home/Home.js";
import AllFood from "./components/Food/AllFood.js";
import Cart from "./components/Cart/Cart.js";

function App() {

  return (
    <FoodProvider>
    <main>
    <Home />
     <AllFood />
     </main>
     <Cart />
    </FoodProvider>
  );
}

export default App;
