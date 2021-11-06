import { useContext } from "react";
import classes from "./FoodCategory.module.scss";
import Food from "../Food/Food";
import SingleCategory from "./SingleCategory";
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
    // <section className={classes.section}>
    //   <div>
    //     <h1 className={classes.heading}>Category</h1>
    //     <div className={classes.underline}></div>
    //   </div>
    //   <ul className={classes.list}>
    //     {categories.map((item, index) => (
    //       <button key={index} onClick={clickHandler} value={item}>{item}</button>
    //     ))}
    //   </ul>
    // </section>

    <section className={classes.category}>
      <div className={classes.category__lists}>

        <div className={classes.category__box}>
        <div className={classes.category__imagebox}>
        <img className={classes.category__image} src="https://img.icons8.com/external-justicon-flat-justicon/64/000000/external-breakfast-hotel-essentials-justicon-flat-justicon.png"/>
        </div>
        <h5 className={classes.category__text}>Breakfast</h5>
        </div>

        {/* <div className={classes.category__box}>
        <a className={classes.category__image} href="https://icons8.com/icon/z4HjarWL0VDu/dinner">Dinner icon by Icons8</a>
        <h5 className={classes.category__text}>Lunch</h5>
        </div>

        <div className={classes.category__box}>
        <img className={classes.category__image} src="https://img.icons8.com/pastel-glyph/64/000000/lunch--v2.png"/>
        <h5 className={classes.category__text}>Dinner</h5>
        </div> */}
      </div>
    </section>
  );
};

export default FoodCategory;
