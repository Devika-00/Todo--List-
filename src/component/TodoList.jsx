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
      setTasks([...tasks,{ text: newTask, isEditing: false }]);
    }
  }

  const onDelete =(index) =>{
    const newTasks = [...tasks]
    newTasks.splice(index,1)
    setTasks(newTasks)
  }

  const onEdit = (index) => {
    const newTasks = [...tasks];
    newTasks[index].isEditing = true;
    setTasks(newTasks);
  };

  const onSaveEdit = (index, newText) => {
    const newTasks = [...tasks];
    newTasks[index].text = newText;
    newTasks[index].isEditing = false;
    setTasks(newTasks);
  };



  return (
    <div className='header'>
        <h1>Todo List</h1>
        <TodoForm addTask={addTask}/>
        {tasks.map((task,index)=>{
          return <Todo task={task} key={index}
          onDelete={onDelete} index={index}
          onEdit={onEdit}
          onSaveEdit={onSaveEdit}/>

        })}
        <Toaster/>
    </div>
  )
}

export default Header