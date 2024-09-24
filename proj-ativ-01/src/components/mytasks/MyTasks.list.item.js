const MyTasksListItem = ({children}) => {
    return (
        <li className="mytasks-list-item">
            <input type="checkbox" /> {children}
        </li>
    )
}

export default MyTasksListItem