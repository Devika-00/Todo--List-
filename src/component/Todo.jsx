import React, { useState } from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faTrash } from "@fortawesome/free-solid-svg-icons";


const Todo = ({task,onDelete}) => {
    const [isComplete,setIsComplete] = useState(false);
    
    const handleCheckboxChange = () =>{
        setIsComplete(!isComplete)
    }

      return (
    <div className={`Todo ${isComplete ? 'completed' : ''}`}>
        <div className='checkbox'>
        <input type='checkbox' 
        checked={isComplete}
        onChange={handleCheckboxChange}/>
        <p className={isComplete ? 'completed-text' : ''}>{task}</p>
        </div>
        <FontAwesomeIcon icon={faTrash} className='fa-trash'onClick={onDelete}/>
    </div>
  )
}

export default Todo