import { useContext } from "react";
import classes from "./FoodCategory.module.scss";

import FoodContext from "../../store/food-context.js";

const FoodCategory = () => {

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
     All Menu
    </button>

     <button className={classes.category__box} value="Breakfast" onClick={clickHandler}>
     Breakfast
    </button>

    <button className={classes.category__box} value="Lunch" onClick={clickHandler}>
     Lunch
    </button>

    <button className={classes.category__box} value="Dinner" onClick={clickHandler}>
     Dinner
    </button>
    
    </section>
  );
};

export default FoodCategory;
