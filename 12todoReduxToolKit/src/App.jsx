import { useState } from 'react'
import './App.css'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'

function App() {

  return (
    <div>
      <h1 className='text-3xl w-full text-white font-extrabold'>Learn ABout Tedux tool kit </h1>
      <AddTodo/>
      <Todos/>
    </div>
  )
}

export default App
