import './assets/css/MyTasks.css'
import logo from './assets/img/logo.svg'
import MyTasksList from './MyTasks.list'
import MyTasksForm from './MyTasks.form'

const MyTasks = () => {
    return (
        <div className="mytasks">
            <header className="mytasks-header">
                <img src={logo} alt="mytasks" className="mytasks-brand" id="mytasks-brand" />
            </header>
            <main className="mytasks-main">
                <MyTasksList></MyTasksList>
                <MyTasksForm></MyTasksForm>
            </main>
        </div>
    )   
}

export default MyTasks