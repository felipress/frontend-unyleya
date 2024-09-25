import './assets/css/MyTasks.list.css'
import MyTasksListItem from "./MyTasks.list.item"

const MyTasksList = ({data}) => {
    return (
        <div>
            { data.length == 0 ? "Comece adicionando uma tarefa" : "" }
            <ol className="mytasks-list">
                {data.map((item, index) => {
                    return <MyTasksListItem key={index}>{item}</MyTasksListItem>
                })}
            </ol>
        </div>
    )
}

export default MyTasksList