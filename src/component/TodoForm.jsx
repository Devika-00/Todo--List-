import React,{useState} from 'react'
import toast from 'react-hot-toast';

const TodoForm = ({addTask}) => {
    const [newTask,setNewTask] = useState("");

        const handleSubmit = (e) =>{
            e.preventDefault();
            if(newTask.trim() !== ""){
                addTask(newTask);
                setNewTask('');
            }else{
                toast.error("enter something");
            }
        }

  return (
    <div>
       <form className='TodoForm' onSubmit={handleSubmit}>
        <input type='text'
        className='todo-input'
        placeholder='write a task'
        value={newTask}
        onChange={(e) => {setNewTask(e.target.value)}}/>
        <button type="submit" className="todo-btn">
        Add Task
      </button>
        </form> 
    </div>
  )
}

export default TodoForm