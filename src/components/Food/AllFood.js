import { Fragment } from "react";
import FoodCategory from "../Categories/FoodCategory";
import FoodItems from "./FoodItems";

const AllFood = () => {
  return (
    <Fragment>
      <FoodCategory />
      <FoodItems />
    </Fragment>
  );
};

export default AllFood;
