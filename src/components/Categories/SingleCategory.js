import classes from "./SingleCategory.module.scss"

const SingleCategory = () => {
    return <div className={classes.category__box}>
    <img className={classes.category__image} src="https://img.icons8.com/external-justicon-flat-justicon/64/000000/external-breakfast-hotel-essentials-justicon-flat-justicon.png"/>
    <h5 className={classes.category__text}></h5>
    </div>
}

export default SingleCategory;