const Reverse = () => {
    const reverseText = props.children.split('').reverse().join('')
    return (
        <div>{reverseText}</div>
    )
}

export default Reverse