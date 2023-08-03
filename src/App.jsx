import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import Input from './components/Input'
import List from './components/List'



function App() {
  const [task, setTask] = useState([])


  const editTask=(id)=>{
      setTask(task.map(todo => todo.id == id ? {...todo, isEdited: !todo.isEdited}: todo))
      console.log(task)
  }
 

  const addTask = (input)=>{
    setTask(
      [...task,
      {
        id: crypto.randomUUID(),
        title: input,
        isCompleted: false,
        isEdited: false
      }]
    )
    console.log(task)
  }
  const deleteTask=(id)=>{
    console.log(id)
   
    setTask(task.filter(todo => todo.id != id))
    console.log(task)
  }

  const completeTask=(id)=>{
    setTask(task.map(todo=>todo.id==id? {...todo, isCompleted: !todo.isCompleted}: todo))
    console.log(task);
  }

  return (
    <div className='border rounded-lg border-gray-400 h-full pb-4 px-4'>
    <div className='m-auto bg-slate-200 p-3 border rounded-b-lg border-gray-400'>
      <Header/>
    </div>
    <div className='mt-4'>
      <Input addTask={addTask}/>
      </div>
      {task.map(
        (todo, index)=>( 
          <List task={todo} key={index} deleteTask={deleteTask} completeTask={completeTask}
            editTask={editTask}/>
          )
        
      )}
    </div>
  )
}

export default App
