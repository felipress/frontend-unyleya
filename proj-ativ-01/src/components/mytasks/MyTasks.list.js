import './assets/css/MyTasks.list.css'
import MyTasksListItem from "./MyTasks.list.item"

const MyTasksList = () => {
    const tasksList = ['Comida', 'Cozinha', 'Limpara a Casa']
    return (
        <ol className="mytasks-list">
            Comece adicionando uma tarefa
            {tasksList.map((item) => {
                return <MyTasksListItem>{item}</MyTasksListItem>
            })}
        </ol>
    )
}

export default MyTasksList