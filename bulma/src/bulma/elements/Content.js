const Content = ({styles, children}) => {
    return (
        <div class={"content " + styles}>{children}</div>
    )
}

export default Content