import {createContext, crreateContext, useContext} from 'react'

export const TodoContext = createContext({
    todos:[
        {
            id:1,
            todo:" todo Title",
            completed : false,
        }
    ],
    addTodo : (todo)=>{},
    updateTodo:(id, todo) =>{},
    deteleTodo: (id)=>{},
    toggleComplete: (id)=>{}
})

export const useTodo = () => {
    return useContext(TodoContext)
}

export const TodoProvider = TodoContext.Provider