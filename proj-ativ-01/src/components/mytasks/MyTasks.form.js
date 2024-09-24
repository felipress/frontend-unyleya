import './assets/css/MyTasks.form.css'
import {useState} from 'react'

const MyTasksForm = (tarefas) => {
    const [inputText, setInputText] = useState("")

    const handleChange = (event) => {
        setInputText(event.target.value)
    }
    const handleClick = () => {
        
    }
    const handleSubmit = (event) => {
        event.preventDefault()
    }
    
    return (
        <form className="mytasks-form" onSubmit={handleSubmit}>
            <input type="text" name="mytasks-input" onChange={handleChange} value={inputText} />
            <button>+</button>
        </form>
    )
}

export default MyTasksForm