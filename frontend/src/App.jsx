import { useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

const handleInputChange=(e)=>{
  setTask(e.target.value)
}
const handleSubmit=(e)=>{
  e.preventdefault();
  if(task.trim()){
      setTodos([...todos,task])
      setTask('')
  }
}

  return (
    <>
    <div className="todo-app">
      <h1>Todo List</h1>
      <form action="" onSubmit={handleSubmit}>
        <input type="text" name="" id="" value={task} onChange={handleInputChange} placeholder='enter your task' />
        <button type='submit'>Add Task</button>
      </form>
      <ul>
        {todos.map((todo,index)=>{
          <li key={index}>
            {todo}
          </li>
        })}
      </ul>
    </div>
    </>
  )
}

export default App
