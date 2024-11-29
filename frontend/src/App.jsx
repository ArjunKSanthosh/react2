import { useRef, useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
const[task,setTask]=useState('')
const[todos,setTodos]=useState([])
const handleInputChange=(e)=>{
  setTask(e.target.value)
}
const handleSubmit=async(e)=>{
  e.preventDefault();
  if(task.trim()){
    const res=await fetch("http://localhost:3000/api/addtodo",
    {
     method:"POST",
     headers:{"Content-Type":"Application/json"},
     body:JSON.stringify({task})
    })
    const data=await res.json()
    res.status==201?alert(data.msg):alert(data.msg)
    getTodo()
  }

}
const getTodo=async()=>{
  const res=await fetch("http://localhost:3000/api/gettodos")
  console.log(res);
  const data=await res.json();
  setTodos([...data])
  
}
useEffect(()=>{
getTodo()
setTask("")
},[])
console.log(todos);


  return (
    <>
    <div className="todo-app">
      <h1>Todo List</h1>
      <form action="" onSubmit={handleSubmit}>
        <input type="text" name="" id="" value={task} onChange={handleInputChange} placeholder='enter your task' />
        <button type='submit'>Add Task</button>
      </form>
      <ul>
        {todos.map((todos,index)=>{
          <li key={index}>
            {todos}
          </li>
        })}
      </ul>
    </div>
    </>
  )
}

export default App
