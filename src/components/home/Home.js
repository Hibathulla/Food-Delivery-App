import Navbar from "../navbar/Navbar"
import Food from "./meals.png"

import classes from "./home.module.scss"

const Home = (props) => {

  const homeHandler = () => {
      props.homeHandler(true)
  }

  return <section className={classes.home}>
  <Navbar />
  <div className={classes.home__content}>
      <div className={classes.home__left}>

        <div className={classes.home__textbox}>
          <h2 className={classes.home__title1}>Delciuous Food</h2>
          <h2 className={classes.home__title2}>Served right to you</h2>
        </div>
        <a href="" className={classes.home__button}>Explore Menu</a>
      </div>

      <div className={classes.home__right}>
      <img src={Food} alt="" className={classes.home__food} />
      </div>
      </div>
  </section>
};

export default Home;
