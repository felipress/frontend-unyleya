import './assets/css/MyTasks.form.css'
import {useState} from 'react'

const MyTasksForm = ({onAdd}) => {
    const [inputText, setInputText] = useState("")

    const handleChange = (event) => {
        setInputText(event.target.value)
    }
    const handleClick = () => {
        onAdd(inputText)
        setInputText("")
    }
    const handleSubmit = (event) => {
        event.preventDefault()
    }
    
    return (
        <form className="mytasks-form" key="mytasks-form" onSubmit={handleSubmit}>
            <input type="text" name="mytasks-input" onChange={handleChange} value={inputText} />
            <button onClick={handleClick}>+</button>
        </form>
    )
}

export default MyTasksForm