import React, { useState } from 'react'
import TodoForm from './TodoForm'
import Todo from './Todo'
import toast,{ Toaster } from 'react-hot-toast'

const Header = () => {
  const [tasks,setTasks] = useState([]);

  const addTask = (newTask) =>{
    if(tasks.includes(newTask.toLowerCase())){
      toast.error("Task already exists")
    }else{
      setTasks([...tasks,newTask]);
    }
  }

  const onDelete =(index) =>{
    const newTasks = [...tasks]
    newTasks.splice(index)
    setTasks(newTasks)
  }

  return (
    <div className='header'>
        <h1>Todo List</h1>
        <TodoForm addTask={addTask}/>
        {tasks.map((task,index)=>{
          return <Todo task={task} key={index}
          onDelete={onDelete} index={index}/>

        })}
        <Toaster/>
    </div>
  )
}

export default Header