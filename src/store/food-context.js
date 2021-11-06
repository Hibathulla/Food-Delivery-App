import React from "react";

const FoodContext = React.createContext({
    items: [],
    category: "",
    addItem: (item) => {},
    addCategory: (category) => {},
    removeItem: (id) => {}
})

export default FoodContext;