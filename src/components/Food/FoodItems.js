import SingleFood from "./SingleFood";
import Food from "./Food.js";
import FoodContext from "../../store/food-context";
import classes from "./FoodItems.module.css";
import { useState, useContext, useEffect } from "react";

const FoodItems = () => {

  const [items, setItem] = useState(Food)

const ctx = useContext(FoodContext)

const { category } = ctx;

useEffect(() => {
  if(category) {
    const filteredItem = Food.filter((food) => category === food.category)
    category === "All Menu" ? setItem(Food) : setItem(filteredItem)
  }
}, [setItem ,ctx.context, category])

  return (
    <section className={classes.container}>
      {items.map((item) => (
        <SingleFood
        key={item.id}
        id={item.id}
          category={item.category}
          name={item.name}
          img={item.img}
          desc={item.desc}
          price={item.price}
        />
      ))}
    </section>
  );
};

export default FoodItems;
