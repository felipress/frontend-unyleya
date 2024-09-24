import { useState } from 'react'
import "./TodoList.css"
import TodoItem from "./TodoItem"

const TodoList = () => {
    const [tarefas, setTarefas] = useState(["ir ao mercado"])
    const [tarefaInput, setTarefaInput] = useState("")
    
    const handleClick = () => {
        setTarefas([...tarefas, tarefaInput])
        setTarefaInput("")
    }
    const handleChange = (event) => {
        setTarefaInput(event.target.value)
    }
    // const tarefas = ['ir ao mercado', 'estudar', 'lavar roupa', 'cozinhar']

    return (
        <section className="todolist">
            <h2 className="todo-title">Minha lista de tarefas</h2>
            <ol className="todos">
                {
                    tarefas.map((tarefa, index) => {
                        return <TodoItem key={index}>{tarefa}</TodoItem>
                    })
                }
            </ol>
            <div className="tarefa-form">
                <input type="text" name="tarefa-input" id="tarefa-input" placeholder="Nova tarefa" value={tarefaInput} onChange={handleChange} />
                <button onClick={handleClick}>adicionar tarefa</button>
            </div>
        </section>
    )
}

export default TodoList