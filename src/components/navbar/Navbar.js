import FoodContext from "../../store/food-context";
import classes from "./navbar.module.scss"
import { FaSearch } from "react-icons/fa"
import { MdOutlineShoppingBag } from "react-icons/md";
import { useContext } from "react";

const Navbar = () => {

    const ctx = useContext(FoodContext)

    const numberItems = ctx.items.reduce((curNumber, item) => {
        return curNumber + item.amount;
    }, 0)

    return (
        <header className={classes.header}>
        <div className={classes.header__titlebox}>
        <h1 className={classes.header__title}>Fudo</h1>
        </div>
        <nav>
            <ul className={classes.nav__ul}>
                <li><a>Home</a></li>
                <li><a>Category</a></li>
                <li><a>Menu</a></li>
                <li><a>Footer</a></li>
            </ul>
        </nav>
        <div className={classes.header__icons}>
        <FaSearch className={classes.header__search} />
        <MdOutlineShoppingBag className={classes.header__bag} />
        <a href="#" className={classes.header__button}>Contact us</a>
        </div>
        </header>
    )
}

export default Navbar;