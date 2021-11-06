import { useReducer, useState } from "react";

import FoodContext from "./food-context";

const defaultCart = {
  items: [],
  category: "",
  amount: 0,
};

const cartReducer = (state, action) => {
  if (action.type === "ADD") {

    const updatedAmount = state.amount + action.item.price * action.item.amount;

    console.log(action.item.amount);
    const existingIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );
    console.log(existingIndex);
    const existingItem = state.items[existingIndex];
    let updatedItems;

    if (existingItem) {
      let updatedItem = {
        ...existingItem,
        amount: existingItem.amount + action.item.amount,
      };
      updatedItems = [...state.items];
      updatedItems[existingIndex] = updatedItem;
    } 
    
    else {
      updatedItems = state.items.concat(action.item);
    }

    return {
      items: updatedItems,
      amount: updatedAmount
    };
  }

  if (action.type === "CATEGORY") {
    state.category = action.cat;
    console.log(state.category);
  }

  if (action.type === "CLEAR_CART") {
    return {
      items: [],
    };
  }
  if (action.type === "REMOVE") {
    const deletedItem = state.items.filter((item) => item.id !== action.id);
    console.log(deletedItem);
    return {
      items: deletedItem,
    };
  }
};

const FoodProvider = (props) => {
  const [cart, dispatchCart] = useReducer(cartReducer, defaultCart);
  const [categories, setCategories] = useState("");

  const clearCartHandler = () => {
    dispatchCart({ type: "CLEAR_CART" });
  };

  const addItemHandler = (item) => {
    dispatchCart({ type: "ADD", item: item });
  };

  const addCategoryHandler = (category) => {
    console.log(category);
    setCategories(category);
  };

  const Increase = (id) => {
    dispatchCart({ type: "INCREASE", id: id });
  };

  const Remove = (id) => {
    dispatchCart({ type: "REMOVE", id: id });
  };

  const foodContext = {
    items: cart.items,
    category: categories,
    amount: cart.amount,
    addItem: addItemHandler,
    addCategory: addCategoryHandler,
    clearCart: clearCartHandler,
    removeItem: Remove,
    IncreaseItem: Increase,
  };

  return (
    <FoodContext.Provider value={foodContext}>
      {props.children}
    </FoodContext.Provider>
  );
};

export default FoodProvider;
