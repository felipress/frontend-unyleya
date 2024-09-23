import { useState } from 'react'
import "./TodoList.css"
import TodoItem from "./TodoItem"

const TodoList = () => {
    const [tarefas, setTarefas] = useState(["ir ao mercado"])
    const handleClick = () => {
        setTarefas([...tarefas, "cortar o cabelo"])
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
            <button onClick={handleClick}>adicionar tarefa</button>
        </section>
    )
}

export default TodoList