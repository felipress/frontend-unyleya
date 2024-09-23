const Button = (props) => {
    const {type, styles, children, href = ""} = props
    
    switch(type){
        case "a":
            return (
                <a href={href} className={"button " + styles}>{children}</a>
            )
        case "input":
            return (
                <input type="button" className={"button " + styles} value={children} />
            )
        case "button":
        default:
            return (
                <button className={"button " + styles}>{children}</button>
            )
    }
}

export default Button