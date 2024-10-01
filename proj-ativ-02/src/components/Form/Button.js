import "./Button.css"

const Button = ({styles, children}) => {
    styles = "button " + styles
    return (
        <button className={styles}>{children}</button>
    )
}

export default Button