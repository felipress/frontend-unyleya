const Button = (props) => {
    const {type, children, color, size, href = ""} = props
    
    switch(type){
        case "a":
            return (
                <a href={href} class={"button" + " " + color + " " + size}>{children}</a>
            )
        case "input":
            return (
                <input type="button" className={"button" + " " + color + " " + size} value={children} />
            )
        case "button":
        default:
            return (
                <button className={"button" + " " + color + " " + size}>{children}</button>
            )
    }
}

export default Button