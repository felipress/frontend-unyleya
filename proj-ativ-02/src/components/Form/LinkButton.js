import { Link } from "react-router-dom"
import "./Button.css"

const LinkButton = ({to, children, styles}) => {
    styles = "button " + styles;
    return (
        <Link to={to} className={styles}>{children}</Link>
    )
}

export default LinkButton