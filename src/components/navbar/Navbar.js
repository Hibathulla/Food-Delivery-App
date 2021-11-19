import FoodContext from "../../store/food-context";
import classes from "./navbar.module.scss"
import { FaSearch } from "react-icons/fa"
import { MdOutlineShoppingBag } from "react-icons/md";
import { useContext, useEffect, useState } from "react";

const Navbar = (props) => {

    const [scroll, setScroll] = useState(false);
    const [btn, setBtn] = useState(false);

    window.onscroll = () => {
        setScroll(window.pageYOffset === 0 ? false : true)
        return () => window.onscroll = null
    }
    console.log(scroll);

    const ctx = useContext(FoodContext)

    const numberItems = ctx.items.reduce((curNumber, item) => {
        return curNumber + item.amount;
    }, 0)

    useEffect(() => {
        if(ctx.items === 0) {
            setBtn(false)
        }
        setBtn(true)
        setTimeout(() => {
            setBtn(false)
        }, 300)
    }, [ctx.items])

    return (
        <header className={classes.header}>

        {scroll && 
        <button className={classes.header__windscroll} onClick={props.setCart}>
        <MdOutlineShoppingBag className={classes.header__bag} />
        <div className={`${classes.header__bagno2} ${btn ? classes.header__bump : ""}`}>{numberItems}</div>
        </button>}

        <div className={classes.header__titlebox}>
        <h1 className={classes.header__title}>Fudo</h1>
        </div>
        <nav>
            <ul className={classes.nav__ul}>
                {/* <li><a href="/#home">Home</a></li>
                <li><a href="/#category">Category</a></li>
                <li><a a href="/#menu">Menu</a></li>
                <li><a>Footer</a></li> */}
            </ul>
        </nav>
        <div className={classes.header__icons}>
        <FaSearch className={classes.header__search} />

        <button className={classes.header__carticon} onClick={props.setCart}>
        <MdOutlineShoppingBag className={classes.header__bag} />
        <div className={classes.header__bagno}>{numberItems}</div>
        </button>
        
        <button  className={classes.header__button}>Contact us</button>
        </div>
        </header>
    )
}

export default Navbar;