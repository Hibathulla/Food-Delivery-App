import classes from "./button.module.css"

const Button = props => {
    return <button className={`${classes.btn} ${classes[props.but]}`} onClick={props.onClick} value={props.value}>
        {props.children}
    </button>
}

export default Button;