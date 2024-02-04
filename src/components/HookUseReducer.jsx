import React from "react";
import { useReducer, useState } from "react";
// useReducer tambem faz o mesmo papel do useState, porem vc consegue criar uma funcao para gerenciar as variaveis
// pode-se construir estruturas mais complexas usando switch com actions
const HookUseReducer = () => {
    const [tasksText, setTasksText] = useState('')
    const [num, dispatch] = useReducer((state, action) => {
        return Math.random(state)
    })
    const initialTasks = [
        {id: 1, text: 'Fazer alguma coisa'},
        {id: 2, text: 'Fazer outra coisa'}
    ]
    const taskReducer = (state, action) => {
        switch(action.type){
            case 'ADD':
                const newTask = {
                    id: Math.random(),
                    text: tasksText,
                }
                setTasksText('')
                return [...state, newTask]
            case 'DELETE':
                return state.filter(task => task.id !== action.id)
            default:
                return state
        }
    }
    const [tasks, dispatchTasks] = useReducer(taskReducer, initialTasks)

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatchTasks({type: 'ADD'})
    }
    const removeTask = (id) => {
        dispatchTasks({type: 'DELETE', id}) // esta reduzido, pois o nome da chave e o mesmo do parametro
    }
    return(
        <div>
            <h3>useReducer</h3>
            <p>Numero aleatorio: {num}</p>
            <button onClick={dispatch}>Gerar numero</button>
            <h4>Tarefas:</h4>
            <form onSubmit={handleSubmit}>
                <input type="text" value={tasksText} onChange={e => setTasksText(e.target.value)}/>
                <button>Cadastrar tarefa</button>
            </form>
            {tasks.map(task => (<p key={task.id} onDoubleClick={() => removeTask(task.id)}>{task.text}</p>))}
            <hr />
        </div>
    )
}

export default HookUseReducer