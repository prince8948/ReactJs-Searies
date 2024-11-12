import { useEffect, useState } from 'react'
import './App.css'
import {TodoProvider} from "./contexts"
import TodoForm from './components/TodoForm'
import TodoItem from './components/TodoItem'

function App() {
  const [todos, setTodos] = useState([])

  const addTodo = (todo)=>{
    setTodos((prev)=> [{id : Date.now(), ...todo}, ...prev])
  }

  const updateTodo = (id, todo)=>{
    setTodos((prev)=>prev.map((prevtodo)=>(prevtodo.id === id ? todo : prevtodo)))
  }

  const deleteTodo = (id)=>{
    setTodos((prev)=>prev.filter((prevTodo)=> prevTodo.id !== id ))
  } 

  const toggleComplete = (id)=>{
    setTodos((prev)=> prev.map((prevTodo)=> prevTodo.id ===id ? {...prevTodo, completed: !prevTodo.completed} : prevTodo))
  }

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"))
    if(todos && todos.length > 0){
      setTodos(todos)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])
  


  

  return (
    <TodoProvider value={{todos, addTodo, deleteTodo, toggleComplete, updateTodo}}>
      <div className="bg-[#15263f] h-screen py-8">
        <div className=" bg-[#20375a] w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-4xl font-bold text-center mb-8 mt-2">Manage Your Daily Task/Work</h1>
          <div className="mb-4">
            <TodoForm/>
          </div>
          <div className="flex flex-wrap gap-y-3">
            {/*Loop and Add TodoItem here */}
            {todos.map((todo) => (
              <div key={todo.id} className='w-full'>
                <TodoItem todo={todo}/>
              </div>
            ))}
          </div>
        </div>
      </div>
    </TodoProvider>
  )
}

export default App
