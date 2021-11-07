import { useContext } from "react";
import classes from "./FoodCategory.module.scss";

import Food from "../Food/Food";

import FoodContext from "../../store/food-context.js";

const FoodCategory = () => {

  const category = new Set(Food.map((food) => food.category));
  const categories = ["All Menu", ...category]

  const ctx = useContext(FoodContext);

  const clickHandler = (event) => {
    const selectedItem = event.target.value
    console.log(event.target.value);
    ctx.addCategory(selectedItem)
  }

  return (
    <section className={classes.category} id="category">

    <div className={classes.category__headingbox}>
      <h2 className={classes.category__heading}>Our Category</h2>
    </div>

    <button className={classes.category__box} value="All Menu" onClick={clickHandler}>
     <span className={classes.category__name}>All Menu</span>
    </button>

     <button className={classes.category__box} value="Breakfast" onClick={clickHandler}>
     <span className={classes.category__name}>Breakfast</span>
    </button>

    <button className={classes.category__box} value="Lunch" onClick={clickHandler}>
     <span className={classes.category__name}>Lunch</span>
    </button>

    <button className={classes.category__box} value="Dinner" onClick={clickHandler}>
     <span className={classes.category__name}>Dinner</span>
    </button>
    
    </section>
  );
};

export default FoodCategory;
