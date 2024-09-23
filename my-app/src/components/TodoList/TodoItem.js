const TodoItem = ({index, children}) => {
    return (
        <li className="todoitem" key={index}>
            <label>
                <input type="checkbox" name={"todoitem-" + index} />
                {children}
            </label>
        </li>
    )
}

export default TodoItem