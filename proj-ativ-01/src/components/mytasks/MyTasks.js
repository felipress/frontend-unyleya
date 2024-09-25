import './assets/css/MyTasks.css'
import logo from './assets/img/logo.svg'
import MyTasksList from './MyTasks.list'
import MyTasksForm from './MyTasks.form'
import { useState } from 'react'

const MyTasks = () => {
    const [tasksList, setTasksList] = useState([])
    const addItem = (item) => {
        setTasksList([...tasksList, item])
    }

    return (
        <div className="mytasks">
            <header className="mytasks-header">
                <img src={logo} alt="mytasks" className="mytasks-brand" id="mytasks-brand" />
            </header>
            <main className="mytasks-main">
                <MyTasksList data={tasksList}></MyTasksList>
                <MyTasksForm onAdd={addItem}></MyTasksForm>
            </main>
        </div>
    )   
}

export default MyTasks